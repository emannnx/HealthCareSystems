import React, { useState, useRef, useEffect } from 'react';
import './Telehealth.css';
import { Send, Stethoscope, User, AlertTriangle } from 'lucide-react';

const Telehealth = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'doctor',
      content:
        "Hello! I'm Dr. Sarah, your virtual health assistant. I'm here to help answer your health-related questions and provide guidance. Please note that this consultation is for informational purposes only and should not replace proper medical care. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);
  const hasMounted = useRef(false);

  const scrollToBottom = () => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const timeout = setTimeout(() => {
      scrollToBottom();
    }, 100); // delay ensures DOM is ready

    return () => clearTimeout(timeout);
  }, [messages]);

  const generateDoctorResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('headache')) {
      return "I understand you're experiencing headaches. It's important to stay hydrated and get enough rest. If the headache persists or is severe, consider seeing a healthcare professional.";
    }
    return 'Thank you for sharing that with me. Can you tell me more about your symptoms?';
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: newMessage,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    setTimeout(() => {
      const doctorResponse = {
        id: (Date.now() + 1).toString(),
        sender: 'doctor',
        content: generateDoctorResponse(newMessage),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, doctorResponse]);
      setIsTyping(false);
    }, 2000);
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
              Get professional health guidance from our AI-powered virtual doctor.
            </p>
          </div>

          <div className="telehealth-disclaimer">
            <AlertTriangle className="telehealth-disclaimer-icon" />
            <div className="telehealth-disclaimer-text">
              <p className="telehealth-disclaimer-title">Important Disclaimer</p>
              <p>
                This AI assistant provides general health information only and does not replace the need for a licensed medical professional.
              </p>
            </div>
          </div>

          <div className="telehealth-chatbox">
            <div className="telehealth-chat-header">
              <div className="telehealth-avatar doctor">
                <Stethoscope className="telehealth-icon" />
              </div>
              Dr. Sarah - Virtual Health Assistant <span className="telehealth-online-status">● Online</span>
            </div>

            <div className="telehealth-messages" ref={chatContainerRef}>
              {messages.map((message) => (
                <div key={message.id} className={`telehealth-message ${message.sender}`}>
                  <div className="telehealth-avatar">
                    {message.sender === 'user' ? (
                      <User className="telehealth-icon" />
                    ) : (
                      <Stethoscope className="telehealth-icon" />
                    )}
                  </div>
                  <div className="telehealth-message-content">
                    <div className="telehealth-bubble">{message.content}</div>
                    <div className="telehealth-timestamp">
                      {message.timestamp.toLocaleTimeString()}
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
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
            </div>

            <div className="telehealth-input-wrapper">
              <input
                className="telehealth-input"
                placeholder="Describe your symptoms..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
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
