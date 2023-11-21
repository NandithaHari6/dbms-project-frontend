import React, { useState } from 'react';
import "./pcust.css";


export const PCust = () => {
  const [customerId, setCustomerId] = useState('')
    const [custData, setcustData] = useState(null);
    const [error, setError] = useState(null);

      const fetchPersonalDetails = async () => {
        try {
          const response = await fetch(`https://dbms-backend-82cd.onrender.com/customer/getPersonalDetails${customerId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch loan details');
          }
          const data = await response.json();
  
          // Update the state with the received data
          setcustData(data[0]);
          setError(null);
        } catch (error) {
          console.error('Error fetching loan details:', error);
          setcustData(null)
        }
      };

      const show = async () => {
        document.getElementById("loans").style.display="block";
      }

  return (
    <div>
    <div className='main'>
      <br/><br/>
        <label className='ll'>
            Customer Details
        </label>
        <br/>
        <input className="cid" type="text" value= {customerId} placeholder='Enter Customer Id' onChange={(e) => setCustomerId(e.target.value)}/> 
        <button onClick={function(event){ fetchPersonalDetails(event); show(event);}} >Search</button>
    </div>
    <div id='loans' style={{display:"none"}}>
    <h2>Personal Details</h2>
    <div className='lo'>
    {error && <p style={{ color: 'red' }}>{error}</p>}
      {custData && (
        <div>
          <p>
            <strong>Customer Name:</strong> {custData.customerName}
          </p>
          <p>
            <strong>Date of Birth:</strong> {new Date(custData.dob).toLocaleDateString()}
          </p>
          <p>
            <strong>Address:</strong> {custData.address}
          </p>
          <p>
            <strong>Phone Number:</strong> {custData.phoneNumber}
          </p>
          <p>
            <strong>Nominee:</strong> {custData.nominee}
          </p>
          <p>
            <strong>Relation:</strong> {custData.relation}
          </p>
          <p>
            <strong>CIBIL Score:</strong> {custData.cibilScore}
          </p>
          <p>
            <strong>Bank ID:</strong> {custData.bankId}
          </p>
          <p>
            <strong>Account Number:</strong> {custData.accountNumber}
          </p>
        </div>
      )}</div>
</div>
  </div>
  )
}
