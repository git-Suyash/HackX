import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = { text: inputMessage, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {  // api message
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.message, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 h-96">
          <div className="flex justify-between items-center p-4 bg-teal-600 text-white rounded-t-lg">
            <h3 className="font-semibold">Setu.AI</h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-teal-600 p-1 rounded">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="p-4 border-t">
            <div className="flex items-center">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="p-2 bg-teal-600 text-white rounded-r-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal-600 hover:bg-teal-600 text-white rounded-full p-3 shadow-lg"
        >
          <MessageCircle size={48} />
        </button>
      )}
    </div>
  );
};

export default FloatingChatBot;