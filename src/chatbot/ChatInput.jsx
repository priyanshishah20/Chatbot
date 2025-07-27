import React from 'react'
import Chatmessage from '../Chatmessage'

const ChatInput = () => {
    let msg = 'Hi, I\'m chatbot';
    let sender = 'robot';
    return (
        <>
            <div className='container mx-auto py-4 w-1/2'>
                    <div className='flex pb-3'>
                        <input type="text" placeholder='Send a message to Chatbot' className='w-full border border-gray-500 outline-none p-2 rounded-lg' />
                        <button type='button' className='ml-3 bg-[#198754] text-white rounded-lg p-2 px-4 cursor-pointer'>Send</button>
                    </div>

                <Chatmessage message='Hi, who are you?' sender='user' />
                <Chatmessage message={msg} sender={sender} />
            </div>
        </>
    )
}

export default ChatInput