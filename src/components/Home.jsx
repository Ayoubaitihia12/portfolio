import React from 'react'
import img from '../assets/hero1.JPG'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row gap-3'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium'>HI. I'M AYOUB AIT IHIA</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Frontend developer, Working with my hands to make magic happen on the internet.
          </p>

          <div>
            <Link to='portfolio' smooth duration={500} className='text-lg group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-500'>
                <MdOutlineKeyboardArrowRight size={30} className='ml-1'/>
              </span>
            </Link>
          </div>

        </div>

        <div className='hidden md:block'>
          <img src={img} alt="my profile" className='rounded-2xl mt-4 mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
    
  )
}

export default Home