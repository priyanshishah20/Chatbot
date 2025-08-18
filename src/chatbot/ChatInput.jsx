import React from 'react'

const ChatInput = ({ saveInput, saveText, sendMsg }) => {
    return (
        <>
            <div className='container flex py-4 fixed mx-auto bg-white w-[94%] lg:w-1/2 top-0'> {/* bottom-0 */}
                <input type="text" onChange={saveInput} value={saveText} placeholder='Send a message to Chatbot' className='w-full border border-gray-500 outline-none p-2 rounded-lg' />
                <button type='button' onClick={sendMsg} className='ml-3 bg-[#198754] text-white rounded-lg p-2 px-4 cursor-pointer'>Send</button>
            </div>
        </>
    )
}

export default ChatInput