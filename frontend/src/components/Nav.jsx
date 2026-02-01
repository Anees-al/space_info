import React from 'react'

const Nav = () => {
  return (
    <div className='flex flex-row justify-between p-2 bg-black/50'>
      <h1 className='text-4xl font-bold text-white'>CosmoX</h1>
      <div className='hidden sm:flex flex-row text-white font-bold gap-3'>
        <p>About</p>
        <p>Maps</p>
        <p>Missions</p>
      </div>
      <div></div>
    </div>
  )
}

export default Nav
