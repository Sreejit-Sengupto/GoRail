import Arrow from "./../../assets/arrow.svg";
export default function SourceDestinationHeader({ source, destination }) {
  return (
    <div className="flex justify-between items-center w-[85%] lg:w-[60%] mx-auto bg-[#90B8F8] mt-10 py-2 px-4 lg:px-28 font-lexend rounded-lg text-md sticky top-4">
      <p>{source}</p>
      <img src={Arrow} alt="" className="w-20 lg:w-28" />
      <p>{destination}</p>
    </div>
  );
}
