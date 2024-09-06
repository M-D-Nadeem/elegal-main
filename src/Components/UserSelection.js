import { useState } from "react";
import { Link } from "react-router-dom";

const UserSelection =()=>{
    const[lwrtype,lyr_typ_visiblity]=useState(false);
    const [clientOrProvider, setClientOrProvider] = useState();
    const [typeOfProvider, setTypeOfProvider] = useState();
    const handleClientOrProvider = (e) => {
        setClientOrProvider(e.target.value)
        localStorage.setItem("clientOrProvider", e.target.value)
        
        
    }
    const handleTypeOfProvider = (e) => {
        setTypeOfProvider(e.target.value)
        localStorage.setItem("typeOfProvider", e.target.value)
        
    }

    
    let visible =()=>{
        lyr_typ_visiblity(true);
    }
    let invisible=()=>{
        lyr_typ_visiblity(false);
    }

    return( 

        <div className=" mt-20 h-full flex flex-col justify-between pt-12 ">
            <div className=" bg-gray-100 w-3/6 mx-auto h-48 flex  flex-col border-b-2 border-r-2 border-slate-400 p-4 rounded-sm shadow-lg shadow-slate-400" id="mainbox">
                <div className=" h-2/6 text-center text-3xl font-semibold">
                    You are Signing in as:
                </div>
                <div className=" h-3/6 flex justify-evenly items-center">
                    <form className="flex space-x-12">
                    <div className="flex justify-evenly flex-col md:flex-row md:space-x-10 " id="usertype">
                        <div>
                            <input className="h-4 w-4" type="radio" id="h1" name="fav_language" value="Client"
                            onChange={(e) => {
                                handleClientOrProvider(e);
                                invisible();
                            }}
                            checked={localStorage.getItem("clientOrProvider") === 'Client'}/>
                            <label className="text-2xl" htmlFor="h1">Client</label><br/>
                        </div>
                        <div>
                            <input className="h-4 w-4" type="radio" id="h2" name="fav_language" value="Provider"
                            onChange={(e) => {
                                handleClientOrProvider(e);
                                visible();
                            }} 
                            checked={localStorage.getItem("clientOrProvider") === 'Provider'}/>
                            <label className="text-2xl" htmlFor="h2">Service Provider</label><br/>
                        </div>
                    </div>
                    </form>
                </div>
                <div className=" h-1/6 pl-4 text-sm">
                Further registration will be done on the basis of your selection.
                </div>
            </div>
                <form>
                    {lwrtype && <div className="0 bg-gray-100 flex flex-col w-64 p-8 border-b-2 border-r-2 border-slate-400 mx-auto mt-4 rounded-sm shadow-lg shadow-slate-400">
                        <div>
                            <input className="h-3 w-3 " type="radio" id="h3" name="fav_language" value="Lawyer"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Lawyer'}/>
                            <label className="text-xl " htmlFor="h3">Lawyer</label><br/>
                        </div>
                        <div>
                            <input className="h-3 w-3" type="radio" id="h4" name="fav_language" value="Law Firm"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Law Firm'}/>
                            <label className="text-xl" htmlFor="h4">Law Firm</label><br/>
                        </div>
                        <div>
                            <input className="h-3 w-3" type="radio" id="h5" name="fav_language" value="Arbitrator"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Arbitrator'}/>
                            <label className="text-xl" htmlFor="h5">Arbitrator</label><br/>
                        </div>
                        <div>
                            <input className="h-3 w-3" type="radio" id="h6" name="fav_language" value="Notaries"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Notaries'}/>
                            <label className="text-xl" htmlFor="h6">Notaries</label><br/>
                        </div>
                        <div>
                            <input className="h-3 w-3" type="radio" id="h7" name="fav_language" value="Mediator"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Mediator'}/>
                            <label className="text-xl" htmlFor="h7">Mediator</label><br/>
                        </div>
                        <div>
                            <input className="h-3 w-3" type="radio" id="h8" name="fav_language" value="Document Writter"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Document Writter'}/>
                            <label className="text-xl" htmlFor="h8">Document Writter</label><br/>
                        </div>
                        <div>
                            <input className="h-3 w-3" type="radio" id="h9" name="fav_language" value="Consultant"
                            onChange={(e) => handleTypeOfProvider(e)}
                            checked={localStorage.getItem("typeOfProvider") === 'Consultant'}/>
                            <label className="text-xl" htmlFor="h9">Consultant</label><br/>
                        </div>
                    </div>}
                    <div className="flex  mt-8 items-end float-right">
                        
                        <Link to = 
                        {localStorage.getItem("clientOrProvider") === 'Client' ? '/clientRegister' : '/providerRegister'}
                        ><input className="bg-skyblue shadow-lg shadow-slate-500 h-10 w-20 rounded-sm mr-10 text-base font-bold
                        " type="button" value="Next"
                        /></Link>
                    </div>
                </form>
                
            
        </div>
    );
}
export default UserSelection;