import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Self-Assessment', path: '/self-assessment' },
  { name: 'Budget Tools', path: '/budget-tools' },
  { name: 'Warning Signs', path: '/warning-signs' },
  { name: 'Education', path: '/education' },
  { name: 'Help Directory', path: '/help-directory' },
  { name: 'For Families', path: '/for-families' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-primary leading-none">BETSMART</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">Portal</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Link
                to="/help-directory"
                className="flex items-center gap-2 bg-alert text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-alert/90 transition-colors shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                GET HELP NOW
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/help-directory"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-alert text-white px-4 py-3 rounded-lg text-base font-bold w-full shadow-md"
                >
                  <PhoneCall className="w-5 h-5" />
                  GET HELP NOW
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
