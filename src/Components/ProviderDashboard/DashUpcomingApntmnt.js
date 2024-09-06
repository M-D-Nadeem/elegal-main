import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDate, formatTime } from "../../backend/src/gloabalValues";

const DashUpcomingApntmnt =(props)=>{

    useEffect(()=>{
        console.log()
    }, [])

    return(
        <Link to = "/AppHistory"><div className="bg-white border-r-2 border-b-2 border-slate-400 shadow-lg shadow-slate-300 flex h-auto m-2 p-2">
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
export default DashUpcomingApntmnt;



/*
<DashUpcomingApntmnt
                img="https://shorturl.at/zQZ03"
                name={arrName[0]}
                case="Molestation Case"
                date="30 Sept 2023"
                time="2:00 PM"
              />
*/ 