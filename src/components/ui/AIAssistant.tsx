import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';
import { texts } from '@/data/translationData';

export function AIAssistant() {
  const { aiBot } = texts;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: aiBot.welcome },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: "Thank you for your message! Our team will get back to you within 24 hours. Meanwhile, you can explore our services and projects.",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 p-4 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Open AI Assistant"
      >
        <Bot className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 right-4 z-40 w-80 md:w-96 glass rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="font-semibold">Mirex AI</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-accent rounded-full transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="h-64 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-cyan-500/20 text-foreground'
                        : 'bg-white/10'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-xl text-sm">
                    <span className="animate-pulse">...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={aiBot.placeholder}
                className="flex-1 bg-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}