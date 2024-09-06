import Educationalinfo from "./Educationalinfo";
import Personalinfo from "./Personalinfo";
import Professionalinfo from "./Profesionalinfo";

import { useState } from "react";
import RegistrationSuccess from "./../RegisterationSuccess";
import ProviderDocUpload from "./ProviderDocUpload";

const RegisterProvider =()=>{
    const [state, changeState] = useState(1);

    const nextState = () => {
      changeState(state + 1);
    };
  
    const prevState = () => {
      changeState(state - 1);
    };

    return(
        <div className="flex flex-col h-full w-full mt-4">
            <div className="flex sm:h-12 text-lg font-extrabold my-2 md:my-0 md:text-3xl items-center justify-center h-auto md:mt-12">SERVICE PROVIDER REGISTRATION FORM</div>
            {state === 1 && <Personalinfo nfun={nextState} pfun={prevState}/>}
            {state === 2 && <Professionalinfo nfun={nextState} pfun={prevState}/>}
            {state === 3 && <Educationalinfo nfun={nextState} pfun={prevState}/>}
        </div>
    );
}
export default RegisterProvider;