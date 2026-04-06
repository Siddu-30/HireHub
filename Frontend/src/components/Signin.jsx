import React, { use } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import API from '../api/api';
import { useLocation } from "react-router-dom";


function Signin() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
          const res = await API.post("/user/signin", { email, password });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      if (user.role === "recruiter") {
        navigate("/recruiter/dashboard");
      } else {
        navigate("/jobseeker/dashboard");
      }      
      }catch(err){
        console.error("Signup error:", err.response?.data || err.message);
      }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-1 mt-30 ml-150 shadow-xl w-85 h-60 p-4'>
        <h1 className='font-semibold text-xl mb-2 mt-2'>Login Here</h1>
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
          <button type="submit"
            className='p-1 text-lg rounded-md mb-2 font-semibold border border-gray-400 w-20 cursor-pointer'
          >Signin</button>
      </form>
    </>
  )
}

export default Signin