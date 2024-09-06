import { useNavigate } from "react-router-dom";

const RegistrationSuccess =()=>{


    return(
        <div className="w-11/12 md:mt-20 md:w-8/12 h-auto md:h-3/6 mx-auto md:my-auto my-12 rounded-lg bg-blue-950">
            <div className="Img"></div>
            <div className="msg bg-white m-10 p-10 font-mono text-lg rounded-xl ">You Have Successfully Completed registration.<br/>
                                <br/>Now you are an important member of eLegal.</div>
            <div className="home flex justify-center">
                <p className="bg-sky-300 p-2 mb-3 rounded-lg font-bold border-2 border-slate-600 w-min">Home</p>
            </div>
        </div>
    );
}
export default RegistrationSuccess;