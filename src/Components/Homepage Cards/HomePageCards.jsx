import Card from "./Card";
import pnrImg from "../../assets/PNR-img.jpg";
import runStatus from "../../assets/running-status.jpg";

export default function index() {
  return (
    <div className="lg:mt-24">
      <div className="hidden lg:flex flex-col justify-center items-center">
        <h1 className="font-lexend text-white text-4xl">Other Services</h1>
        <div className="w-32 bg-white h-[0.25rem] mb-11 rounded-xl"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-0">
        <h1 className="font-lexend text-white text-4xl lg:hidden">
          Other Services
        </h1>
        <div className="w-32 bg-white h-[0.25rem] mb-4 rounded-xl lg:hidden"></div>
        <Card
          to={"pnr"}
          image={pnrImg}
          heading={"Check your PNR"}
          description={"Enter your PNR number to get your PNR status"}
        />
        <Card
          image={runStatus}
          heading={"Running Status"}
          description={"Know current running details of your train"}
        />
        <Card
          image={pnrImg}
          heading={"Check your PNR status"}
          description={"Enter your PNR number to get your PNR status"}
        />
        <Card
          image={pnrImg}
          heading={"Check your PNR status"}
          description={"Enter your PNR number to get your PNR status"}
        />
      </div>
    </div>
  );
}
