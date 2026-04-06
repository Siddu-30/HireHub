import React from 'react'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import API from '../api/api';
import Signin from './Signin';

function Signup() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [role,setRole]=useState("");

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await API.post("/user/signup", {
            username,
            password,
            email,
            role
          });

          // console.log("clicked");

          navigate('/signin');
        } catch (err) {
          console.error("Signup error:", err.response?.data || err.message);
        }
};

  return (
    <>
      <form onSubmit={handleSubmit} 
      className='flex flex-col gap-1 mt-30 ml-150 shadow-xl w-90 h-90 p-4 mb-20'>
          <h2 className='font-semibold text-xl mb-2 mt-2'> Register Here</h2>
          <input 
            type="text" 
            value={username}
            placeholder='Enter Username'
            required
            onChange={(e)=>setUsername(e.target.value)}
            className='p-1 text-lg rounded-md mb-2 w-70 border border-gray-400'
          />
          <input 
            type="email"
            value={email}
            required
            placeholder='Enter Email'
            onChange={(e)=>setEmail(e.target.value)}
            className='p-1 text-lg rounded-md mb-2 w-70 border border-gray-400' 
          />
          <input 
            type="password"
            value={password}
            required
            placeholder='Enter Password'
            onChange={(e)=>setPassword(e.target.value)}
            className='p-1 text-lg rounded-md mb-2 w-70 border border-gray-400' 
          />
          <input 
            type="text"
            value={role}
            required
            placeholder='Enter Role (recuiter/job_seeker)'
            onChange={(e)=>setRole(e.target.value)}
            className='p-1 text-lg rounded-md mb-2 w-70 border border-gray-400' 
          />
          <button type="submit"
            className='p-1 text-lg rounded-md mb-2 font-semibold border border-gray-400 w-20 cursor-pointer'
          >Signup</button>
          <p className='font-semibold'>Already have an account ? <Link  className='text-green-500' to="/signin">Signin</Link> here</p>
      </form>
    </>
  )
}

export default Signup