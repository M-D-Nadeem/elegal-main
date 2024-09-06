import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import app from "../firebaseConfig";
const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cursorLoading, setCursorLoading] = useState(false);
  const [errorObject, setErrorObject] = useState({});

  const handleSignIn = () => {
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorObject({ errorCode, errorMessage });
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="h-full w-[550px] mx-auto flex flex-col relative justify-betwen bg-bluebg rounded-b-3xl rounded-r-3xl mt-28">
      {Object.keys(errorObject).length === 0 ? (
        <div></div>
      ) : (
        <div className="error bg-red-600 text-white rounded-sm w-60 flex absolute mb-8 top-0 z-50 left-0 mx-auto right-0 justify-center text-center"></div>
      )}
      <div className="mt-12 text-3xl justify-center flex font-bold text-white">
        <p>Welcome Back!</p>
      </div>
      <div className="h-4/5">
        <form>
          <div className="w-full mx-auto ">
            <div className=" mx-auto w-10/12 md:w-8/12 mt-10 ">
              <label className="text-white font-semibold text-lg">
                Email
                <br />
              </label>
              <input
                type="text"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white bg-slate-200 p-2 mb-2 border-slate-500"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <label className="text-white font-semibold text-lg">
                Password
                <br />
              </label>
              <input
                type="password"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white bg-slate-200 p-2 mb-2 border-slate-500"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <Link to="/forgot-password">
                <p className="text-sm ml-2 mt-1 text-skyblue">
                  Forgot Password?
                </p>
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center gap-16">
            <Link to="/">
              <div className="flex justify-center mt-12 h-10">
                <input
                  type="button"
                  value="Sign In"
                  className={`bg-white text-sky-600 text-xl font-bold w-fit px-4 rounded-md pb-1 h-8 mb-4 ${
                    cursorLoading ? "hover:cursor-wait" : "hover:cursor-pointer"
                  }`}
                  onClick={() => {
                    // setCursorLoading(true);
                    handleSignIn();
                  }}
                />
              </div>
            </Link>
            <Link to="/signup">
              <div className="flex justify-center mt-12 h-10">
                <input
                  type="button"
                  value="Sign Up"
                  className={`bg-white text-sky-600 text-xl font-bold w-fit px-4 rounded-md pb-1 h-8 mb-4 ${
                    cursorLoading ? "hover:cursor-wait" : "hover:cursor-pointer"
                  }`}
                  onClick={() => {
                    // setCursorLoading(true);
                    handleSignIn();
                  }}
                />
              </div>
            </Link>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};
export default Signin;
