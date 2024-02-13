import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUserRequest } from './actions';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Notifications count = {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(0)}>
        Reset
        </button>
      </div>
      
    </>
  )
}

export default App

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserRequest } from './actions';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    UserName: '',
    euEmail: '',
    password: '',
    UserType: '',
    SellerBio: '',
    TypeOfSeller: '',
    ShopName: '',
    artSpecialization: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserRequest(formData));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="UserName" value={formData.UserName} onChange={handleChange} placeholder="Username" />
      <input type="email" name="euEmail" value={formData.euEmail} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <select name="UserType" value={formData.UserType} onChange={handleChange}>
        <option value="">Select User Type</option>
        <option value="ADMIN">Admin</option>
        <option value="SELLER">Seller</option>
        <option value="BUYER">Buyer</option>
      </select>
      
      {formData.UserType === 'SELLER' && (
        <>
          <input type="text" name="SellerBio" value={formData.SellerBio} onChange={handleChange} placeholder="Seller Bio" />
          <input type="text" name="TypeOfSeller" value={formData.TypeOfSeller} onChange={handleChange} placeholder="Type of Seller" />
          <input type="text" name="ShopName" value={formData.ShopName} onChange={handleChange} placeholder="Shop Name" />
          <select name="artSpecialization" value={formData.artSpecialization} onChange={handleChange}>
            <option value="">Select Art Specialization</option>
            <option value="PAINTING">Painting</option>
            <option value="JEWELLERY">Jewellery</option>
            <option value="POTTERY">Pottery</option>
            <option value="DECORATION">Decoration</option>
            <option value="OTHER">Other</option>
          </select>
        </>
      )}
      <button type="submit">Register</button>
    </form>
  );
};


