import React from 'react';
import { PhoneCall, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="bg-alert text-white py-3 px-4 relative z-[60] shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-1.5 rounded-full shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold leading-tight">
                Feeling out of control? Help is available 24/7. Call the Malaysia Gambling Helpline: <br className="sm:hidden" />
                <span className="underline underline-offset-4 decoration-2">1-800-88-1234</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:1800881234" 
                className="hidden md:flex items-center gap-2 bg-white text-alert px-4 py-1.5 rounded-full text-xs font-black hover:bg-white/90 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                CALL NOW
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
