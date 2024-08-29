import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Profile from "../components/Profile.jsx"
import {
    AutoAwesomeRoundedIcon,
    AttachMoneyRoundedIcon,
    LightModeIcon,
    DarkModeIcon
} from "../utils/Icons.js"
import { Context } from '../context/Context.js';

const Header = () => {
    const [btn, setBtn] = useState("light");
    const [isScrolled, setIsScrolled] = useState(false);
    const { isAuthenticated } = useContext(Context);
    console.log(isAuthenticated);
    

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`w-full py-6 flex justify-between items-center sticky top-0 bg-[#040B35] z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
            <div className='h-full flex items-center mx-3'>
                <span className='flex items-center flex-row mx-6 cursor-pointer'>
                    <NavLink to="/" className="flex items-center">
                        <img src="./images/logo.png" alt="robot-logo" className='size-10' />
                        <h3 className="font-extrabold text-2xl bg-gradient-to-r from-[#EC008C] to-[#00aeef] bg-clip-text text-transparent">
                            Queryminds
                        </h3>
                    </NavLink>
                </span>
                <span className='text-gray-500 mx-6 cursor-pointer hover:text-white flex items-center'>
                    <NavLink to="/chatbot" className="flex items-center">
                        <AutoAwesomeRoundedIcon />
                        <span className='text-lg mx-2 font-semibold'>Ask anything</span>
                    </NavLink>
                </span>
                <span className='flex text-gray-500 cursor-pointer items-center mx-6 hover:text-white'>
                    <NavLink to="/pricing" className="flex items-center">
                        <AttachMoneyRoundedIcon />
                        <span className='text-lg mx-2 font-semibold'>Pricing</span>
                    </NavLink>
                </span>
            </div>
            <div className='h-full flex items-center mx-8'>
                {
                    isAuthenticated ? <Profile /> : <span className='mx-3'>
                        <NavLink to="/signup">
                            <button className='text-white py-2 text-sm font-bold px-7 rounded-full bg-[#5135F7] hover:bg-[#3d27b7]'>Log In</button>
                        </NavLink>
                    </span>
                }

                <span className='mx-3'>
                    <button className='text-white bg-[#323a60] size-10 rounded-full flex items-center justify-center' onClick={() => setBtn(btn === "light" ? "dark" : "light")}>
                        {
                            btn === "light" ? <LightModeIcon /> : <DarkModeIcon />
                        }
                    </button>
                </span>
            </div>
        </div>
    );
}

export default Header;
