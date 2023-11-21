import SignupForm from "./SignupForm";
import React ,{useState}from "react";
import SignupFormSuccess from "./SignupFotmSuccess";
import CustomerPage from "../customer/CustomerPage";
import BankPage from "../bank/App.jsx";
const Form=()=>{
    const[formIsSubmitted,setFormIsSubmitted]=useState(false);
  const [user,setUser] = useState("");
    const submitForm=(user)=>{
       setFormIsSubmitted(true); 
       setUser(user);
    }
    return(
        <div>
          { !formIsSubmitted ? <SignupForm submitForm={submitForm}/> : (
            user==="customer"?<CustomerPage />:<BankPage />
          )
           } 
        </div>
    )
}
export default Form;