import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className='bg-gray-200 font-semibold text-xl h-17 flex justify-evenly items-center'>
          <h1 className='text-3xl'>HireHub</h1>
          <ul className='flex gap-8'>
            <li>
              <NavLink
               to="/"
               end
               className={({isActive})=>isActive?"text-blue-500 font-semibold":"text-black-300"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
               to="/signup"
               className={({isActive})=>isActive?"text-blue-500 font-semibold":"text-black-300"}
              >
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink
               to="/about"
               className={({isActive})=>isActive?"text-blue-500 font-semibold":"text-black-300"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/help"
               className={({isActive})=>isActive?"text-blue-500 font-semibold":"text-black-300"}
              >
                Help
              </NavLink>
            </li>
          </ul>
      </nav>
    </>
  )
}

export default Header