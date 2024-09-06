import { useState } from "react";

const TimeSlot = (props) => {
  const [selectedState, setSelectedState] = useState(false);

  return (
    <div
      className={`${
        selectedState === false
          ? "bg-white border border-black text-black"
          : "bg-[#3070D0] border-none text-white"
      } w-16 h-8  hover:cursor-pointer rounded-lg flex justify-center items-center`}
      onClick={() => {
        props.setTime(props.time);
        setSelectedState(!selectedState);
      }}
    >
      {props.time.hour + ":" + props.time.minute}
    </div>
  );
};

export default TimeSlot;
