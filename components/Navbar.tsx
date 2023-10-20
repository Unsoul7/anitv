'use client'

import Link from 'next/link'
import React, { useState } from 'react'



const Navbar = () => {
  const [Nav, setNav] = useState('navhide')


  const navopen = () => {
    Nav == 'navhide' ? setNav('navshow') : setNav('navhide')
  }


  return (
    <nav className='py-6 px-10 absolute top-0 w-full  '>
      <div className='flex items-center md:hidden'>
        <span onClick={navopen} className='material-symbols-outlined'>menu</span>
        <span onClick={navopen} className='text-sm mx-2'>Menu</span>
      </div>
      <div className={Nav}>
        <Link className='text-white py-5 md:px-5 md:py-0 ' href='/'>Home</Link>
        <Link className='text-white py-5 md:px-5 md:py-0 ' href='/'>Movies</Link>
        <Link className='text-white py-5 md:px-5 md:py-0' href='/'>TV Series</Link>
        <Link className='text-white py-5 md:px-5 md:py-0 ' href='/'>Most Popular</Link>
        <Link className='text-white py-5 md:px-5 md:py-0 ' href='/'>Top Airing</Link>
      </div>
    </nav>
  )
}

export default Navbar