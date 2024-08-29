import React from 'react';
import Plan from '../components/Plan.jsx';
import Profile from '../components/Profile.jsx';

const ChatPageHeader = () => {
    return (
        <>
            <div className="flex items-center justify-between py-4 px-5 text-white bg-[#040B35]">
                <Plan />
                <Profile />
            </div>
        </>
    )
}

export default ChatPageHeader