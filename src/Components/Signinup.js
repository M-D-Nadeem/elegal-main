import Signup from "./Signup";
import Signin from "./Signin";
import { useEffect, useState } from "react";

const Signinup = (props) => {
  // const[color1,changeclr]=useState("bg-bluebg ");
  const [state, changeState_signin] = useState(true);
  const [state2, changestate_signup] = useState(false);
  const [color1, changeColor1] = useState("bg-bluebg text-white");
  const [color2, changecolor2] = useState("bg-white text-black");

  const signUp = () => {
    changeState_signin(false);
    changestate_signup(true);
    changeColor1("bg-white text-black");
    changecolor2("bg-bluebg text-white");
  };

  const signIn = () => {
    changeState_signin(true);
    changestate_signup(false);
    changeColor1("bg-bluebg text-white");
    changecolor2("bg-white text-black");
  };
  return (
    <div className="w-full mt-20">
      <div className=" h-[550px] flex flex-col w-10/12 md:w-4/12 mx-auto my-10 rounded-lg">
        <div className="h-16 flex">
          <div
            className={`${color1} w-1/2 rounded-t-3xl text-3xl font-bold  flex justify-center align-middle hover:cursor-pointer pt-3`}

          >
            Sign In
          </div>
          <div
            className={`${color2}  w-1/2 rounded-t-3xl text-3xl font-bold  flex justify-center align-middle pt-3 hover:cursor-pointer`}

          >
            SignUp
          </div>
        </div>
        <div className="basis-11/12 rounded-b-3xl rounded-l-3xl">

        </div>
      </div>
    </div>
  );
};

export default Signinup;
