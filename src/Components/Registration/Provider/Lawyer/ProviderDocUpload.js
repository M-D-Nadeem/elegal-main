import axios from "axios";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import api from "../../../../Authentication/apiAddress";
import { useNavigate } from "react-router-dom";
const ProviderDocUpload =(props)=>{


    return(
        <div>
        <div className="h-10 w-full flex justify-center mt-2 px-8 md:px-96">
                        <div className="h-auto w-12 md:w-14 rounded-full border-4 border-blue-800 flex items-center bg-blue-800 justify-center text-white font-bold">1</div>
                        <div className="line w-2/5 bg-blue-800 h-0.5 my-5"></div>
                        <div className="h-auto w-12 md:w-14 rounded-full flex items-center border-4 border-blue-800 bg-blue-800 justify-center text-white font-bold">2</div>
                        <div className="line w-2/5 bg-blue-800 h-0.5 my-5"></div>
                        <div className="h-10 w-12 md:w-14 rounded-full flex items-center bg-blue-800 justify-center text-white font-bold">3</div>
                        <div className="line w-2/5 bg-blue-800 h-0.5 my-5"></div>
                        <div className="h-10 w-12 md:w-14 rounded-full flex items-center border-4 border-blue-800 bg-gray-300 justify-center">4</div>
                    </div>
        <div className="container h-auto w-11/12 md:w-8/12 mx-auto mt-4 rounded-md bg-blue-950 p-2">
            <div className="flex flex-col md:flex-row md:space-x-20">
                        <div><p className="text-2xl text-sky-300 font-serif my-2 text-center sm:text-left sm:ml-12">Upload Documents</p></div>
                        <div className="flex md:w-96 w-60 justify-start ml-8 md:justify-center items-center "><input checked="true" type="checkbox" value="Bachlors" id="bachlors" className="m-2" /><label htmlFor="bachlors"  className="mr-20 font-semibold text-white">BA LLB</label>
                        <input type="checkbox" value="Masters" id="masters" className="m-2"/><label htmlFor="masters" className="font-semibold text-white">LL.M.</label>
                        </div>
                    </div>
                <form className="">
                    <div className="upload flex flex-col-reverse lg:flex-row h-4/5 sm:justify-evenly">
                        <div className="personal basis-8/12 sm:ml-20">
                            <div className="ballb flex justify-between sm:h-9 mt-6 mb-10">
                                <div className=" basis-4/12  "><label className="text-white font-bold text-md ">BA LLB passing certificate:</label></div>
                                <div className="value basis-7/12 "><input type="file" name="ballb" className="rounded-xl border-2 border-slate-500 h-8 text-white sm:h-8 w-full float-right"/></div>
                            </div>
                            <div className="llm flex justify-between sm:h-9 mt-6 mb-10">
                                <div className="  basis-4/12  "><label className="text-white font-bold text-md ">LL. M. passing certificate:</label></div>
                                <div className="value basis-7/12 "><input type="file" name="llm" className="rounded-xl border-2 border-slate-500 h-8 text-white sm:h-8 w-full float-right"/></div>
                            </div>
                            <div className="Barcouncil flex justify-between sm:h-9 mt-6 mb-10">
                                <div className="  basis-4/12  "><label className="text-white font-bold text-md ">BAR Council License:</label></div>
                                <div className="value basis-7/12 "><input type="file" name="barcouncil" className="rounded-xl border-2 border-slate-500 h-8 text-white sm:h-8 w-full float-right"/></div>
                            </div>
                            <div className="id flex justify-between sm:h-9 mt-6 mb-20">
                                <div className="  basis-4/12  "><label className="text-white font-bold text-md ">ID of current BAR Association:</label></div>
                                <div className="value basis-7/12 "><input type="file" name="id" className="rounded-xl border-2 border-slate-500 h-8 text-white sm:h-8 w-full float-right"/></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6  my-2">
                <input  type="reset" onClick={() => props.pfun()} value="Back" className="bg-gray-300 border-2 border-slate-400 rounded-lg w-5/12 md:w-3/12 h-10 text-xl font-extrabold"/>
                <input type="button"  value="Submit" className="bg-sky-300 border-2 border-slate-400 w-5/12 h-10 text-xl rounded-lg font-extrabold md:w-3/12"/>
                </div>
                </form>
             </div> 
             </div>  
    );
}
export default ProviderDocUpload;