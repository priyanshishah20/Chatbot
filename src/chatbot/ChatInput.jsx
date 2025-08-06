import React, { useState } from 'react'

const ChatInput = ({ saveInput, saveText, sendMsg }) => {
    return (
        <>
            <div className='flex pb-3'>
                <input type="text" onChange={saveInput} value={saveText} placeholder='Send a message to Chatbot' className='w-full border border-gray-500 outline-none p-2 rounded-lg' />
                <button type='button' onClick={sendMsg} className='ml-3 bg-[#198754] text-white rounded-lg p-2 px-4 cursor-pointer'>Send</button>
            </div>
        </>
    )
}

export default ChatInput