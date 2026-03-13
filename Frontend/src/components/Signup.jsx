import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Signin from './Signin';

function Signup() {

  const [username,setUsername]=useState();
  const [pass,setPass]=useState();
  const [email,setEmail]=useState();



  return (
    <>
      <form className='flex flex-col gap-1 mt-30 ml-150 shadow-xl w-90 h-80 p-4'>
          <h2 className='font-semibold text-xl mb-2 mt-2'> Register Here</h2>
          <input 
            type="text" 
            value={username}
            placeholder='Enter Username'
            required
            onChange={()=>setUsername(username)}
            className='p-1 text-lg rounded-md mb-2 w-70 border border-gray-400'
          />
          <input 
            type="email"
            value={email}
            required
            placeholder='Enter Email'
            onChange={()=>setEmail(email)}
            className='p-1 text-lg rounded-md mb-2 w-70 border border-gray-400' 
          />
          <input 
            type="password"
            value={pass}
            required
            placeholder='Enter Password'
            onChange={()=>setPass(pass)}
            className='p-1 text-lg rounded-md mb-2 w-70 border border-gray-400' 
          />
          <button type="submit"
            className='p-1 text-lg rounded-md mb-2 font-semibold border border-gray-400 w-20 cursor-pointer'
          >Signup</button>
          <p className='font-semibold'>Already have an account ? <Link  className='text-green-500' to="/Signin">Signin</Link> here</p>
      </form>
    </>
  )
}

export default Signup