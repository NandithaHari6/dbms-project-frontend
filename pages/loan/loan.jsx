import React, { useState } from 'react';
import "./loan.css";


export const Loan = () => {
  const [bankId, setbankId] = useState('')
    const [LoanData, setLoanData] = useState([]);
    const [error, setError] = useState(null);

      const fetchAllLoans = async () => {
        try {
          const response = await fetch(`https://dbms-backend-82cd.onrender.com/loan/getAllLoans${bankId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch loan details');
          }
          const data = await response.json();
  
          // Update the state with the received data
          setLoanData(data);
          setError(null);
        } catch (error) {
          console.error('Error fetching loan details:', error);
          setLoanData(null)
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
            Bank Loans
        </label>
        <br/>
        <input className="cid" type="text" value= {bankId} placeholder='Enter Bank Id' onChange={(e) => setbankId(e.target.value)}/> 
        <button onClick={function(event){ fetchAllLoans(event); show(event);}} >Search</button>
    </div>
    <div id='loans' style={{display:"none"}}>
    <h2>Loan Details</h2>
    <div className='hu'>
    {
    LoanData.map((LoanData) => (
      <ul className='pos' key={LoanData._id}>
      <li >
            <strong>Loan ID:</strong> {LoanData.loanId}
            <br />
            <strong>Bank ID:</strong> {LoanData.bankId}
            <br />
            <strong>Customer ID:</strong> {LoanData.customerId}
            <br />
            <strong>Loan Amount:</strong> {LoanData.loanAmount}
            <br />
            <strong>Loan Type:</strong> {LoanData.loanType}
            <br />
            <strong>EMI Amount:</strong> {LoanData.emiAmount}
            <br />
            <strong>Start Date:</strong> {new Date(LoanData.startDate).toLocaleDateString()}
            <br />
            <strong>Duration:</strong> {LoanData.duration} months
            <br />
            <strong>Request Flag:</strong> {LoanData.requestFlag ? 'True' : 'False'}
          </li>
          </ul>
        )
    )}</div>
</div>
  </div>
  )
}
