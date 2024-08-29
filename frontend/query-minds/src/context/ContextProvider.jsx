import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from './Context';
import { v4 as uuidv4 } from 'uuid';


const ContextProvider = (props) => {
    const [text, setText] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [number, setNumber] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [count, setCount] = useState(0);

    const HandleSubmit = () => {
        // e?.preventDefault();
        // e.target.value = "";
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(text);
        setText("");
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        let userId = localStorage.getItem("userId");

        if (!userId) {
            userId = uuidv4();
            localStorage.setItem("userId", userId);
        }

        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        };

        axios.post("http://localhost:5000/chatbot", { text, userId }, { headers })
            .then(result => {
                setResultData(result.data.response);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error in HandleSubmit:", error);
                setLoading(false);
            });
    };
    const GetFirstName = () => {
        let firstname = username?.split(" ")[0];
        return firstname;
    };

    function getInitials() {
        const nameParts = fullname.trim().split(" ");

        if (nameParts.length === 1) {
            return fullname.charAt(0).toUpperCase(); // For a single name
        }

        const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
        const lastNameInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();

        return firstNameInitial + lastNameInitial;
    }
    function getRandomNumber() {
        return Math.floor(Math.random() * 6) + 1;
    }

    useEffect(() => {
        setUsername(localStorage.getItem("loggedInUser"));
        setFullname(localStorage.getItem("loggedInUser"));
        setUserEmail(localStorage.getItem("loggedInUserEmail"));
        setNumber(localStorage.getItem("ColorNumber"));
    }, []);

    const contextValue = {
        prevPrompts,
        recentPrompt,
        showResult,
        loading,
        resultData,
        text,
        username,
        userEmail,
        isAuthenticated,
        number,
        count,
        setCount,
        setNumber,
        setUserEmail,
        setPrevPrompts,
        setRecentPrompt,
        setShowResult,
        setText,
        setUsername,
        setFullname,
        HandleSubmit,
        setResultData,
        GetFirstName,
        getRandomNumber,
        getInitials,
        setIsAuthenticated
    }


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
