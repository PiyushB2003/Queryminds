import React, { useContext, useCallback, useEffect } from 'react'
import Markdown from "react-markdown";
import { Context } from '../context/Context';
import Loader from "../components/Loader.jsx"
import {
    CodeRoundedIcon,
    LightbulbIcon,
    SchoolRoundedIcon,
    DriveFileRenameOutlineIcon,
} from "../utils/Icons.js";

const ChatPageMain = () => {
    const { recentPrompt, setRecentPrompt, setText, resultData, showResult, GetFirstName, loading } = useContext(Context)

    const handlePromptClick = useCallback((prompt) => {
        setText(prompt);
        console.log("Prompt selected:", prompt);
        console.log("Recent prompt", recentPrompt);

    }, [setRecentPrompt]);


    const SuggestionDataArray = [
        {
            text: "How to improve readability of code",
            ClickFuntion: () => {
                handlePromptClick("How to improve readability of code")
            },
            icon: <CodeRoundedIcon className="text-pink-400" />
        },
        {
            text: "Tips to write professional email",
            ClickFuntion: () => {
                handlePromptClick("Tips to write professional email")
            },
            icon: <SchoolRoundedIcon className="text-[#76D0EB]" />
        },
        {
            text: "Plan a daily routine for you",
            ClickFuntion: () => {
                handlePromptClick("Plan a daily routine for you")
            },
            icon: <LightbulbIcon className="text-[#E2C541]" />
        },
        {
            text: "Message to comfort a friend",
            ClickFuntion: () => {
                handlePromptClick("Message to comfort a friend")
            },
            icon: <DriveFileRenameOutlineIcon className="text-[#CB8BD0]" />
        },
    ]

    useEffect(() => {
        console.log("Recent prompt updated:", recentPrompt);
        setText(recentPrompt)
    }, [recentPrompt]);
    return (
        <>
            {!showResult ? (
                <>
                    <div className="h-full w-full">
                        <div className="w-full flex flex-col items-center">
                            <div className="w-full flex justify-center">
                                <img src="./images/logo.png" className="size-28" alt="robot-logo" />
                            </div>
                            <div className="text-5xl w-full flex items-center flex-col">
                                <h1 className="font-bold bg-gradient-to-r from-[#EC008C] to-[#00aeef] bg-clip-text text-transparent pb-2">Hello, {GetFirstName()}</h1>
                                <h1 className="font-bold text-[#3f4e97]">How can I help you today?</h1>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-[#0c1649]  overflow-y-auto flex items-center justify-center flex-wrap">
                        {
                            SuggestionDataArray.map((obj, index) => {
                                return (
                                    <span key={index} onClick={obj.ClickFuntion} className="border border-gray-700 hover:bg-[#0d1540] cursor-pointer h-[130px] rounded-xl mx-3 w-[170px] flex flex-col">
                                        <span className="px-2 pt-2">
                                            {obj.icon}
                                        </span>
                                        <span className="text-white px-3 pt-2">{obj.text}</span>
                                    </span>
                                )
                            })
                        }
                    </div>
                </>
            ) : (
                <>
                    <div className='w-full h-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-[#0c1649]  overflow-y-auto text-white flex justify-center'>
                        <div className="w-[80%] h-full">
                            <div className="flex justify-end my-5">
                                <div className="flex rounded-xl bg-slate-700 p-3 max-w-[80%] w-auto items-center">
                                    <span className="mx-1 w-full">

                                        <pre className="whitespace-pre-wrap break-words">
                                            <p className="text-justify overflow-hidden break-words">
                                                {recentPrompt}
                                            </p>
                                        </pre>
                                    </span>
                                </div>
                            </div>

                            {
                                loading ? <Loader /> : <div className='flex my-5'>
                                    <img src="./images/logo_white.png" className="size-10 rounded-full border border-zinc-500 p-[5px] flex items-center justify-center mx-2" alt="Icon" />
                                    <div className='text-justify ml-2'> <Markdown className="result">{resultData}</Markdown></div>
                                </div>
                            }

                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ChatPageMain