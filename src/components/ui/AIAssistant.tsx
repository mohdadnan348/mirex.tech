"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./AIAssistant.module.css";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

export default function AIAssistant() {
  const { t, language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: t("aiBot.welcome"),
        timestamp: new Date(),
      },
    ]);
  }, [language]); // Re-run when language changes

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    const userText = inputValue.toLowerCase();
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response based on matching keywords
    setTimeout(() => {
      let botResponse = "";
      if (language === "en") {
        if (userText.includes("price") || userText.includes("pricing") || userText.includes("cost") || userText.includes("plan")) {
          botResponse = "MirexTech offers 3 packages: Starter (₹8,000/mo for basic SMM), Business (₹18,000/mo for 30 posts + ad management), and Enterprise (₹35,000+ for SEO, video editing & custom manager). We also provide custom quotes for Web/Mobile/AI software.";
        } else if (userText.includes("service") || userText.includes("what you do") || userText.includes("offer")) {
          botResponse = "We build custom websites (React/Next.js), mobile applications (React Native), AI chatbots, ERP/CRM portals, and offer Creative Video Editing, SEO optimization, and Social Media Marketing (SMM) solutions.";
        } else if (userText.includes("time") || userText.includes("how long") || userText.includes("duration")) {
          botResponse = "A basic website takes 2-3 weeks. A complex ERP or AI automation software takes 4-8 weeks. We deliver using an agile, sprint-based methodology.";
        } else if (userText.includes("project") || userText.includes("portfolio") || userText.includes("work")) {
          botResponse = "We have completed projects like ResumeAI Pro (AI resume scorer), ProShipStar (logistics UI), Aylish Salon management, Kheth Spices commerce, and Maa Furniture business page. Visit our Projects page to see full live demos!";
        } else if (userText.includes("contact") || userText.includes("whatsapp") || userText.includes("email") || userText.includes("number")) {
          botResponse = "You can contact our founder Mohd Adnan on WhatsApp, call +91 63897 09762, or email hello.mirextech@gmail.com. Head over to our Contact page to book a direct Calendly call!";
        } else if (userText.includes("source code") || userText.includes("code owner")) {
          botResponse = "Yes! You get 100% ownership of the repository and source code once the final payment is cleared. We hand over all files and deploy them to your cloud (AWS/Vercel).";
        } else {
          botResponse = "I'm Mirex AI, your digital assistant. You can ask me about our Pricing, Services, Portfolios, Timelines, or how to Contact us directly!";
        }
      } else {
        // Hindi responses
        if (userText.includes("price") || userText.includes("pricing") || userText.includes("cost") || userText.includes("plan") || userText.includes("कितना")) {
          botResponse = "MirexTech के पास 3 प्लान हैं: स्टार्टर (₹8,000/माह), बिजनेस (₹18,000/माह), और एंटरप्राइज (₹35,000+)। हम बड़ी वेब/एआई परियोजनाओं के लिए कस्टम कोट भी प्रदान करते हैं।";
        } else if (userText.includes("काम") || userText.includes("service") || userText.includes("सेवा")) {
          botResponse = "हम कस्टम वेबसाइट (Next.js), मोबाइल ऐप (React Native), एआई चैटबॉट, ईआरपी/सीआरएम सिस्टम, और डिजिटल मार्केटिंग (SEO & SMM) सेवाएं प्रदान करते हैं।";
        } else if (userText.includes("समय") || userText.includes("time") || userText.includes("कितना दिन")) {
          botResponse = "एक सामान्य वेबसाइट में 2-3 सप्ताह लगते हैं। जटिल ERP या AI सॉफ्टवेयर के निर्माण में 4-8 सप्ताह लगते हैं।";
        } else if (userText.includes("project") || userText.includes("काम") || userText.includes("portfolio")) {
          botResponse = "हमने ResumeAI Pro (एआई रेज़्यूमे स्कोरर), ProShipStar, Aylish Salon, और Maa Furniture जैसी परियोजनाएं बनाई हैं। पोर्टफोलियो पेज पर लाइव लिंक देखें!";
        } else if (userText.includes("संपर्क") || userText.includes("contact") || userText.includes("whatsapp") || userText.includes("फोन")) {
          botResponse = "आप व्हाट्सएप पर चैट कर सकते हैं, +91 63897 09762 पर कॉल कर सकते हैं, या hello.mirextech@gmail.com पर ईमेल कर सकते हैं।";
        } else {
          botResponse = "मैं माइरेक्स एआई हूँ। आप मुझसे सेवाओं, मूल्य निर्धारण, काम की समयसीमा या संपर्क विवरण के बारे में पूछ सकते हैं!";
        }
      }

      const botMsg: Message = {
        id: Math.random().toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles.assistantWrapper}>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={styles.chatToggleBtn}
          aria-label="Open AI Assistant"
        >
          <span className={styles.notificationPulse}></span>
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className="flex items-center gap-2">
              <div className={styles.botIconWrapper}>
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Mirex AI</h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeBtn}
              aria-label="Close Chat"
            >
              <X className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className={styles.messagesContainer}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.messageRow} ${
                  msg.sender === "user" ? styles.userRow : styles.botRow
                }`}
              >
                <div className={styles.avatar}>
                  {msg.sender === "user" ? (
                    <User className="w-3.5 h-3.5 text-violet-400" />
                  ) : (
                    <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  )}
                </div>
                <div className={styles.messageBubble}>
                  <p className="text-xs">{msg.text}</p>
                  <span className={styles.timestamp}>
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.messageRow} ${styles.botRow}`}>
                <div className={styles.avatar}>
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className={styles.inputArea}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={t("aiBot.placeholder")}
              className={styles.chatInput}
            />
            <button onClick={handleSend} className={styles.sendBtn} aria-label="Send message">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
