import React from 'react';
import MySlider from './MySlider';
import { NavLink } from 'react-router-dom';
import {
    AutoAwesomeRoundedIcon
} from "../utils/Icons.js"

const HeroSection = () => {
    return (
        <div className='h-screen w-full bg-[#040B35]'>
            <div className='flex flex-col mt-10 items-center justify-center w-full max-w-screen-xl mx-auto px-4'>
                <div className='my-2 flex items-center'>
                    <img src="./images/logo.png" alt="robot-logo" className='w-16 h-16 mx-1' />
                    <h1 className="font-extrabold text-4xl bg-gradient-to-r from-[#EC008C] to-[#00aeef] bg-clip-text text-transparent mx-1">
                        Queryminds
                    </h1>
                </div>
                <div className='my-2 text-white text-3xl font-bold text-center'>
                    <h2>
                        Where every question meets its answer
                    </h2>
                    <h2>
                        What will you ask?
                    </h2>
                </div>
                <div className='my-4'>
                    <NavLink to="/chatbot" >
                        <button className='bg-gradient-to-r from-[#EC008C] to-[#00aeef] hover:from-[#d50080] hover:to-[#009bd3] py-3 px-6 text-lg flex items-center text-white rounded-md font-bold uppercase'>
                            <AutoAwesomeRoundedIcon className='mx-1' />
                            <span className='mx-1'>Pose a query</span>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
