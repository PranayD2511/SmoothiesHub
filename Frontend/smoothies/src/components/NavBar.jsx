import React from 'react'
import { useState } from 'react'

const NavBar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleClick  = () =>{
    setLoggedIn(prev => !prev);
  }
  return (
    <div className='h-16 bg-pink-500 flex flex-row justify-between items-center rounded-2xl'>
        <div className='flex flex-row gap-1 align ml-5'>
            <h1 className='text-2xl font-mono text-white'>Smoothies</h1>
            <h1 className='text-2xl font-mono'>Hub</h1>
        </div>
        <div >
            <button onClick={handleClick} className='font-mono text-white font-extralight mr-5 w-24 h-10
             border border-pink-400 rounded-2xl bg-pink-700 hover:bg-pink-500 shadow-3lg shadow-white'>
              {isLoggedIn ? 'Login':'Logout'}
            </button>
        </div>
    </div>
  )
}

export default NavBar