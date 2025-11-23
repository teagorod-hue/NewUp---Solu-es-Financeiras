import React, { useEffect, useState } from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);

  // Close tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip hint */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white text-navy-900 text-sm font-bold px-4 py-3 rounded-xl shadow-xl relative mr-2 max-w-[200px]"
              >
                <button 
                  onClick={(e) => { e.preventDefault(); setShowTooltip(false); }}
                  className="absolute -top-2 -right-2 bg-slate-200 rounded-full p-0.5 text-slate-600 hover:bg-red-100 hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
                <p>Tem dúvidas? Fale com nosso especialista agora!</p>
                {/* Arrow */}
                <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white transform rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
            onMouseEnter={() => setShowTooltip(true)}
          >
            {/* Ping animation ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>
            
            <div className="relative flex items-center justify-center w-14 h-14 md:w-auto md:h-14 md:px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all transform hover:scale-105 hover:-translate-y-1">
               <MessageCircle className="w-7 h-7 md:mr-3" />
               <span className="hidden md:inline text-lg font-bold">WhatsApp</span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;