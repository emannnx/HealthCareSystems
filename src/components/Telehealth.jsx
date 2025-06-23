import React, { useState, useRef, useEffect } from 'react';
import './Telehealth.css';
import { Send, Stethoscope, User, AlertTriangle } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyDoQL71iv9ifvD0Y5YAwJlcq0Rm2NEMTL0';

const Telehealth = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'doctor',
      content:
        "Hello! I’m your virtual health assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);
  const hasMounted = useRef(false);

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });

  const scrollToBottom = () => {
    const c = chatContainerRef.current;
    if (c) c.scrollTop = c.scrollHeight;
  };

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    setTimeout(scrollToBottom, 100);
  }, [messages]);

  const splitMessage = (text) =>
    text
      .split('\n\n')
      .map((part) => part.trim())
      .filter(Boolean);

  const generateAIResponse = async (userMessage) => {
    try {
      const prompt = `
You are a caring virtual health assistant. Respond clearly and gently to:
"${userMessage}"

Use this structure (one thought per paragraph):

What it might be – simple explanation.  
What to do now – immediate steps and self-care.  
Medicines – safe OTC options with dosage (e.g., "Take 500 mg ibuprofen every 6 hours").  
See a doctor if… – serious signs to watch for.  
End with a brief disclaimer: "This is for general information only."

Avoid repeating names or legal phrases. No bullet points or markdown. Keep each paragraph concise.
`;
      const res = await model.generateContent(prompt);
      return splitMessage(res.response.text());
    } catch (err) {
      console.error('AI error:', err);
      return ["Sorry, I didn't understand that. Could you clarify?"];
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: 'user', content: newMessage, timestamp: new Date() },
    ]);
    setNewMessage('');
    setIsTyping(true);

    const aiChunks = await generateAIResponse(newMessage);

    for (let i = 0; i < aiChunks.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + i + 1).toString(),
          sender: 'doctor',
          content: aiChunks[i],
          timestamp: new Date(),
        },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <div className="telehealth-container">
      <main className="telehealth-main">
        <div className="telehealth-wrapper">
          <div className="telehealth-header">
            <h1 className="telehealth-title">
              <Stethoscope className="telehealth-icon" />
              Chat with Dr. Sarah
            </h1>
            <p className="telehealth-description">
              Friendly, step‑by‑step health guidance.
            </p>
          </div>

          <div className="telehealth-disclaimer">
            <AlertTriangle className="telehealth-disclaimer-icon" />
            <div className="telehealth-disclaimer-text">
              <p className="telehealth-disclaimer-title">Important Disclaimer</p>
              <p>
                This assistant provides general health information only and cannot replace professional medical advice.
              </p>
            </div>
          </div>

          <div className="telehealth-chatbox">
            <div className="telehealth-chat-header">
              <div className="telehealth-avatar doctor">
                <Stethoscope className="telehealth-icon" />
              </div>
              VirtuCare Assistant <span className="telehealth-online-status">● Online</span>
            </div>

            <div className="telehealth-messages" ref={chatContainerRef}>
              {messages.map((m) => (
                <div key={m.id} className={`telehealth-message ${m.sender}`}>
                  <div className="telehealth-avatar">
                    {m.sender === 'user' ? (
                      <User className="telehealth-icon" />
                    ) : (
                      <Stethoscope className="telehealth-icon" />
                    )}
                  </div>
                  <div className="telehealth-message-content">
                    <div className="telehealth-bubble">{m.content}</div>
                    <div className="telehealth-timestamp">
                      {m.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="telehealth-message doctor">
                  <div className="telehealth-avatar">
                    <Stethoscope className="telehealth-icon" />
                  </div>
                  <div className="telehealth-bubble typing">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                </div>
              )}
            </div>

            <div className="telehealth-input-wrapper">
              <input
                className="telehealth-input"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder="Describe your symptoms..."
                disabled={isTyping}
              />
              <button
                className="telehealth-send-button"
                onClick={handleSendMessage}
                disabled={isTyping || !newMessage.trim()}
              >
                <Send />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Telehealth;
