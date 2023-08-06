import React from "react";
import { Input, Button } from "@chakra-ui/react";
import Logo from "../../assets/loading.svg";
import StatusCard from "./StatusCard";
import { process } from "../../../env";

export default function PNRStatus() {
  const [loader, setLoader] = React.useState(false);
  const [PNRData, setPNRData] = React.useState([]);
  const [input, setInput] = React.useState("");
  console.log(PNRData);

  async function getPNR() {
    setLoader(true);
    const url = `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${input}`;
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
      setPNRData((prevstate) => [...prevstate, result.data]);
    } catch (error) {
      console.error(error);
    }
    setLoader(false);
  }

  React.useEffect(() => {
    const item = localStorage.getItem("pnrData");
    if (item !== null) {
      setPNRData(JSON.parse(item));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("pnrData", JSON.stringify(PNRData));
  }, [PNRData]);

  const cards = PNRData.map((item) => {
    return (
      <StatusCard
        key={item.Pnr}
        from={item.From}
        to={item.To}
        doj={item.Doj}
        trainName={item.TrainName}
        trainNo={item.TrainNo}
        pnr={item.Pnr}
        departureTime={item.DepartureTime}
        arrivalTime={item.ArrivalTime}
        pf={item.ExpectedPlatformNo}
        chartStatus={item.ChartPrepared}
        passengersDetail={item.PassengerStatus}
      />
    );
  });
  return (
    <>
      <div className="bg-[#EEEEEE] mx-auto w-[80%] lg:w-[70%] rounded-xl mt-10 h-[220px] flex flex-col justify-start items-center font-lexend">
        <h1 className="font-lexend text-3xl my-6">PNR Status</h1>

        <Input
          value={input}
          variant="filled"
          placeholder="Enter your PNR number"
          width={"80%"}
          backgroundColor={"gray.400"}
          height={"3rem"}
          marginBottom={"4px"}
          className="placeholder:text-[#808080] font-lexend"
          onChange={() => setInput(event.target.value)}
        />

        {loader ? (
          <img src={Logo} className="mt-[-10px]" />
        ) : (
          <Button
            colorScheme="#3A4750"
            marginTop={"8px"}
            width={"9rem"}
            backgroundColor={"#3A4750"}
            className="font-lexend"
            onClick={getPNR}
          >
            Search
          </Button>
        )}
      </div>
      {PNRData.length !== 0 && cards}
    </>
  );
}
