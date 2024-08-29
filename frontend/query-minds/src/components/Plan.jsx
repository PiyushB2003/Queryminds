import React, {useState, useRef, useEffect} from 'react'
import {
    ArrowDropUpIcon,
    ArrowDropDownIcon,
    AutoAwesomeIcon,
    CheckCircleOutlineIcon,
} from "../utils/Icons.js"

const Plan = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div ref={dropdownRef} className='relative'>
                <div
                    className='flex items-center cursor-pointer transition-all hover:bg-gray-700 py-1 px-2 rounded-md'
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <span>
                        <h1 className="text-xl font-semibold">Queryminds</h1>
                    </span>
                    <span>
                        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </span>
                </div>
                {isOpen && (
                    <div className="absolute top-full mt-2 left-0 w-80 bg-[#0C1649] text-white rounded-xl shadow-lg">
                        <ul className="py-4">
                            <li className="pl-2 pr-4 py-2 mx-2 rounded-xl hover:bg-gray-700 cursor-pointer flex justify-between items-center">
                                <span className='flex flex-row items-center'>
                                    <span className='mx-1'><AutoAwesomeIcon className='text-[#3196DC] scale-[0.8]' /></span>
                                    <span className='mx-1'>Queryminds</span>
                                </span>
                                <span className='flex flex-row items-center'>
                                    <CheckCircleOutlineIcon />
                                </span>
                            </li>
                            <li className="pl-2 pr-4 py-2 mx-2 rounded-xl hover:bg-gray-700 cursor-pointer flex justify-between items-center">
                                <span className='flex flex-row items-center'>
                                    <span className='mx-1'><AutoAwesomeIcon className='text-[#D6615E] scale-[0.8]' /></span>
                                    <span className='mx-1'>Queryminds Pro</span>
                                </span>
                                <span className='text-sm py-1 px-3 text-white rounded-full bg-black flex flex-row items-center'>Upgrade</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Plan