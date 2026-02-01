import React from 'react'
import { useNavigate } from 'react-router-dom'
const Explore = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col gap-10 p-10 audiowide'>
      <h1 className='text-4xl font-semibold text-white'>Explore</h1>
      <div className='flex flex-row gap-10'>
    <div className='flex flex-col items-center justify-center h-[200px] w-[300px] border border-gray-900 rounded-lg shadow-lg shadow-gray-800 bg-white/10 cursor-pointer  hover:shadow-xl  hover:bg-black/50 hover:tracking-wide' onClick={()=>navigate('/astreoidfinder')}>
           <p className='text-lg font-semibold text-white'>Find the nearest astreoids</p>
    </div>
      </div>
    </div>
  )
}

export default Explore
