import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import api from "../Authentication/apiAddress";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { SignUpUsername } from "../backend/src/functions";

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const [cursorLoading, setCursorLoading] = useState(false);
  const [errorObject, setErrorObject] = useState({});

  const [fullName, setFullName] = useState("");
  const [handle, setHandle] = useState(""); // TODO: Handle is username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        SignUpUsername(handle, email);

        navigate("/userselection");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="h-full bg-bluebg w-[550px] mx-auto mt-32  rounded-b-3xl relative rounded-l-3xl pb-4">
      {Object.keys(errorObject).length === 0 ? (
        <div></div>
      ) : (
        <div className="error bg-red-600 text-white rounded-sm w-80 flex absolute mb-8 top-0 z-50 left-0 mx-auto right-0 justify-center text-center">
          {"fullname" in errorObject && `Full name ${errorObject.fullname}\n`}
          {"handle" in errorObject && `Username ${errorObject.handle}\n`}
          {"email" in errorObject && `Email ${errorObject.email}\n`}
          {"password" in errorObject && `Password ${errorObject.password}\n`}
          {"confirmPassword" in errorObject && `${errorObject.confirmPassword}`}
        </div>
      )}
      <div className=" w-11/12 mx-auto pt-4 m-auto">
        <div className=" flex justify-center text-white ">
          <label for="user" className="  my-auto text-lg mt-1">
            I am a{" "}
          </label>
          <select
            name="user"
            id="user"
            className="text-black w-auto mx-2 text-base rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white px-2 py-1   bg-slate-200"
          >
            <option value="client">Client</option>
            <option value="lawyer">Lawyer</option>
            {/* <option value="lawfirm">Law Firm</option>
            <option value="notary">Notary</option>
            <option value="mediator">Mediator</option>
            <option value="documentwriter">Document Writer</option>
            <option value="consultant">Consultant</option> */}
          </select>
        </div>
        <form>
          <div className="w-full mx-auto ">
            <div className=" mx-auto w-10/12 md:w-8/12 mt-8 ">
              <label className="text-white text-lg">
                Full Name
                <br />
              </label>
              <input
                type="text"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white hover:ring-white bg-slate-200 p-2 mb-2 "
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              <br />
              <label className="text-white text-lg">
                Username
                <br />
              </label>
              <input
                type="text"
                className="w-full h-8 bg-slate-200 p-2 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white  mb-2 "
                onChange={(e) => {
                  setHandle(e.target.value);
                }}
              ></input>
              <label className="text-white  text-lg">
                Email
                <br />
              </label>
              <input
                type="text"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white bg-slate-200 p-2  mb-3 "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <label className="text-white  text-lg">
                Password
                <br />
              </label>
              <input
                type="password"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white bg-slate-200 p-2  mb-3 "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
            </div>
          </div>
          <div className="flex justify-center mt-6 h-10    ">
            <input
              type="button"
              value="Sign Up"
              className={`bg-white text-sky-600 text-xl font-bold w-4/12 md:w-3/12 rounded-md ${
                cursorLoading ? "hover:cursor-wait" : "hover:cursor-pointer"
              }`}
              onClick={() => {
                handleSignUp();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
