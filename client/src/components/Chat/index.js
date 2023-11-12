import React, { useEffect, useState } from 'react';
import AgoraRTM from 'agora-react-native-rtm';
import './Chat.scss'; // Your custom SCSS for Chat component

const Chat = ({ userId, token, channelName }) => {  //{ users, tracks }
  const [rtmClient, setRtmClient] = useState(null);
  const [rtmChannel, setRtmChannel] = useState(null);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Initialize Agora Chat
  useEffect(() => {
    const initAgoraChat = async () => {
      const client = AgoraRTM.createInstance('YOUR_AGORA_APP_ID');
      await client.login({ uid: userId, token });

      const channel = client.createChannel(channelName);
      await channel.join();

      setRtmClient(client);
      setRtmChannel(channel);

      channel.on('ChannelMessage', (receivedMessage, memberId) => {
        setChatHistory(prevHistory => [...prevHistory, { memberId, message: receivedMessage.text }]);
      });
    };

    initAgoraChat();

    return () => {
      rtmChannel?.leave();
      rtmClient?.logout();
    };
  }, [userId, token, channelName]);

  // Send Message
  const handleSendMessage = async () => {
    if (message) {
      await rtmChannel.sendMessage({ text: message });
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <p key={index}><b>{msg.memberId}:</b> {msg.message}</p>
        ))}
      </div>
      <div className="chat-input">
    </div>
    </div>
  )
}

export default Chat;
