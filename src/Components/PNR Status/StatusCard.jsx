import React from "react";
import { AiFillDelete } from 'react-icons/ai'

export default function StatusCard({ from, to, doj, departureTime, arrivalTime, trainNo, trainName,pf, pnr, chartStatus, passengersDetail }) {
    // For seat numbers take the berth details as a prop and then map over them to create a card and then display.
  const berthDetails = passengersDetail &&  passengersDetail.map(item => {
        return(
            <div key={pnr+item.Number} className="bg-[#F6C90E] px-4 py-1 rounded-md mr-2 mb-2">{item.Coach}-{item.Berth}-{item.BookingBerthCode}</div>
        )
    })
  return (
    <div className="w-[75%] lg:w-[60%] h-[380px] lg:h-[320px] mx-auto bg-white mt-12 rounded-xl font-lexend">
      <div className="h-[20%] bg-[#5F85DB] rounded-tr-xl rounded-tl-xl flex justify-between items-center p-4 lg:p-8">
        <div className="flex flex-col justify-center items-center text-white">
          <p>{from}</p>
          <p>{departureTime}</p>
        </div>

        <p className="text-white">{doj}</p>

        <div className="flex flex-col justify-center items-center text-white">
          <p>{to}</p>
          <p>{arrivalTime}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 p-4">
        <p>{trainNo} - {trainName}</p>
        <div className="bg-[#698F3F] py-2 px-3 rounded-lg text-white">
          PF: {pf}
        </div>
      </div>

      <div className="flex flex-col justify-center items-start px-4 py-1">
        <p className="pb-1">PNR - {pnr}</p>
        <p>{chartStatus ? "Chart prepared" : "Chart not prepared"}</p>
        <p></p>
      </div>

      <div className="flex justify-start items-center px-4 mt-6 flex-wrap">
        {/* <div className="bg-[#F6C90E] px-4 py-1 rounded-md mr-2 mb-2">B3-31-SL</div>
        <div className="bg-[#F6C90E] px-4 py-1 rounded-md mr-2 mb-2">B3-31-SL</div>
        <div className="bg-[#F6C90E] px-4 py-1 rounded-md mr-2 mb-2">B3-31-SL</div>
        <div className="bg-[#F6C90E] px-4 py-1 rounded-md mr-2 mb-2">B3-31-SL</div> */}
        {berthDetails}
      </div>

      <div className="flex justify-end items-center px-4 text-[#DF2935] text-2xl">
        <AiFillDelete className="cursor-pointer"/>
      </div>
    </div>
  );
}
