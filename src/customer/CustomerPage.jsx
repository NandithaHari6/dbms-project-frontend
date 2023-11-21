
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import PersonalDetails from './PersonalDetails';
import LoanDetailsByCustomer from './LoanDetailsByCustomer';
import './customer.css'; // Import the CSS file
import UpdateDetails from"./UpdateDetails"
function CustomerPage() {
  return (
    
        
      <div className="tab-container">
        <nav>
          <ul>
            <li >
              <NavLink to="/cust-details"className="profile"> Profile</NavLink>
            </li>
            <li>
              <NavLink to="/loan-details-by-customer"className="loan-details">Loan Details </NavLink>
            </li>
            <li>
              <NavLink to="/update-details" className="update" >Update Details</NavLink>
            </li>
           
          </ul>
        </nav>

       <Routes>

      
          <Route path="/cust-details" element={<PersonalDetails />} />
          <Route path="/loan-details-by-customer" element={<LoanDetailsByCustomer />} />
          <Route path="/update-details" element={<UpdateDetails />}/>
        </Routes>
      </div>
   
  );
}

export default CustomerPage;