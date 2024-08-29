import React from 'react'
import { HomeIcon, PanoramaFishEyeIcon, AutoAwesomeRoundedIcon, CurrencyRupeeIcon } from "../utils/Icons.js"
import { NavLink } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
      <div className='h-screen w-full bg-[#040B35]'>
        <div className="h-[10%] p-5 flex items-center px-6 w-full text-white">
          <NavLink to="/">
            <span className="p-2 rounded-full bg-slate-700 flex items-center justify-center cursor-pointer hover:bg-slate-600">
              <HomeIcon className="scale-110" />
            </span>
          </NavLink>
        </div>
        <div className='w-full h-[90%] flex items-center justify-center'>

          <div className='w-[25%] mx-10 h-[75%] bg-[#5135F7] shadow-lg flex items-center justify-center'>
            <div className='h-[85%] w-[85%] bg-white text-[#040B35] px-5 flex flex-col items-center justify-center'>
              <div className='text-3xl font-bold  my-2'>
                <h1 className='flex flex-col items-center font-extrabold'><span>Queryminds</span><span>Classic</span></h1>
              </div>
              <div className='flex  my-2'>
                <span className='my-1'>
                  <CurrencyRupeeIcon className=' scale-75' />
                </span>
                <h2 className='text-5xl font-extrabold'>
                  0
                </h2>
                <h4 className='flex items-end'>
                  / month
                </h4>
              </div>
              <div className=' my-2'>
                <p className=' text-justify text-sm px-6'>
                  Ask 20 queries for 3 hours with limitation to QueryMinds with short and concise responses.
                </p>
              </div>
              <div className='my-2 w-full flex items-center justify-center'>
                <NavLink to="/chatbot" className="w-full flex items-center justify-center">
                  <button className='text-white py-2 w-[83%] flex items-center justify-center bg-pink-600 font-semibold hover:bg-pink-700'>USE NOW</button>
                </NavLink>
              </div>
            </div>
          </div>


          <div className='w-[25%] mx-10 h-[75%] bg-[#5135F7] shadow-lg flex items-center justify-center'>
            <div className='h-[85%] w-[85%] bg-white text-[#040B35] px-5 flex flex-col items-center justify-center'>
              <div className='text-3xl font-bold  my-2'>
                <h1 className='flex flex-col items-center font-extrabold'><span>Queryminds</span><span>Premium</span></h1>
              </div>
              <div className='flex  my-2'>
                <span className='my-1'>
                  <CurrencyRupeeIcon className=' scale-75' />
                </span>
                <h2 className='text-5xl font-extrabold'>
                  99
                </h2>
                <h4 className='flex items-end'>
                  / month
                </h4>
              </div>
              <div className=' my-2'>
                <p className=' text-justify text-sm px-6'>
                  Ask unlimited query without any limitation to QueryMinds with detailed and descriptive responses.
                </p>
              </div>
              <div className='my-2 w-full flex items-center justify-center'>
                <button className='text-white py-2 w-[83%] flex items-center justify-center bg-pink-600 font-semibold hover:bg-pink-700'>PAY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing