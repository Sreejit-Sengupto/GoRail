import { Button } from "@chakra-ui/react";
import React from "react";
import InputField from "./InputField";
import DatePick from "./DatePick";
import TrainDetail from "./TrainDetail";
import SourceDestinationHeader from "./SourceDestinationHeader";
import { trainData } from "./trainData";
import { process } from "../../../env";

export default function Search() {
  const [sourceStnCode, setSourceStnCode] = React.useState("");
  const [desStnCode, setDesStnCode] = React.useState("");
  const [date, setDate] = React.useState("");
  const [trainList, setTrainList] = React.useState("ls");
  console.log(trainList);

  async function getTrains() {
    const url = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${sourceStnCode}&toStationCode=${desStnCode}&dateOfJourney=${date}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTrainList(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  const trains = trainData.map((item) => {
    return (
      <>
        <SourceDestinationHeader
          source={item.from_station_name}
          destination={item.to_station_name}
        />
        <TrainDetail
          type={item.train_type}
          trainName={item.train_name}
          trainNum={item.train_number}
          sta={item.to_sta}
          std={item.from_std}
          runs={"Daily"}
          key={item.train_number}
        />
      </>
    );
  });
  return trainList ? (
    { trains }
  ) : (
    <div className="bg-[#EEEEEE] mx-auto w-[80%] rounded-xl mt-10 h-[320px]">
      <p className="font-lexend flex justify-center items-center pt-4">
        Search Trains
      </p>

      <div className="flex flex-col justify-center items-center mt-8">
        <InputField placeholder="From station" setStnCode={setSourceStnCode} />
        <InputField placeholder="To station" setStnCode={setDesStnCode} />
        <DatePick setDate={setDate} />
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
      </div>
    </div>
  );
}
