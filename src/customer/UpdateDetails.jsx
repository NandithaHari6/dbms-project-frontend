import React, { useState } from 'react';
import "./update.css";
const MyForm = () => {
    const [customerId, setCustomerId] = useState('');
  const [formData, setFormData] = useState({
    address: '',
    phoneNumber: '',
    nominee: '',
    relation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);}
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://dbms-backend-82cd.onrender.com/customer/update${customerId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data:', data);
      // Handle success or further processing
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="updateForm">
         <label>
          Customer ID:
          <input type="text" value={customerId} onChange={handleCustomerIdChange} />
        </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label>
      <br />
      <label>
        Nominee:
        <input type="text" name="nominee" value={formData.nominee} onChange={handleChange} />
      </label>
      <br />
      <label>
        Relation:
        <input type="text" name="relation" value={formData.relation} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
