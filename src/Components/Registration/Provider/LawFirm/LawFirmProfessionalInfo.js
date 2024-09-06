import { useState } from "react";

const LawFirmProfessionalInfo =(props)=>{
    

    return( 
        <div>
            <div className="">
            <div className="h-10 w-full flex justify-center mt-2 px-8 md:px-96">
                        <div className="h-auto w-14 md:w-10 rounded-full border-4 text-white border-blue-800 flex items-center bg-blue-800 justify-center">1</div>
                        <div className="line w-2/5 bg-blue-800 h-0.5 my-5"></div>
                        <div className="h-auto w-14 md:w-10 rounded-full flex items-center border-4 border-blue-800 bg-gray-300 justify-center">2</div>
                        <div className="line w-2/5 bg-gray-500 h-0.5 my-5"></div>
                        <div className="h-10 w-14 md:w-10 rounded-full flex items-center bg-gray-300 justify-center">3</div>
                        
                    </div>
                </div>
                <div className="container h-auto w-11/12 md:w-8/12 mx-auto mt-4 rounded-md bg-bluebg p-2">
                <form className="">
                    <p className="text-2xl text-sky-300 font-serif my-2 text-center sm:text-left sm:ml-12">Professional Information</p>
                    <div className="details flex flex-col-reverse lg:flex-row h-4/5 sm:justify-evenly">
                        <div className="personal basis-8/12 sm:ml-20">
                            

                            <div className="contact flex  justify-between sm:h-9 mt-3 mb-2">
                                <div className="title  lg:basis-4/12 basis-1/2"><label className=" text-white font-semibold lg:text-md text-md">Area of Practices :</label></div>
                                <div className="value basis-6/12">
                                <input type="text" className="rounded-xl border-2 p-2 border-slate-700 h-8  w-full float-right sm:h-full "

                                /></div>
                            </div>

                            

                            <div className="DOB flex  justify-between sm:h-9 mt-3 mb-2">
                                <div className="title  lg:basis-4/12 basis-1/2"><label className="text-white font-semibold text-md">Work Location:</label></div>
                                <div className="value basis-6/12">
                                <input className="rounded-xl border-2 border-slate-700 h-8  w-full float-right sm:h-full "

                                /></div>
                            </div>

                            {/* <div className="Language flex justify-between md:flex-row flex-col sm:h-9 mt-3 mb-2">
                                <div className="title lg:basis-4/12 basis-1/2"><label for="user" className="text-white font-semibold text-md">Type of Lawyer :</label></div>
                                <div className="value lg:basis-7/12  py-3 sm:py-0 md:mb-8"><select name="user" id="user" className="text-black w-auto mx-10 md:ml-14 text-base rounded-lg px-2 py-1 border-2 border-slate-500 bg-gray-300"
                                
                                onChange={(e) => handleTypeOfLawyer(e)}
                                value={localStorage.getItem("providerTypeOfLawyer")}
                                >
                                    <option value="client">Criminal Lawyer</option>
                                    <option value="lawyer">Family Lawyers</option>
                                    <option value="consultant">Corporate Lawyers</option>
                                    <option value="lawfirm">Labor Lawyers</option>
                                    <option value="notary">Tax Lawyer</option>
                                    <option value="mediator">Public Interest Lawyer</option>
                                    <option value="documentwriter">Intellectual Property Lawyer</option>
                                    <option value="consultant">Immigration Lawyers</option>
                                    <option value="client">Civil Rights Lawyer</option>
                                    <option value="lawyer">Environmental Lawyer</option>
                                    <option value="consultant">Entertainment Lawyer</option>
                                    <option value="lawfirm">Estate Planning Lawyer</option>
                                    <option value="notary">Civil Litigation Lawyers</option>
                                    <option value="client">Constitutional Lawyers</option>
                                    <option value="lawyer">Real Estate Lawyers</option>
                                    <option value="consultant">Bankruptcy Lawyers</option>
                                    <option value="lawfirm">Malpractice Lawyers</option>
                                    <option value="notary">Personal injury lawyer</option>
                                    <option value="notary">Property lawyer</option>
                                    <option value="client">Divorce lawyer</option>
                                    </select></div>
                                    </div> */}
                            {/* <div className="ocupation flex  justify-between sm:h-9 mt-3 mb-4">
                                <div className="title  basis-4/12">
                                    <label className="text-white font-bold text-md">Bar Association Certificate :</label>
                                </div>
                                <div className="value  basis-6/12 h-8">
                                <input type="file" className="text-white rounded-sm border-2 border-slate-900 h-8  w-full float-right sm:h-full flex"
                                
                                />
                                </div>
                                
                            </div> */}
                            <div className="DOB flex flex-col justify-between sm:h-auto mt-3 mb-8">
                                <div className="title  basis-4/12"><label className="text-white font-semibold text-md">Firm Description :<span className="text-sm font-light">(Brief about your Law Firm):</span><br/></label></div>
                                <div className="value basis-11/12">
                                <textarea type="text" className="rounded-xl border-2 border-slate-700 h-32 w-full p-2 sm:h-32 overflow-y-auto  cursor-auto"

                                ></textarea></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6  my-2"            >
                <input  className="bg-gray-300 border-2 border-slate-400 rounded-lg w-24 md:w-24 h-10 text-xl font-extrabold md:mr-20"/>
                <input type="submit"  className="bg-sky-300 border-2 border-slate-400 w-24 h-10 text-xl rounded-lg font-extrabold md:w-24 md:ml-20"/>
                </div>
                </form>
             </div>   
        </div>
    );
}
export default LawFirmProfessionalInfo; 