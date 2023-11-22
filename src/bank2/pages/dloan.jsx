import React, { useState } from 'react';


export const Dloan = () => {
  const [loanId, setloanId] = useState('')
    const [error, setError] = useState(null);

      const delete = async () => {
        try {
          const response = await fetch(`https://dbms-backend-82cd.onrender.com/loan/delete${loanId}`);
          if (!response.ok) {
            throw new Error('Failed to delete loan details');
          }
          const data = await response.json();
  
          // Update the state with the received da
          setError(null);
        } catch (error) {
          console.error('Error deleting loan details:', error);
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
            Delete Loan
        </label>
        <br/>
        <input className="cid" type="text" value= {loanId} placeholder='Enter Loan Id' onChange={(e) => setloanId(e.target.value)}/> 
        <button onClick={function(event){ delete(event); show(event);}} >Search</button>
    </div>
    <div id='loans' style={{display:"none"}}>
    <h2>Deleted</h2>
  </div>
  )}
