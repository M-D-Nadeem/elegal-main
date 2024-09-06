import AppointmentHistory from "./AppointmentHistory";
import AppointmentUpcoming from "./AppointmentUpcoming";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsCalendar3 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FetchAppointmentDetails } from "../../backend/src/functions";
import { useUser } from "../../Authentication/UserProvider";

const Appointment = () => {
  const currentUser = useUser();
  const currentEmail = currentUser?.email;

  const [appointmentDeets, setAppointmentDeets] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      console.log(currentEmail);
      if (currentEmail) {
        if (appointmentDeets == null) {
          setAppointmentDeets(await FetchAppointmentDetails(currentEmail));
        }
      }
    };
    fetch();
  }, [currentEmail]);

  useEffect(() => {
    console.log(appointmentDeets);
  }, [appointmentDeets]);

  return (
    <div>
      <div className="bg-white mt-16  h-auto py-2">
        <div className=" mt-12 w-11/12  font-bold lg:w-1/2 mx-auto flex items-center mb-6">
          <BsCalendar3 className="text-lg lg:text-2xl lg:mt-1" />
          <p className="ml-2 lg:ml-4 lg:text-3xl text-2xl">
            Upcoming Appointment
          </p>
        </div>
        <div className="flex flex-col">
          {appointmentDeets &&
            Object.keys(appointmentDeets).map((key) => {
              const appointment = appointmentDeets[key];
              if (appointment.accepted) {
                return (
                  <AppointmentUpcoming
                    key={key}
                    appointment={appointment}
                    img="https://shorturl.at/zQZ03"
                  />
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};
export default Appointment;
