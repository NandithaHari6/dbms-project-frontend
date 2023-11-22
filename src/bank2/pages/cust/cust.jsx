import React, { useState } from 'react';
import "./cust.css";


export const Cust = () => {
  const [customerId, setCustomerId] = useState('')
    const [custData, setcustData] = useState([]);
    const [error, setError] = useState(null);

      const fetchLoanDetails = async () => {
        try {
          const response = await fetch(`https://dbms-backend-82cd.onrender.com/customer/getLoanDetails${customerId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch loan details');
          }
          const data = await response.json();
  
          // Update the state with the received data
          setcustData(data);
          setError(null);
        } catch (error) {
          console.error('Error fetching loan details:', error);
          setcustData([])
        }
      };
  return (
    <div>
    <div className='main'>
      <br/><br/>
        <label className='ll'>
            Customer Loans
        </label>
        <br/>
        <input className="cid" type="text" value= {customerId} placeholder='Enter Customer Id' onChange={(e) => setCustomerId(e.target.value)}/> 
        <button onClick={ fetchLoanDetails} >Search</button>
    </div>
    <div className='loans'>
    <h1>Loan Details</h1>
    <div className='loan'>
    {
    custData.map((custData) => (
      <ul className='yo' key={custData._id}>
      <li >
            <strong>Loan ID:</strong> {custData.loanId}
            <br />
            <strong>Bank ID:</strong> {custData.bankId}
            <br />
            <strong>Customer ID:</strong> {custData.customerId}
            <br />
            <strong>Loan Amount:</strong> {custData.loanAmount}
            <br />
            <strong>Loan Type:</strong> {custData.loanType}
            <br />
            <strong>EMI Amount:</strong> {custData.emiAmount}
            <br />
            <strong>Start Date:</strong> {new Date(custData.startDate).toLocaleDateString()}
            <br />
            <strong>Duration:</strong> {custData.duration} months
            <br />
            <strong>Request Flag:</strong> {custData.requestFlag ? 'True' : 'False'}
          </li>
          </ul>
        )
    )}</div>
</div>
  </div>
  )
}
