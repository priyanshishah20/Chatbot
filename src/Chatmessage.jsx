import React from 'react'
import user from './assets/user.png'
import robot from './assets/robot.png'

const Chatmessage = ({ message, sender }) => {
    
    return (
        <>
            {sender === 'robot' && (<div className='flex justify-start py-3'>
                <img src={robot} alt="user" className='w-[2.75rem] h-[2.75rem] mr-3' />
                <div className='p-3 rounded-lg bg-gray-200 max-w-3/5'>{message}</div>
            </div>)}
            {sender === 'user' && (<div className='flex justify-end py-3'>
                <div className='p-3 rounded-lg bg-gray-200 max-w-3/5'>{message}</div>
                <img src={user} alt="user" className='w-[2.75rem] h-[2.75rem] ml-3' />
            </div>)}
        </>
    )
}

export default Chatmessage