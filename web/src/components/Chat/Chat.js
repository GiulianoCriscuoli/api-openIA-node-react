import React from 'react';
import './Chat.css'
// import Avatar from '../../assets/Avatar';


export const Chat = ({message}) => {
return (
    <div className={`chat-message ${message.user === 'gpt' && "chat-gpt"}`}>
        <div className="chat-message-center">
            {/* <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>{message.user === 'gpt' && (<Avatar/>)}</div> */}
            <div className="message">
                {message.message}
            </div>
        </div>
    </div>
)}