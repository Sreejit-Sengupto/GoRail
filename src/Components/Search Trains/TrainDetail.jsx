import arrow from "./../../assets/arrow-small.svg";
export default function TrainDetail({ type, trainNum, std, sta, trainName, runs }) {
  const style = {
    backgroundColor:
      type == "RAJ"
        ? "#E70E02"
        : type == "EXP"
        ? "#5ADBFF"
        : type == "MAIL"
        ? "#FFDD4A"
        : "#97DB4F",
  };
  return (
    <div className="bg-[#5F85DB] w-[90%] lg:w-[70%] flex flex-col justify-center items-between mx-auto my-3 py-2 px-4 font-lexend rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <p className="bg-[#3A4750] px-5 py-[0.125rem] rounded-md text-white mr-2">
            {trainNum}
          </p>
          <p>{std}</p>
          <img src={arrow} alt="" className="w-6 mx-[0.125rem]" />
          <p>{sta}</p>
        </div>
        <div className="flex justify-center items-center px-6 rounded-md" style={style}>
          {type}
        </div>
      </div>

      <div className="flex justify-between items-center text-white">
        <p>{trainName}</p>
        <p>{runs}</p>
      </div>
    </div>
  );
}
