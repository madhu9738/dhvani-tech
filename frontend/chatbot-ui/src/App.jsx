// Updated React Chatbot UI - Enhanced Design with Role-based Styling
import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    const res = await fetch("https://api.dhvani.solutions/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    const botMsg = { role: 'assistant', content: data.response };
    setMessages(prev => [...prev, botMsg]);
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Dhvani – AI Chat Assistant</h1>

      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        <div className="h-96 overflow-y-scroll pr-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-xs text-white text-sm font-medium shadow-md ${
                  msg.role === 'user' ? 'bg-blue-500' : 'bg-gray-700'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={chatRef} />
        </div>

        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
