import { useNavigate } from "react-router-dom";
import authentication from "../Authentication/authentication";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../Authentication/apiAddress";

const ClientProfileView = () => {
  const navigate = useNavigate()
  const values = authentication();
  
  useEffect( () =>{
    if(values.authenticated) console.log("Allowed")
    else navigate("/not-found")
  }, [])

  const [fullName, setFullName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState();
  const [languages, setLanguages] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();

  const setFetchedData = (data) => {
      setFullName(data.clientFullName)
      setContact(data.clientContact)
      setEmail(data.clientEmail)
      setDob(data.clientDob)
      setLanguages(data.clientLanguages)
      setGender(data.clientGender)
      setAddress(data.clientAddress)
  }
  //Fetch Data;
  if(values.authenticated){
    axios.post(`${api}/user/fetchProfileData`, {"UID": values.decodedToken.user_id})
  .then(data => {
    setFetchedData(data.data.data.clientPersonalInfo)
    console.log(data.data.data.clientPersonalInfo)

  })
  .catch(err => {
    console.log("sadge")
  })
  }

  return (
    
    <div className="">
      <div className="w-full mt-14 h-96 justify-center absolute -z-50 bg-cover">
        <img
          src="./img/UserProfileBg.png"
          alt=""
          className="object-cover w-full lg:w-2/3 mx-auto h-5/6 lg:h-4/6 lg:rounded-xl"
        />
      </div>
      <div className="details flex flex-col lg:flex-row w-4/5 lg:w-3/5 h-auto mt-40 lg:mt-64 mx-auto">
        <div className="name flex flex-col h-80 lg:h-user-profile-panel-desktop lg:w-1/4 bg-gray-200 border border-slate-300 rounded-xl">
          <div className="img w-1/2 h-1/2 lg:h-48 lg:w-48 lg:mt-16  mx-auto rounded-full">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s458/blank-profile-picture-hd-images-photo.JPG"
              alt=""
              className="rounded-full p-2"
            />
          </div>
          <div className="name mx-auto text-xl lg:text-lg font-bold text-center">
            {fullName}
          </div>
          <div className="username mx-auto mt-2 text-lg lg:text-sm font-bold text-lsp">
          @DEKHTE HAI SHD DO
          </div>
          <div className="btn flex flex-row lg:flex-col mt-6 lg:mt-10 w-60 lg:w-full lg:space-y-4 mx-auto">
            <div className="edit-profile mx-auto bg-edit-profile text-white px-4 lg:px-8 py-2 rounded-xl hover:cursor-pointer">
              Edit Profile
            </div>
            <div className="edit-profile mx-auto bg-white text-lsp px-4 lg:px-8 py-2 rounded-xl hover:cursor-pointer">
              My Activity
            </div>
          </div>
        </div>
        <div className="info flex flex-col h-user-profile-panel-mobile lg:h-user-profile-panel-desktop mt-8 lg:mt-0 lg:w-3/4 lg:ml-4 bg-gray-200 border border-slate-300 rounded-xl">
          <div className="full-name flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Full name:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
            {fullName}
            </div>
          </div>
          <div className="username flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            {/* <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Username:
            </div> */}
            {/* <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
              @DEKHTE HAI SHD DO
            </div> */}
          </div>
          <div className="contact-no flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Contact number:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
            {contact}
            </div>
          </div>
          <div className="email flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              E-mail id:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
            {email}
            </div>
          </div>
          <div className="dob flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Date of birth:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
            {dob}
            </div>
          </div>
          <div className="language flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
             </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
            {languages}
            </div>
          </div>
          
          <div className="address flex flex-col lg:flex-row lg:justify-between lg:px-8 w-full">
            <div className="label-text text-xl font-bold pl-4 pt-4 lg:pt-8 lg:w-2/4 ">
              Address:
            </div>
            <div className="text text-lg font-semibold text-gray-500 pl-4 lg:pt-8 lg:w-2/4">
            {address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfileView;
