import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMsg = { role: 'user', content: input };
    setMessages([...messages, userMsg]);
    setInput("");

    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    const botMsg = { role: 'assistant', content: data.response };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dhvani Chat</h1>
      <div className="border p-4 h-96 overflow-y-scroll bg-white mb-2">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 text-${msg.role === 'user' ? 'blue' : 'green'}-700`}>
            <b>{msg.role === 'user' ? 'You' : 'Dhvani'}:</b> {msg.content}
          </div>
        ))}
      </div>
      <input
        className="border px-2 py-1 mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-1">Send</button>
    </div>
  );
}

export default App;
