import React, { useContext, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { Context } from '../context/Context';
import {
    MenuIcon,
    MenuOpenIcon,
    AddIcon,
    HomeIcon,
    DarkModeIcon,
    LightModeIcon,
    ChatIcon
} from "../utils/Icons.js"


const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);
    const { setRecentPrompt, setShowResult, count, setCount } = useContext(Context);

    const handleClick = useCallback((title) => {
        setRecentPrompt(title);
    }, [setRecentPrompt]);

    const { isPending, error, data } = useQuery({
        queryKey: ["userChats"],
        queryFn: async () => {
            try {
                const userId = localStorage.getItem("userId");
                console.log("UserId is: ", userId);
                
                if (!userId) throw new Error("User ID is missing");

                const response = await fetch(`http://localhost:5000/api/userchats?userId=${userId}`, {
                    credentials: "include",
                });
                console.log("This is response ", response);

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error("HTTP error:", response.status, errorText);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log("API Response:", result);
                return result;
            } catch (err) {
                console.error("Fetch error:", err);
                throw err; // Rethrow error to be caught by React Query
            }
        },
        refetchInterval: 5000,
        refetchOnWindowFocus: true,
    });

    if (error) {
        console.log("Error details:", error);
    }

    return (
        <div className={` ${expanded ? "w-20 transition-all ease-in-out duration-300 bg-[#0c1649] flex flex-col text-white justify-between" : " transition-all ease-in-out duration-300l w-80 bg-[#0c1649] text-white flex flex-col h-screen"} `}>
            <div className={`${expanded ? "w-full border-none flex flex-col justify-center py-4" : "py-4 font-semibold border-b border-gray-700"}`}>
                <div className={`${expanded ? "flex flex-col w-full justify-center items-center" : "flex justify-between"}`}>
                    <span className={`${expanded ? "mx-0 p-3 cursor-pointer hover:bg-gray-700 flex items-center justify-center rounded-full" : "cursor-pointer hover:bg-gray-700 mx-4 p-2 flex items-center justify-center rounded-full"}`} onClick={() => setExpanded(curr => !curr)}>
                        {expanded ? <MenuIcon className=' scale-125' />
                            : <MenuOpenIcon className=' scale-125' />}
                    </span>
                    <span className={`${expanded ? "transition-all mx-0 p-3 my-3 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-700" : "transition-all cursor-pointer hover:bg-gray-700 mx-4 p-2 flex items-center justify-center rounded-full"}`}>
                        <NavLink to="/" className="w-full h-full flex items-center justify-center"><HomeIcon className='scale-125' /></NavLink>
                    </span>
                </div>
                <div className={`${expanded ? "transition-all w-full flex items-center justify-center" : "transition-all"}`}>
                    <button onClick={() => setShowResult(false)} className={`${expanded ? "transition-all p-2 mx-0 my-3 rounded-full flex items-center justify-center bg-gray-700 text-white cursor-pointer" : "transition-all text-left py-1 mx-3 my-5 px-1 rounded-full flex items-center justify-center bg-gray-700"}`}>
                        <span><AddIcon className='scale-125' /></span>
                        <span className={`${expanded ? "hidden transition-all" : "pl-3 px-2 transition-all"}`}>New Chat</span>
                    </button>
                </div>
            </div>

            <div className={`${expanded ? "hidden transition-all" : "transition-all flex-1 py-4 px-4 space-y-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-[#0c1649] overflow-y-scroll"}`}>
                <div className="space-y-2">
                    <p className="text-gray-400 text-sm py-2 px-3">Recent</p>
                    <div>
                        {data?.slice().reverse().map(chat => (
                            <button
                                onClick={() => handleClick(chat.title)}
                                key={chat._id}
                                className="w-full text-left py-2 px-1 rounded-lg hover:bg-gray-700 text-sm font-semibold"
                            >
                                <span className='px-1'><ChatIcon className='scale-75' /></span>
                                <span className='pl-2'>{(chat.title.length <= 30) ? chat.title : `${chat.title.substring(0, 30)}...`}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>


            <div className={`${expanded ? "transition-all flex border-none w-full my-6 items-center justify-center" : "transition-all p-4 border-t border-gray-700"}`}>
                <button className={`${expanded ? "transition-all p-0" : "transition-all w-full text-left p-2 rounded-lg hover:bg-gray-700 flex items-center"}`}>
                    <span className={`${expanded ? "p-3 hover:bg-gray-700 flex items-center justify-center rounded-full" : ""}`}><LightModeIcon /></span>
                    <span className={`${expanded ? "transition-all hidden" : "px-2 transition-all"}`}>Light theme</span>
                </button>
            </div>
        </div >
    );
}

export default Sidebar;