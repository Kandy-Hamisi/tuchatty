import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
  console.log(props);
    const chatProps = useMultiChatLogic("9d8add42-ac59-4804-9dd7-c0afb827363d", props.user.username, props.user.secret);
  return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  )
}

export default ChatsPage