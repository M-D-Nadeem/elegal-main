import { IoGrid } from "react-icons/io5";
import { BiSolidNotification } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BiPowerOff } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import HandleSignOut from "../SignOut";
import { Link, useNavigate } from "react-router-dom";
const Dashnav = () => {
  let naviagte = useNavigate();

  return (
    <div className="w-72 hidden xl:flex xl:flex-col justify-between mt-16 mb-10">
      <div className=" px-1">
        <div className=" h-10 hover:bg-bluebg hover:text-white text-blue-900 flex justify-start items-center px-4 space-x-4 font-semibold rounded-md my-0.5 text-sm ">
          <IoGrid />
          <p>Dashboard</p>
        </div>
        <div className=" h-10 hover:bg-bluebg hover:text-white text-blue-900 flex justify-start items-center px-4 space-x-4 font-semibold rounded-md my-0.5 text-sm ">
          <BsFillPersonFill />
          <p>Profile</p>
        </div>
        
        <Link to = "/AppRequest"><div className=" h-10 hover:bg-bluebg hover:text-white text-blue-900 flex justify-start items-center px-4 space-x-4 font-semibold rounded-md my-0.5 text-sm ">
          <AiOutlineAppstoreAdd />
          <p>Appt. Requests</p>
        </div></Link>
        <Link to = "/Appointment"><div className=" h-10 hover:bg-bluebg hover:text-white text-blue-900 flex justify-start items-center px-4 space-x-4 font-semibold rounded-md my-0.5 text-sm ">
          <BsCalendar3 />
          <p>Appointments</p>
        </div></Link>
        <div className=" h-10 hover:bg-bluebg hover:text-white text-blue-900 flex justify-start items-center px-4 space-x-4 font-semibold rounded-md my-0.5 text-sm ">
          <MdOutlineEventAvailable />
          <p>Availability</p>
        </div>
        <div className="h-10 hover:bg-bluebg hover:text-white text-blue-900 flex justify-start items-center px-3.5 space-x-3 font-semibold rounded-md my-0.5 text-sm ">
          <BiSolidNotification className="text-2xl" />
          <p className="">Notification</p>
        </div>
        <div className=" h-10 hover:bg-bluebg hover:text-white text-blue-900 flex justify-start items-center px-4 space-x-4 font-semibold rounded-md my-0.5 text-sm ">
          <FaWallet />
          <p>Wallet</p>
        </div>
        <div className=" h-10 hover:bg-bluebg hover:text-white text-blue-900 flex justify-start items-center px-4 space-x-4 font-semibold rounded-md my-0.5 text-sm ">
          <FiEdit />
          <p>Edit Profile</p>
        </div>
        {/* <BsFillGrid1X2Fill/> */}
      </div>
      <div className=" flex justify-center">
        <div
          className="bg-white hover:-translate-y-0.5  drop-shadow-lg flex rounded-sm text-red-600 hover:bg-red-600 hover:text-white items-center space-x-1 h-8 w-24 md:mb-12 justify-center"
        >
          <BiPowerOff />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};
export default Dashnav;
