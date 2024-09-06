import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../Authentication/apiAddress";
import authentication from "../Authentication/authentication";
import { useUser } from "../Authentication/UserProvider";
import { UploadAppointmentDetails } from "../backend/src/functions";

const RequestAppointment = ({}) => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const currentUser = useUser();
  const currentEmail = currentUser?.email;

  const [fullName, setFullName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async () => {
    const caseDetails = { fullName, mobile, email, subject, description };
    const providerDeets = data;

    console.log("Case Deets: ", caseDetails);
    console.log("Provider Deets: ", providerDeets);
    console.log("Current Email: ", currentEmail);

    await UploadAppointmentDetails(currentEmail, providerDeets, caseDetails);
    navigate("/");
  };

  return (
    <div className="flex flex-row w-full max-w-screen-2xl  justify-evenly self-center mt-16">
      <div className="service-provider-info w-1/3 h-72  flex flex-col mt-56 items-center rounded-xl border-2 border-slate-200">
        <div className="appointment-type flex flex-row w-full h-12  justify-between items-center px-4">
          <div className="type">In office appintment</div>
          <div className="fee">500</div>
        </div>
        <div className="appointment-datetime flex flex-row w-full h-12  justify-between items-center px-4   ">
          <div className="day">
            On
            {` ${data.date.day}/${data.date.month}/${data.date.year}`}
          </div>
          <div className="time">
            At
            {` ${data.time.hour}:${data.time.minute}`}
          </div>
        </div>
        <div className="lawyer-details flex flex-row w-full border-t-2 pt-2">
          <div className="img w-1/3 h-full   flex justify-center">
            <img
              src="https://shorturl.at/mpyJ5"
              alt=""
              className="rounded-full h-full p-2"
            />
          </div>
          <div className="details flex flex-col lg:px-8 w-2/3 justify-center">
            <div className="name text-card-btn text-xl font-bold flex w-full px-2  justify-center lg:justify-start">
              Adv. Sarvoch Sharma
            </div>
            <div className="specialise font-bold text-center lg:text-left flex w-full justify-center lg:justify-start text-md px-2 mt-2">{`Specialises in Personal Injury`}</div>
            <div className="experience px-2 flex w-full justify-center lg:justify-start text-md">{`6.9 years of experience`}</div>
          </div>
        </div>
      </div>
      <div className="appointment-detail w-1/3 h-full mt-24 flex rounded-xl border-2 border-slate-300">
        <div className="details  flex w-full h-200 flex-col px-8">
          <div className="text py-4 text-xl font-bold">Client Details</div>
          <div className="name flex flex-col w-full">
            <div className="fullname">Full name</div>
            <div className="input">
              <input
                type="text"
                name=""
                id=""
                className="w-4/5 h-10 px-2 bg-slate-200"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="name flex flex-col w-full mt-6">
            <div className="fullname">Mobile</div>
            <div className="input">
              <input
                type="text"
                name=""
                id=""
                className="w-4/5 h-10 px-2 bg-slate-200"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="name flex flex-col w-full mt-6">
            <div className="fullname">Email (optional)</div>
            <div className="input">
              <input
                type="text"
                name=""
                id=""
                className="w-4/5 h-10 px-2 bg-slate-200"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="text py-4 text-xl font-bold mt-12">
            Appointment Description
          </div>
          <div className="subject flex flex-col w-full">
            <div className="subject">Subject</div>
            <div className="input">
              <input
                type="text"
                name=""
                id=""
                className="w-4/5 h-10 px-2 bg-slate-200"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="subject flex flex-col w-full mt-8">
            <div className="subject">Brief Description</div>
            <div className="input">
              <textarea
                type="text"
                name=""
                id=""
                className="w-4/5 h-40 py-1 px-2  bg-slate-200 resize-none"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className="submit bg-hot-blue text-white hover:cursor-pointer w-36 h-8 text-center justify-center items-center flex mt-8"
            onClick={() => handleSubmit()}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestAppointment;
