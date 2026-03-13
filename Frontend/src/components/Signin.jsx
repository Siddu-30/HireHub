import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


function Signin() {

  const [username,setUsername]=useState();
  const [pass,setPass]=useState();

  

  return (
    <>
      <form className='flex flex-col gap-1 mt-30 ml-150 shadow-xl w-85 h-60 p-4'>
        <h1 className='font-semibold text-xl mb-2 mt-2'>Login Here</h1>
       <input 
            type="text" 
            value={username}
            placeholder='Enter Username'
            required
            onChange={()=>setUsername(username)}
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
          >Signin</button>
      </form>
    </>
  )
}

export default Signin