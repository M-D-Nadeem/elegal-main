import axios from "axios";
import authentication from "../Authentication/authentication";
import api from "../Authentication/apiAddress";
import { Link, useNavigate } from "react-router-dom";
import HandleSignOut from "./SignOut";
import { useState } from "react";


const ProfileDropdown = (props) => {
  const navigate = useNavigate();
  const values = authentication();
//values.decodedToken.user_id

  
  

  return (
    <div
      className={`${
        values.authenticated == false ? "h-20" : "h-40"
      } text-navbar w-40 lg:w-1/2 bg-slate-200 rounded-xl absolute top-16 right-6 lg:right-40 flex flex-col items-center justify-center px-2`}
    >
      {!values.authenticated && (
        <Link
          to="/signin"
          className="text-navbar w-4/5 h-12 flex justify-center items-center border border-navbar font-semibold rounded-xl"
        >
          <div
            className=" "
            onClick={() => {
              props.setProfileDropdownVisibility(false);
              console.log(props.profileDropdownVisibility);
            }}
          >
            Sign In / <br /> Sign Up
          </div>
        </Link>
      )}
      {values.authenticated && (
        <>
          {localStorage.getItem("WhoIsHe") == "client" && <Link to = "/profile" className="profile hover:bg-navbar hover:text-white hover:cursor-pointer w-4/5 h-12 flex justify-center items-center border border-navbar font-semibold rounded-xl">
            <div onClick={() => {
              props.setProfileDropdownVisibility(false)
            }}>
            Profile
          </div></Link>}

          {localStorage.getItem("WhoIsHe") == "provider" && <Link to = "/providerdash" className="profile hover:bg-navbar hover:text-white hover:cursor-pointer w-4/5 h-12 flex justify-center items-center border border-navbar font-semibold rounded-xl">
            <div onClick={() => {
              props.setProfileDropdownVisibility(false);
            }}>
            Dashboard
          </div></Link>}   

          <div
            className="hover:bg-navbar hover:text-white hover:cursor-pointer w-4/5 h-12 flex justify-center items-center border border-navbar font-semibold rounded-xl mt-4"
            onClick={() => {
              HandleSignOut();
              navigate("/")
              props.setProfileDropdownVisibility(false);
            }}
          >
            Sign Out
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;
