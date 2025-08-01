import React from 'react'
import Chatmessage from '../Chatmessage'

const ChatInput = () => {
    let msg = 'Hi, I\'m chatbot';
    let sender = 'robot';

    const chatMessages = [
        { id:'id1', message: 'Hi, how are you?', sender: 'user' },
        { id:'id2', message: 'Hi, I\'m chatbot. How you doing?', sender: 'robot' },
        { id:'id3', message: 'Doing great, thanks.', sender: 'user' },
    ];

    return (
        <>
            <div className='container mx-auto py-4 w-1/2'>
                <div className='flex pb-3'>
                    <input type="text" placeholder='Send a message to Chatbot' className='w-full border border-gray-500 outline-none p-2 rounded-lg' />
                    <button type='button' className='ml-3 bg-[#198754] text-white rounded-lg p-2 px-4 cursor-pointer'>Send</button>
                </div>

                {/* <Chatmessage message='Hi, who are you?' sender='user' />
                <Chatmessage message={msg} sender={sender} /> */}
                {chatMessages.map((msg) => (
                    <Chatmessage key={msg.id} message={msg.message} sender={msg.sender} />
                ))}
            </div>
        </>
    )
}

export default ChatInput