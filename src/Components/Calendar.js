import { useEffect, useState } from "react";
import CalendarDateCard from "./CalendarDateCard";
import TimeSlot from "./TimeSlot";
import getProviderUID from "../Appointments/GetProviderUID";
import { useNavigate } from "react-router";
import api from "../Authentication/apiAddress";
import authentication from "../Authentication/authentication";
import axios from "axios";

const Calender = (props) => {
  const [calDate, setDate] = useState({});
  const [calTime, setTime] = useState({});
  const navigate = useNavigate();
  const [variableName, setVariableName] = useState("");

  const [notif, setNotif] = useState("");

  const [dateTime, setDateTime] = useState("");



  return (
    <div className={`${props.className}`}>
      <div
        className={`date-area ${props.dateAreaClass}   bg-white rounded-t-xl overflow-x-auto flex flex-row px-6 space-x-6 snap-x items-center border-b-2`}
      >
        <CalendarDateCard
          date={{ day: "15", month: "06", year: "2023" }}
          slots={6}
          setDate={setDate}
          setTime={setTime}
        />
        <CalendarDateCard
          date={{ day: "16", month: "06", year: "2023" }}
          slots={6}
          setDate={setDate}
          setTime={setTime}
        />
        <CalendarDateCard
          date={{ day: "17", month: "06", year: "2023" }}
          slots={6}
          setDate={setDate}
          setTime={setTime}
        />
        <CalendarDateCard
          date={{ day: "18", month: "06", year: "2023" }}
          slots={6}
          setDate={setDate}
          setTime={setTime}
        />
      </div>
      <div className="slot-area  w-full relative h-56 flex flex-col px-4 py-8 lg:py-4">
        {notif === "" ? (
          <div></div>
        ) : (
          <div className="error bg-red-600 text-white rounded-sm w-60 flex absolute mb-8 top-0 z-50 left-0 mx-auto right-0 justify-center text-center">
            {notif}
          </div>
        )}
        <div className="morning flex flex-col h-1/3 w-full">
          <div className="text">Slots</div>
          <div className="slots flex flex-row gap-4 flex-wrap">
            <TimeSlot
              time={{ hour: "05", minute: "00", second: "00" }}
              setTime={setTime}
            />
            <TimeSlot
              time={{ hour: "06", minute: "00", second: "00" }}
              setTime={setTime}
            />
            <TimeSlot
              time={{ hour: "07", minute: "00", second: "00" }}
              setTime={setTime}
            />
            <TimeSlot
              time={{ hour: "08", minute: "00", second: "00" }}
              setTime={setTime}
            />
            <TimeSlot
              time={{ hour: "09", minute: "00", second: "00" }}
              setTime={setTime}
            />
          </div>
        </div>
      </div>
      {props.client && (
        <div
          className="Open flex justify-center self-end text-white bg-sky-700 w-16 hover:cursor-pointer"
          onClick={() => {
            Object.keys(calDate).length === 0 ||
            Object.keys(calTime).length === 0
              ? setNotif("Select a time")
              : navigate("/request-appointment", {
                  state: { date: calDate, time: calTime, providerEmail: props.id },
                });
                localStorage.setItem("dateTime", dateTime)
            console.log(props.id);
            setTimeout(() => {
              setNotif("");
            }, 2000);
          }}
        >
          OK
        </div>
      )}

      {!props.client && (
        <div className="flex flex-row justify-between px-10">
          <div
            className="Open flex justify-center self-end text-white bg-sky-700 w-20  hover:cursor-pointer"
            onClick={() => {
              Object.keys(calDate).length === 0 ||
              Object.keys(calTime).length === 0
                ? console.log("Select a time")
                : console.log(dateTime);
            }}
          >
            Open Slot
          </div>
          <div
            className="Open flex justify-center self-end text-white bg-sky-700 w-20  hover:cursor-pointer"
            onClick={() => {
              Object.keys(calDate).length === 0 ||
              Object.keys(calTime).length === 0
                ? console.log("Select a time")
                : console.log(dateTime);
            }}
          >
            Close Slot
          </div>
        </div>
      )}
    </div>
  );
};

export default Calender;
