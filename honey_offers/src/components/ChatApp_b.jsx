import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('192.168.137.225:4000'); // Replace with server address

const ChatApp_b = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChatHistory((prevHistory) => [...prevHistory, msg]);
    });

    return () => socket.disconnect(); // Clean up on unmount
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-lg font-semibold text-gray-800 p-4">Real time Chat</h2>
      <ul className="divide-y divide-gray-200">
        {chatHistory.map((msg, index) => (
          msg && (
            <li key={index} className="p-4">
              {msg}
            </li>
          )
        ))}
      </ul>
      <form onSubmit={sendMessage} className="p-4">
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-300 rounded-lg p-2"
          />
          <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </form>
    </div>

  );
};

export default ChatApp_b;