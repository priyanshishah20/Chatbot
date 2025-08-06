import React, { useState } from 'react'
import Chatmessage from '../Chatmessage'
import ChatInput from './ChatInput'

const ChatRender = ({chatMsg, setChatMsg}) => {
    // const [chatMsg, setChatMsg] = useState([
    //     { id:'id1', message: 'Hi, how are you?', sender: 'user' },
    //     { id:'id2', message: 'Hi, I\'m chatbot. How you doing?', sender: 'robot' },
    // ]);
    const sendMsg = () => {
        const newChatmsgs = [...chatMsg, { id: crypto.randomUUID(), message: saveText, sender: 'user' }] 
        setChatMsg(newChatmsgs); 
        //console.log(saveText);
        const response = Chatbot.getResponse(saveText);
        setChatMsg([...newChatmsgs, { id: crypto.randomUUID(), message: response, sender: 'robot' }]); // unique id
        //console.log(response);
        setSaveText('');
    }

    const [saveText, setSaveText] = useState('');
    const saveInput = (event) => {
        //console.log(event.target.value)
        setSaveText(event.target.value)
    }

    return (
        <>
            <div className='container mx-auto py-4 w-[94%] lg:w-1/2'>
                <ChatInput saveInput={saveInput} saveText={saveText} sendMsg={sendMsg}/>

                <div>
                    {chatMsg.map((msg) => (
                     <Chatmessage key={msg.id} message={msg.message} sender={msg.sender} />
                    //<Chatmessage key={msg.id} chatMsg={chatMsg} setChatMsg={setChatMsg} sender={msg.sender} />
                ))}
                </div>
            </div>
        </>
    )
}

export default ChatRender