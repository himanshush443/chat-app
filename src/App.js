import { ChatEngine, ChatFeed } from 'react-chat-engine'

import './App.css';
import { ChatExt } from './components/ChatExt' 

import React from 'react'

const App = () => {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="3157a42d-5feb-4a1e-a43e-76bb4a6fc0f2"
        userName="himanshu"
        userSecret="123456"
        renderChatFeed={(chatAppProps) => <ChatExt {...chatAppProps} />}
      />
    </div>
  )
}

export default App;
