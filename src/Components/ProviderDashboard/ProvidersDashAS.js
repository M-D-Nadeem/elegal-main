// import DashProfile from "./DashProfile";
import Dashnav from "./Dashnav";

import { Link, Route, Routes } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import Appointment from "./Appointment";
import RequestAppointment from "../RequestAppointment";

const ProvidersDash = () =>{
    return(
        <div className="flex flex-col xl:flex-row h-full w-full ">
            <Dashnav/>
            
            <DashboardHome />
           
        
        </div>
    );    
}
export default ProvidersDash;