import React from 'react';
import "./success.css";
import useForm from "./useForm";

const SignupFormSuccess=({submitForm})=>{
    const { handleChange, handleRegFormSubmit, values, errors } = useForm(submitForm);
    return(
        <div className="container1"  >
            <div >
             
                 
            </div>
        </div>
          )
}
export default SignupFormSuccess;