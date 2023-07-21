import { Input } from "@chakra-ui/react";
import React from "react";
import { stationData } from "../stationData";

export default function InputField({ placeholder, setStnCode }) {
  const [input, setInput] = React.useState("");
  console.log(input);
  const [suggestion, setSuggestion] = React.useState([]);
  const [showSuggestionBox, setShowSuggestionBox] = React.useState(false);
  const overlayRef = React.useRef(null)

  function showSuggestion(input) {
    setShowSuggestionBox(true);

    const filteredStations = stationData.filter((station) =>
      station.name.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestion(filteredStations);
  }

  function handleSelection(station) {
    setStnCode(station.code)
    setInput(station.name);
    setShowSuggestionBox(false);
  }

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setShowSuggestionBox(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
      <div className="flex flex-col justify-center items-center w-full relative" ref={overlayRef}>
        <Input
          value={input}
          variant="filled"
          placeholder={placeholder}
          width={'80%'}
          backgroundColor={"gray.400"}
          height={"3rem"}
          marginBottom={"4px"}
          className="placeholder:text-[#808080] font-lexend absolute"
          onChange={(event) => {
            setInput(event.target.value);
            showSuggestion(event.target.value);
          }}
        />

      {showSuggestionBox && (
        <div className="bg-white absolute top-[100%] left-10 lg:left-[120px] w-[70%] h-fit overflow-y-auto px-4 py-2 rounded-md cursor-pointer z-10">
          {suggestion.map((station) => {
            return (
              <div
                key={station.code}
                className="font-lexend mb-4 flex justify-start items-center"  
                onClick={() => handleSelection(station)}
              >
                <p className="bg-blue-400 p-2 mr-2 w-20 flex justify-center items-center overflow-x-hidden">{station.code}</p>
                <p>{station.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
