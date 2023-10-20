'use client'
import React, { useContext } from 'react'


const Searchbox = () => {

  return (
    <div className='flex z-10 justify-start items-center w-full px-10 md:w-1/2 md:mb-10' >
        <input type="text" className='w-full h-12 rounded-full px-5 text-black focus:outline-none' placeholder='Search Anime...' />
        <button  className='bg-yellow-400 h-12 rounded-full w-14 mx-2'><span className="material-symbols-outlined text-black">
search
</span></button>
    </div>
  )
}

export default Searchbox