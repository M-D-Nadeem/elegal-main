import TimeSlot from "./TimeSlot";
import { useState } from "react";

const CalendarDateCard = (props) => {
  const [selectedState, setSelectedState] = useState(false);

  return (
    <div
      className={`${
        selectedState === false
          ? "bg-white border border-black text-black"
          : "bg-[#3070D0] border-none text-white"
      } date-card flex flex-col w-36 h-20 lg:h-14 shrink-0 snap-center items-center justify-center rounded-lg hover:cursor-pointer font-bold `}
      onClick={() => {
        props.setDate(props.date);
        props.setTime({});
        setSelectedState(!selectedState);
      }}
    >
      <div className="date flex">{props.date.day + "/" + props.date.month}</div>
      <div className="slots flex text-center">
        {props.slots} Slots available
      </div>
    </div>
  );
};

export default CalendarDateCard;
