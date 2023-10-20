import React from 'react'
import Navbar from './Navbar'
import Searchbox from './Searchbox'
import Image from 'next/image'
import logo from '../public/logo.png'
import bgimg from '../public/bgnew.png'

const Hero = () => {
    return (

        <div className='w-full h-[80vh] flex flex-col items-center sm:items-start bg-gradient-to-b from-gray-950 to-gray-800 relative md:justify-center'>
            <div className='my-16 md:hidden'></div>
            <Navbar />
            <Image className='mb-9 sm:pl-12' src={logo} width={250} height={100} alt='logo' />
            <Searchbox />
            <Image alt='bg' src={bgimg} width={500} height={300} className='md:absolute md:right-20 md:block hidden z-[5] ' />
            <div className='bg-yellow-400 w-4/5 rounded-full h-14 font-bold text-black flex items-center cursor-pointer justify-center absolute self-center -bottom-8 md:-bottom-14 md:items-end md:py-5 md:h-20 md:-z-20'>
                View Full Site
                <span className="material-symbols-outlined ">
                    arrow_forward_ios
                </span>
            </div>
        </div>
    )
}

export default Hero