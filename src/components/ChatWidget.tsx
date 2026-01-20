import { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-xl w-[350px] h-[450px] border border-gray-200 overflow-hidden flex flex-col origin-bottom-right"
          >
            {/* Chat Header */}
            <div className="bg-[#128c88] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">AI Agent</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
              <div className="flex flex-col gap-3">
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm self-start max-w-[85%] border border-gray-100">
                  <p className="text-sm text-gray-700">Hello! I'm your AI assistant. How can I help you search for entities today?</p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-white border-t flex gap-2">
              <Input 
                placeholder="Ask me anything..." 
                className="flex-1 focus-visible:ring-[#128c88] focus-visible:ring-offset-0"
              />
              <Button size="icon" className="bg-[#128c88] hover:bg-[#0f7773] shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#128c88] text-white w-14 h-14 rounded-full shadow-[0_4px_14px_0_rgba(0,133,124,0.39)] hover:bg-[#0f7773] transition-colors flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Bot className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
