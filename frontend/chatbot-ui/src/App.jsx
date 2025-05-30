// Rdsdd evamped Chatbot UI: Clean two-sided chat layout
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
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8">Dhvani – AI Chat Assistant</h1>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 h-[400px] border rounded-lg p-4 bg-gray-50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
              <div className={`px-4 py-2 rounded-lg max-w-[70%] text-sm font-medium shadow-sm ${
                msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={chatRef} />
        </div>

        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask something..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            onClick={sendMessage}
            className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
