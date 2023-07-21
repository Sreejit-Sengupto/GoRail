import React from "react";
import { Input } from "@chakra-ui/react";
import { BsCalendar2Date } from "react-icons/bs";
export default function DatePick({ setDate }) {
  return (
    <>
      <p className="font-lexend w-[80%] mt-2">Select date (mm/dd/yy)</p>
      <Input
        placeholder="Select date and time"
        size="md"
        type="date"
        width={"80%"}
        color={"black"}
        border={"2px"}
        // backgroundColor={"gray.400"}
        _placeholder={{ color: "black" }}
        position={"relative"}
        onChange={(event) => setDate(event.target.value)}
      />
      <BsCalendar2Date className="absolute right-24 bottom-[85px] lg:hidden" />
    </>
  );
}
