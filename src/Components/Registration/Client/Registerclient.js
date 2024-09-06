import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../Authentication/apiAddress";
import jwtDecode from "jwt-decode";
import { UploadClientDetails } from "../../../backend/src/functions";
import { useUser } from "../../../Authentication/UserProvider";

const Registerclient = () => {
  const currentUser = useUser();
  const currentEmail = currentUser?.email;

  const [fullName, setFullName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState();
  const [languages, setLanguages] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();

  const [cursorLoading, setCursorLoading] = useState(false);
  const navigate = useNavigate();

  const handleFullName = (e) => {
    setFullName(e.target.value);
    localStorage.setItem("clientFullName", e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
    localStorage.setItem("clientContact", e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("clientEmail", e.target.value);
  };
  const handleDob = (e) => {
    setDob(e.target.value);
    localStorage.setItem("clientDob", e.target.value);
  };
  const handleLanguages = (e) => {
    setLanguages(e.target.value);
    localStorage.setItem("clientLanguages", e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
    localStorage.setItem("clientGender", e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    localStorage.setItem("clientAddress", e.target.value);
  };

  const handleSubmitDetails = async () => {
    let clientPersonalInfo = {
      clientFullName: localStorage.getItem("clientFullName"),
      clientContact: localStorage.getItem("clientContact"),
      clientEmail: localStorage.getItem("clientEmail"),
      clientDob: localStorage.getItem("clientDob"),
      clientLanguages: localStorage.getItem("clientLanguages"),
      clientGender: localStorage.getItem("clientGender"),
      clientAddress: localStorage.getItem("clientAddress"),
    };

    await UploadClientDetails(clientPersonalInfo, currentEmail);
    deleteLocalStorage();
  };

  const deleteLocalStorage = () => {
    localStorage.removeItem("clientFullName");
    localStorage.removeItem("clientContact");
    localStorage.removeItem("clientEmail");
    localStorage.removeItem("clientDob");
    localStorage.removeItem("clientLanguages");
    localStorage.removeItem("clientGender");
    localStorage.removeItem("clientAddress");

    localStorage.removeItem("clientOrProvider");
    localStorage.removeItem("typeOfProvider");
  };

  return (
    <div className="w-full h-full">
      <div className="flex sm:h-12 text-lg font-extrabold my-2 md:my-0 md:text-3xl items-center justify-center h-auto md:mt-16">
        CLIENT REGISTRATION FORM
      </div>
      <div className="container h-auto w-11/12 md:w-8/12 mx-auto md:mt-4 mt-5 rounded-2xl drop-shadow-2xl bg-majblue p-4">
        <form className="">
          <div className="details flex flex-col-reverse lg:flex-row h-4/5 sm:justify-evenly">
            <div className="personal basis-8/12 sm:ml-20">
              <div className="name flex justify-between sm:h-9  my-6 mt-6">
                <div className="title  basis-4/12  ">
                  <label className="text-white font-bold text-md ">
                    Full Name:
                  </label>
                </div>
                <div className="value basis-7/12 ">
                  <input
                    className="rounded-md border-2 p-2 border-slate-700 h-8  sm:h-full w-full float-right"
                    onChange={(e) => handleFullName(e)}
                  />
                </div>
              </div>

              <div className="contact flex  justify-between sm:h-9  my-6 mt-3">
                <div className="title  basis-4/12">
                  <label className="text-white font-bold text-md ">
                    Contact no:
                  </label>
                </div>
                <div className="value basis-7/12">
                  <input
                    type="number"
                    pattern="[0-9]{10}"
                    className="rounded-md border-2 p-2 border-slate-700 h-8  w-full float-right sm:h-full "
                    onChange={(e) => handleContact(e)}
                  />
                </div>
              </div>

              <div className="email flex  justify-between sm:h-9  my-6 mt-3">
                <div className="title basis-4/12">
                  <label className="text-white font-bold text-md">
                    Email ID:
                  </label>
                </div>
                <div className="value  basis-7/12">
                  <input
                    type="email"
                    className="rounded-md border-2 p-2 border-slate-700 h-8  w-full float-right sm:h-full "
                    onChange={(e) => handleEmail(e)}
                  />
                </div>
              </div>

              <div className="DOB flex  justify-between sm:h-9  my-6 mt-3">
                <div className="title  basis-4/12">
                  <label className="text-white font-bold text-md">
                    Date of Birth:
                  </label>
                </div>
                <div className="value basis-7/12">
                  <input
                    type="date"
                    className="rounded-md p-2 border-2 border-slate-700 h-8  w-full float-right sm:h-full "
                    onChange={(e) => handleDob(e)}
                  />
                </div>
              </div>

              <div className="Language flex justify-between sm:h-9  my-6 mt-3 ">
                <div className="title basis-4/12">
                  <label className="text-white font-bold text-md">
                    Language Spoken:
                  </label>
                </div>
                <div className="value  basis-7/12 py-3 sm:py-0">
                  <input
                    className="rounded-md p-2 border-2 border-slate-700 h-8  w-full float-right sm:h-full"
                    onChange={(e) => handleLanguages(e)}
                  />
                </div>
              </div>

              <div className="Gender flex justify-between sm:h-9  my-6 mt-3">
                <div className="title  basis-4/12">
                  <label className="text-white font-bold text-md">
                    Gender:
                  </label>
                </div>
                <div className="value  basis-7/12">
                  <select
                    className="rounded-md border-2 pl-2 border-slate-700 h-8  w-full float-right sm:h-full "
                    onChange={(e) => handleGender(e)}
                  >
                    <option value="Gender">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="address flex  justify-between sm:h-9  my-6 mt-3">
                <div className="title  basis-4/12">
                  <label className="text-white font-bold text-md">
                    Address:
                  </label>
                </div>
                <div className="value basis-7/12">
                  <textarea
                    className="rounded-md border-2 pl-2 border-slate-700 h-8 w-full float-right  sm:h-20 overflow-auto"
                    onChange={(e) => handleAddress(e)}
                  />
                </div>
              </div>
            </div>
            <div className="photo basis-4/12">
              <div className=" h-32 w-32 xl:h-36 xl:w-36 xl:mt-16 mx-auto flex">
                <img
                  // src={file}
                  height="100%"
                  width="100%"
                  className="mx-auto rounded-full"
                  id="choosen_file"
                ></img>
              </div>
              <label htmlFor="uploadbtn" className="flex justify-center">
                <span className=" mt-2 md:pt-1 rounded-md  w-5/12 md:w-32 md:h-8  font-bold  bg-white flex justify-center">
                  Select Image
                </span>
              </label>
              <input
                type="file"
                id="uploadbtn"
                name="upploadbtn"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-12 mb-2">
            <Link to="/userselection">
              <input
                type="button"
                value="Back"
                className="bg-white md:w-24 h-10 text-xl font-bold rounded-lg md:mr-20"
              />
            </Link>
            <input
              type="button"
              value="Register"
              className={`bg-[#00183C] text-white w-5/12 h-10 text-xl font-bold md:w-24 md:ml-20 rounded-lg `}
              onClick={() => {
                handleSubmitDetails();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registerclient;
