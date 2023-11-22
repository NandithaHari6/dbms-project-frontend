import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./approved";
import "./apply.css";

export const Apply = () => {
  const [loanData, setLoanData] = useState({
    customerId: '',
    loanAmount: '',
    loanType: 'personal', // default to personal loan
    bankId: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    document.getElementById('low').style.display="none";
    document.getElementById('invalid').style.display="none";
    document.getElementById('notfound').style.display="none";
    console.log(loanData);
    try {
      const response = await fetch('https://dbms-backend-82cd.onrender.com/loan/addLoan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loanData),
      });

      const data = await response.json();
      console.log(data);
      // Handle the response as needed in your frontend
      if(response.status === 404)
      {
        document.getElementById('notfound').style.display="block";
      }
      else if(response.status === 403)
      {
        document.getElementById('low').style.display="block";
      }
      else if(response.status === 200)
            {
        document.getElementById('approved').style.display="block";

      }
      else if(response.status === 500)
      {
        document.getElementById('invalid').style.display="block";  
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="main">
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Bank Id:
          <br />
          <input
            type="text"
            name="bankId"
            value={loanData.bankId}
            onChange={handleChange}
            placeholder="Bank Id.."
          />
        </label>
        <br />
        <label>
          Customer Id:
          <br />
          <input
            type="text"
            name="customerId"
            value={loanData.customerId}
            onChange={handleChange}
            placeholder="Customer Id.."
          />
        </label>
        <br />
        <label>
          Loan Type:
          <br />
          <select
            name="loanType"
            value={loanData.loanType}
            onChange={handleChange}
          >
            <option value="personal">Personal Loan</option>
            <option value="home">Home Loan</option>
            <option value="credit">Credit Card Loan</option>
            <option value="car">Car Loan</option>
            <option value="edu">Education Loan</option>
            <option value="farm">Agriculture Loan</option>
            <option value="gold">Gold Loan</option>
          </select>
        </label>
        <br />
        <label>
          Amount:
          <br />
          <input
            type="number"
            name="loanAmount"
            value={loanData.loanAmount}
            onChange={handleChange}
            placeholder="In rupees.."
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h1 id="notfound" style={{display:"none"}} >Customer not found</h1>
      <h1 id="low" style={{display:"none"}} >Loan Rejected</h1>
      <h1 id="invalid" style={{display:"none"}} >Invalid input</h1>
      <h1 id="approved" style={{display:"none"}} >Approved</h1>
    </div>
  );
};

