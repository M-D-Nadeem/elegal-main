import DashProfile from "./DashProfile";
import Dashnav from "./Dashnav";
import Requests from "./DashRequests";
import DashUpcomingApntmnt from "./DashUpcomingApntmnt";
import axios from "axios";
import authentication from "../../Authentication/authentication";
import api from "../../Authentication/apiAddress";
import { useEffect, useState } from "react";
import Calender from "../Calendar";
import { Link } from "react-router-dom";
import { useUser } from "../../Authentication/UserProvider";
import { FetchAppointmentDetails, FetchProviderDetails } from "../../backend/src/functions";
import firebase from "firebase/compat/app";

import "firebase/auth";
import { getAuth } from "firebase/auth";

const ProvidersDash = () => {
  // let arrPendingName = [];
  const currentUser = useUser();
  const currentEmail = currentUser?.email;

  const [arrName, setArrName] = useState("");

  const [userDeets, setUserDeets] = useState(null);
  const [appointmentDeets, setAppointmentDeets] = useState(null);


  useEffect(() => {
    
    const fetch = async () => {

      console.log(currentEmail);
      if(currentEmail){
        if(userDeets == null){
          setUserDeets(await FetchProviderDetails(currentEmail))
          console.log("User Details", userDeets)
        }

        if(appointmentDeets == null){
          setAppointmentDeets(await FetchAppointmentDetails(currentEmail))
          console.log("Appointment Details", appointmentDeets);
        }
      }
    };
    fetch();
  }, [currentEmail]);

  useEffect(()=>{


  }, [appointmentDeets])


  // let arrPendingSubject = [];
  // let arrPendingDescription = [];

  // let arrAcceptedName = [];
  // let arrAcceptedSubject = [];
  // let arrAcceptedDescription = [];
  // const [requestData, setRequestData] = useState({});
  // const [abc, setAbc] = useState(0);

  // const parseUserData =()=>{
  //   const docData = JSON.parse(localStorage.getItem("UserDetails"))
  //   console.log(docData)
  //   JSON.parse(localStorage.getItem("UserDetails")).providerInformation.providerPersonalInfo.providerFullName
  //     return docData.providerInformation.providerPersonalInfo.providerFullName

  // }

  return (
    <div className="flex flex-col xl:flex-row h-full w-full ">
      <Dashnav />
      <div className="bg-gray-200 h-full w-full pt-4 mt-10">
        <div className=" h-auto mx-3 mt-3 md:pl-7 p-4 flex flex-col md:flex-row md:pr-8">
          <div className="bg-white rounded-lg shadow-lg shadow-slate-300 basis-2/3 md:mx-2 flex flex-col sm:flex-row">
            <img
              src="./img/dashimg.png"
              className="h-52 w-96 mx-auto"
              alt="Good Morning..."
              height="100%"
              width="100%"
            />
            <div className="bg-white w-full flex flex-col justify-center">
              <div className=" text-2xl text-center font-bold">
                Good Day Mr. {userDeets? userDeets.details.providerPersonalInfo.providerFullName: ""}
              </div>
              <div className="text-slate-700 text-center text-[15px] font-semibold">
                Have a Nice Day !
              </div>
            </div>
          </div>
          <div className="bg-green-300 rounded-lg shadow-lg shadow-slate-300 md:basis-1/3 md:mx-2 mt-5 md:mt-0 md:ml-4">
            <div className="bg-blue-800 w-full h-12 hidden md:flex rounded-t-lg text-lg font-semibold text-gray-200 p-2 pl-4">
              Profile
            </div>
            <DashProfile img="https://shorturl.at/uHKT3" 
            name = {userDeets? userDeets.details.providerPersonalInfo.providerFullName: ""}
            email = {userDeets? userDeets.details.providerPersonalInfo.providerEmail: ""}
            num = {userDeets? userDeets.details.providerPersonalInfo.providerContact: ""}
            />
          </div>
        </div>
        <div className=" h-3/5 py-2 px-3 mx-3 flex flex-col md:flex-row md:justify-evenly md:pr-6">
          <div className="bg-white rounded-lg shadow-md shadow-slate-300  md:w-96">
            <Link to="/AppRequest">
              <div className="bg-blue-800 w-full p-2 pl-4 h-12 rounded-t-lg text-lg font-semibold text-gray-200">
                Appointment Requests
              </div>
            </Link>
            <div className="overflow-auto flex flex-col h-72 scrollbar-hide mt-2">
              {
                appointmentDeets && Object.keys(appointmentDeets).map((key) => {
                    const appointment = appointmentDeets[key];
                    if (!appointment.accepted) {
                      return <Requests key={key} appointment={appointment} img="https://shorturl.at/zQZ03"/>;
                    }
                    return null;
                  })
              }
            </div>
          </div>
          <div className=" bg-white mt-4 md:mt-0 rounded-lg shadow-lg shadow-slate-300 md:w-96 ">
            <div className="bg-blue-800 w-full h-12 rounded-t-lg text-lg font-semibold text-gray-200 p-2 pl-4">
              Upcoming Appointments
            </div>
            <div className="overflow-auto flex flex-col h-72 scrollbar-hide mt-2">
            {
                appointmentDeets && Object.keys(appointmentDeets).map((key) => {
                    const appointment = appointmentDeets[key];
                    if (appointment.accepted) {
                      return <DashUpcomingApntmnt key={key} appointment={appointment} img="https://shorturl.at/zQZ03"/>;
                    }
                    return null;
                  })
              }
              
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-slate-300 md:w-96">
            <div className="bg-blue-800 w-full h-12 rounded-t-lg text-lg font-semibold text-gray-200 p-2 pl-4">
              Modify Appointment Slots
            </div>
            <Calender className="w-full h-96" dateAreaClass={"h-24 lg:h-20"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProvidersDash;
