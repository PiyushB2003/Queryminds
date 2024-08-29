import React, {useContext, useEffect} from 'react'
import "../index.css";
import Header from  '../layouts/Header';
import HeroSection from '../layouts/HeroSection';
import Footer from "../layouts/Footer"
import { Context } from '../context/Context';

const Home = () => {
    const {
        setUserEmail,
        setUsername,
        setFullname,
        setNumber,
    } = useContext(Context);
    return (
        <div className='h-auto w-screen bg-[#040B35] '>
            <Header />
            <HeroSection />
            <Footer />
        </div>
    )
}

export default Home