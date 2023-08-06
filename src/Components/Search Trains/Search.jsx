import { Button } from "@chakra-ui/react";
import React from "react";
import InputField from "./InputField";
import SourceDestinationHeader from "./SourceDestinationHeader";
import TrainDetail from "./TrainDetail";
import DatePick from "./DatePick";
import { process } from "../../../env";
import { stationData } from "../stationData";
import Logo from "../../assets/loading.svg";
import { MdArrowBack } from "react-icons/md";

export default function Search() {
  const [sourceStnCode, setSourceStnCode] = React.useState("");
  const [desStnCode, setDesStnCode] = React.useState("");
  const [date, setDate] = React.useState("");
  const [trainList, setTrainList] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  // console.log(trainList.from_station_name);

  async function getTrains() {
    if (sourceStnCode == "" || desStnCode == "" || date == "") {
      alert("Please enter the required details");
    } else {
      setLoader(true);
      const url = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${sourceStnCode}&toStationCode=${desStnCode}&dateOfJourney=${date}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY,
          "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
        },
      };

      await fetch(url, options)
        .then((response) => response.json())
        .then((data) => setTrainList(data.data));
      setLoader(false);
    }
  }

  const train = trainList.map((item) => {
    return (
      <div key={item.train_number}>
        <TrainDetail
          type={
            item.train_type.length == 3
              ? item.train_type
              : item.train_type.substring(0, 4)
          }
          trainName={item.train_name}
          trainNum={item.train_number}
          sta={item.to_sta}
          std={item.from_std}
          runs={"Daily"}
          sourceStn={item.from_station_name}
          desStn={item.to_station_name}
        />
      </div>
    );
  });
  return trainList.length ? (
    <>
      <button
        className="flex justify-center items-center bg-[#71B340] py-1 px-2 ml-2 mt-2 rounded-md font-lexend"
        onClick={() => {
          setTrainList([]);
        }}
      >
        <MdArrowBack /> Go Back
      </button>
      <SourceDestinationHeader
        source={stationData.map((item) => {
          if (item.code.toLowerCase() == sourceStnCode.toLowerCase()) {
            return item.name;
          }
        })}
        destination={stationData.map((item) => {
          if (item.code.toLowerCase() == desStnCode.toLowerCase()) {
            return item.name;
          }
        })}
      />
      {train}
    </>
  ) : (
    <div className="bg-[#EEEEEE] mx-auto w-[80%] rounded-xl mt-10 h-[320px]">
      <p className="font-lexend flex justify-center items-center pt-4 text-xl">
        Search Trains
      </p>
      <div className="w-16 bg-black h-[0.125rem] mx-auto"></div>

      <div className="flex flex-col justify-center items-center mt-8">
        <InputField placeholder="From station" setStnCode={setSourceStnCode} />
        <InputField placeholder="To station" setStnCode={setDesStnCode} />
        <DatePick setDate={setDate} />

        {loader ? (
          <img src={Logo} className="mt-[-10px]" />
        ) : (
          <Button
            colorScheme="#3A4750"
            marginTop={"8px"}
            width={"9rem"}
            backgroundColor={"#3A4750"}
            className="font-lexend"
            onClick={getTrains}
          >
            Search
          </Button>
        )}
      </div>
    </div>
  );
}
