// src/LoanDetailsByCustomer.js
import React, { useState } from 'react';
import LoanList from './LoanList';
import './loandetailsbycustomer.css'; // Import the CSS file

function LoanDetailsByCustomer() {
  const [customerId, setCustomerId] = useState('');
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(null);

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleFetchLoans = async () => {
    try {
      const response = await fetch(`https://dbms-backend-82cd.onrender.com/customer/getLoanDetails${customerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch loan details');
      }

      const data = await response.json();
      setLoans(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setLoans([]);
      setError('Failed to fetch loan details. Please check the customer ID.');
    }
  };

  return (
    <div className="loan-details-container">
      <h2>Loan Details</h2>
      <div className="input-container">
        <label>
          Customer ID:
          <input type="text" value={customerId} onChange={handleCustomerIdChange} />
        </label>
        <button onClick={handleFetchLoans}>submit</button>
      </div>

      {error && <p style={{ color: 'red' }} className="error-message">{error}</p>}
      {loans.length > 0 && <LoanList loans={loans} />}
    </div>
  );
}

export default LoanDetailsByCustomer;

