import { useState } from "react";
import Professionalinfo from "./Profesionalinfo";
import { Link } from "react-router-dom";
const Personalinfo =(props)=>{
    const [fullName, setFullName] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [dob, setDob] = useState();
    const [languages, setLanguages] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();

    const handleFullName = (e) => {
        setFullName(e.target.value)
        localStorage.setItem("providerFullName", e.target.value)
        
    }
    const handleContact = (e) => {
        setContact(e.target.value)
        localStorage.setItem("providerContact", e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        localStorage.setItem("providerEmail", e.target.value)
    }
    const handleDob = (e) => {
        setDob(e.target.value)
        localStorage.setItem("providerDob", e.target.value)
    }
    const handleLanguages = (e) => {
        setLanguages(e.target.value)
        localStorage.setItem("providerLanguages", e.target.value)
    }
    const handleGender = (e) => {
        setGender(e.target.value)
        localStorage.setItem("providerGender", e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
        localStorage.setItem("providerAddress", e.target.value)
    }

    return( 

        <div>
           <div>
                <div>
                    <div className="h-10 w-full flex justify-center mt-2 px-8 md:px-96">
                        <div className="h-auto w-16 md:w-14 rounded-full border-4 border-blue-800 flex items-center bg-gray-300 justify-center">1</div>
                        <div className="line w-2/5 bg-gray-500 h-0.5 my-5"></div>
                        <div className="h-auto w-16 md:w-14 rounded-full flex items-center bg-gray-300 justify-center">2</div>
                        <div className="line w-2/5 bg-gray-500 h-0.5 my-5"></div>
                        <div className="h-10 w-16 md:w-14 rounded-full flex items-center bg-gray-300 justify-center">3</div>
                        <div className="line w-2/5 bg-gray-500 h-0.5 my-5"></div>
                        <div className="h-10 w-16 md:w-14 rounded-full flex items-center bg-gray-300 justify-center">4</div>
                    </div>
                </div>
            <div className="container h-auto w-11/12 md:w-8/12 mx-auto mt-2 rounded-md bg-bluebg shadow-xl shadow-slate-400 p-2">
                <form className="">
                    <p className="text-2xl text-sky-300 font-serif my-2 text-center sm:text-left sm:ml-12">Personal Information</p>
                    <div className="details flex flex-col-reverse lg:flex-row h-4/5 sm:justify-evenly">
                        <div className="personal basis-8/12 sm:ml-20">
                            <div className="name flex justify-between sm:h-9 mt-6">
                                <div className="title  basis-4/12  "><label className="text-white font-bold text-md ">Full Name:</label></div>
                                <div className="value basis-7/12 ">
                                <input name="fullname" className="px-2 rounded-md border-2 border-slate-700 h-8  sm:h-full w-11/12 md:w-9/12 float-right"
                                onChange={(e) => handleFullName(e)}
                                /></div>
                            </div>

                            <div className="contact flex  justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md ">Contact no:</label></div>
                                <div className="value basis-7/12">
                                <input name="fullname" type="number" className="px-2  rounded-md border-2 border-slate-700 h-8  w-11/12 md:w-9/12 float-right sm:h-full "
                                onChange={(e) => handleContact(e)}
                                /></div>
                            </div>

                            <div className="email flex  justify-between sm:h-9 mt-3">
                                <div className="title basis-4/12"><label className="text-white font-bold text-md">Email ID:</label></div>
                                <div className="value  basis-7/12">
                                <input name="fullname" type="email" className="px-2 rounded-md border-2 border-slate-700 h-8  w-11/12 md:w-9/12 float-right sm:h-full "
                                onChange={(e) => handleEmail(e)}
                                /></div>
                            </div>

                            <div className="DOB flex  justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Date of Birth:</label></div>
                                <div className="value basis-7/12">
                                <input type="date"name="fullname" className="px-2 rounded-md border-2 border-slate-700 h-8  w-11/12 md:w-9/12 float-right sm:h-full "
                                onChange={(e) => handleDob(e)}
                                /></div>
                            </div>

                            <div className="Language flex justify-between sm:h-9 mt-3 ">
                                <div className="title basis-4/12"><label className="text-white font-bold text-md">Language Spoken:</label></div>
                                <div className="value  basis-7/12 py-3 sm:py-0">
                                <input name="fullname" className="px-2 rounded-md border-2 border-slate-700 h-8  w-11/12 md:w-9/12 float-right sm:h-full"
                                onChange={(e) => handleLanguages(e)}
                                /></div>
                            </div>

                            <div className="Gender flex justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Gender:</label></div>
                                <div className="value  basis-7/12">
                                <select name="fullname" className="px-2 rounded-md border-2 border-slate-700 h-8  w-11/12 md:w-9/12 float-right sm:h-full "
                                onChange={(e) => handleGender(e)}
                                >
                                <option value="Gender">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option> 
                                <option value="Others">Others</option>   
                                </select></div>
                            </div>

                            <div className="address flex  justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Address:</label></div>
                                <div className="value basis-7/12">
                                <textarea name="fullname" className="px-2 rounded-md border-2 border-slate-700 h-auto w-11/12 md:w-9/12 float-right  sm:h-16"
                                onChange={(e) => handleAddress(e)}
                                /></div>
                            </div>
                        
                        </div>
                        <div className="photo basis-4/12 ">
                            <div className=" h-32 w-32 xl:h-36 xl:w-36 xl:mt-12 mx-auto flex">
                            <img src='' height="100%" width="100%" 
                            className="mx-auto rounded-full" id="profile_img"></img>
                            </div>
                            <label for="upload_img" className="flex justify-center"><span className=" mt-4 md:pt-1 rounded-sm   w-5/12 md:w-5/12 md:h-8  font-bold  bg-sky-400 flex justify-center">Select Image</span></label>
                            <input type="file" id="upload_img" name="upploadbtn" accept="image/*" className="hidden" />
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 mt-12 mb-2">
                <Link to = "/userselection"><input type="button" value="Back" className="bg-gray-300 border-2 border-slate-400 w-24 md:w-24 h-10 text-xl font-extrabold rounded-lg md:mr-20"
                /></Link>
                <input type="submit" onClick={() => props.nfun()}  value="Next" className="bg-sky-300 border-2 border-slate-400 w-24 h-10 text-xl font-extrabold md:w-24 rounded-lg md::ml-20" />
                </div>
                </form>
             </div>   
        </div>
    </div>
        )   
}
export default Personalinfo;