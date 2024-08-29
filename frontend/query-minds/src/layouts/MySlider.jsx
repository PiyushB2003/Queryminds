import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const MySlider = () => {
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        infinite: true,
        centerPadding: "250px",
        slidesToShow: 1,
        speed: 500
    };
    return (
        <div className='h-screen w-[90%] my-20 m-auto'>
            <Slider {...settings}>
                <div className='rounded-lg h-[500px] bg-red-500'></div>
                <div className='rounded-lg h-[500px] bg-green-500'></div>
                <div className='rounded-lg h-[500px] bg-blue-500'></div>
                <div className='rounded-lg h-[500px] bg-yellow-500'></div>
                <div className='rounded-lg h-[500px] bg-purple-500'></div>
            </Slider>
        </div>
    )
}

export default MySlider 