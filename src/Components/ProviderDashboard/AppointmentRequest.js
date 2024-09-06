import { useEffect, useState } from "react";
import AppoReqCard from "./AppoReqCard";
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import { useLocation } from "react-router-dom";
import { useUser } from "../../Authentication/UserProvider";
import { FetchAppointmentDetails } from "../../backend/src/functions";
const AppointmentRequest =()=>{

    const currentUser = useUser();
    const currentEmail = currentUser?.email;
  
    const [appointmentDeets, setAppointmentDeets] = useState(null);
  
  
    useEffect(() => {
      const fetch = async () => {
        console.log(currentEmail);
        if(currentEmail){
          if(appointmentDeets == null){
            setAppointmentDeets(await FetchAppointmentDetails(currentEmail))
          }
        }
      };
      fetch();
    }, [currentEmail]);

    useEffect(()=>{
        console.log(appointmentDeets)
    },[appointmentDeets])


    return(<div className="h-full w-full">
        <div className=" mt-20 w-11/12  font-bold lg:w-1/2 mx-auto flex items-center mb-6">
                    <AiOutlineAppstoreAdd    className="text-lg lg:text-2xl lg:mt-1"/>
                    <p className="ml-2 lg:ml-4 lg:text-3xl text-2xl">Appointment Requests</p>
                </div>
                {
                appointmentDeets && Object.keys(appointmentDeets).map((key) => {
                    const appointment = appointmentDeets[key];
                    if (!appointment.accepted) {
                        console.log(key)
                      return <AppoReqCard keey={key} appointment={appointment} img="https://shorturl.at/zQZ03"/>;
                    }
                    return null;
                  })
              }
       </div>
    );
}
export default AppointmentRequest;

/*


*/