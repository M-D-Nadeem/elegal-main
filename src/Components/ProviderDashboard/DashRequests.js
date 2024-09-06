import { Link } from "react-router-dom";
import { formatDate, formatTime } from "../../backend/src/gloabalValues";

const Requests =(props)=>{

    
    return(
        <Link to = {{pathname: "/AppRequest", state: {appointment: props.appointment}}}><div className="bg-white flex h-16 m-2 p-2 border-r-2 border-b-2 border-slate-400 shadow-lg shadow-slate-300">
            <div className="  basis-1/5 flex justify-center items-center">
            <img src={props.img}  alt="P" className="bg-amber-700 h-10 rounded-full w-10" height="100%" width="100%"/>
            </div>
            <div className=" basis-3/5">
                <p className=" text-base font-semibold">{props.appointment.caseDetails.fullName}</p>
                <p className=" text-xs">{props.appointment.caseDetails.subject}</p>
            </div>
            <div className=" basis-1/3 flex flex-col justify-center pl-2">
            <p className=" text-xs">{formatDate(props.appointment.timeSlot.date)}</p>
            <p className=" text-xs">{formatTime(props.appointment.timeSlot.time)}</p>
            </div>
        </div></Link>
    );
}
export default Requests;