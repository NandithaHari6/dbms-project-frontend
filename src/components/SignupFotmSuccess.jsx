import React from 'react';
import "./success.css";
import useForm from "./useForm";
import CustomerPage from "../customer/CustomerPage";
import BankPage from "../bank/BankPage";
const SignupFormSuccess=({submitForm})=>{
    const { handleChange, handleRegFormSubmit, values, errors } = useForm(submitForm);
    return(
        <div className="container1"  >
            <div >
                
            {console.log(values.userType==="customer")}
            {values.userType === 'customer' ?  (<CustomerPage />):(<BankPage/>)}
                 
            </div>
        </div>
          )
}
export default SignupFormSuccess;