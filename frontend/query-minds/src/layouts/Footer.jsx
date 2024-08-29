import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    InstagramIcon,
    LinkedInIcon,
    EmailRoundedIcon,
    LocalPhoneRoundedIcon
} from "../utils/Icons.js"

const Footer = () => {
    return (
        <footer className="bg-[#0C1649] text-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div>
                            <span>
                                <NavLink to="/" className="flex items-center">
                                    <img src="./images/logo.png" alt="robot-logo" className='size-12' />
                                    <h3 className="font-extrabold text-3xl bg-gradient-to-r from-[#EC008C] to-[#00aeef] bg-clip-text text-transparent mx-1">
                                        Queryminds
                                    </h3>
                                </NavLink>
                            </span>
                            <p className="text-gray-400 my-2">
                                Creating something great for the web. Your slogan or mission statement goes here.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2 mt-6">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/piyushborkar/" target='_blank' className="text-gray-400 hover:text-white">
                                    <LinkedInIcon />
                                </a>
                                <a href="https://www.instagram.com/_piyush_borkar_" target='_blank' className="text-gray-400 hover:text-white">
                                    <InstagramIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><NavLink to="/" className="text-gray-400 hover:text-white hover:underline">Home</NavLink></li>
                            <li><NavLink to="/chatbot" className="text-gray-400 hover:text-white hover:underline">Ask query</NavLink></li>
                            <li><NavLink to="/pricing" className="text-gray-400 hover:text-white hover:underline">Pricing</NavLink></li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                            <div className='flex flex-col'>
                                <div className='flex items-center my-[2px] text-gray-400'>
                                    <span className='pr-2'><EmailRoundedIcon /></span>
                                    <span className='px-2'>piyushborkar95@gmail.com</span>
                                </div>
                                <div className='flex items-center my-[2px] text-gray-400'>
                                    <span className='pr-2'><LocalPhoneRoundedIcon /></span>
                                    <span className='px-2'>+91 097-6405-7350</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Queryminds. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
