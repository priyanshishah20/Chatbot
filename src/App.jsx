import { useState } from 'react'
import ChatInput from './chatbot/ChatInput'

function App() {

  const [chatMsg, setChatMsg] = useState([
          { id:'id1', message: 'Hi, how are you?', sender: 'user' },
          { id:'id2', message: 'Hi, I\'m chatbot. How you doing?', sender: 'robot' },
          { id:'id3', message: 'Doing great, thanks.', sender: 'user' },
      ]);

  return (
    <>
      <ChatInput chatMsg={chatMsg} setChatMsg={setChatMsg} />
    </>
  )
}

export default App
