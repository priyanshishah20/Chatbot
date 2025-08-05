import React, { useState } from 'react'
import Chatmessage from '../Chatmessage'

const ChatInput = ({chatMsg, setChatMsg}) => {
    //let msg = 'Hi, I\'m chatbot';
    //let sender = 'robot';

    // const [chatMsg, setChatMsg] = useState([
    //     { id:'id1', message: 'Hi, how are you?', sender: 'user' },
    //     { id:'id2', message: 'Hi, I\'m chatbot. How you doing?', sender: 'robot' },
    //     { id:'id3', message: 'Doing great, thanks.', sender: 'user' },
    // ]);
    const sendMsg =() => {
        const newChatmsgs = [...chatMsg, {id: crypto.randomUUID(), message: saveText, sender: 'user'}]
        setChatMsg(newChatmsgs); // unique id
        //console.log(chatMsg);
        console.log(saveText);
        const response = Chatbot.getResponse(saveText);
        setChatMsg([...newChatmsgs, {id: crypto.randomUUID(), message: response, sender: 'robot'}]); // unique id
        console.log(response);
        setSaveText('');
    }

    const[saveText, setSaveText] = useState('');
    const saveInput = (event) => {
        //console.log(event.target.value)
        setSaveText(event.target.value)
    }

    return (
        <>
            <div className='container mx-auto py-4 w-1/2'>
                <div className='flex pb-3'>
                    <input type="text" onChange={saveInput} value={saveText} placeholder='Send a message to Chatbot' className='w-full border border-gray-500 outline-none p-2 rounded-lg' />
                    <button type='button' onClick={sendMsg} className='ml-3 bg-[#198754] text-white rounded-lg p-2 px-4 cursor-pointer'>Send</button>
                </div>

                {chatMsg.map((msg) => (
                     <Chatmessage key={msg.id} message={msg.message} sender={msg.sender} />
                    //<Chatmessage key={msg.id} chatMsg={chatMsg} setChatMsg={setChatMsg} sender={msg.sender} />
                ))}
            </div>
        </>
    )
}

export default ChatInput