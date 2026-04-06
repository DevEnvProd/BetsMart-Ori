import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Heart, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-primary leading-none tracking-tight">BETSMART</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">Portal</span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              BetSmart Portal is a non-profit educational resource dedicated to promoting responsible gambling and providing support for those affected by gambling-related harm.
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
              <Heart className="w-4 h-4 fill-primary" />
              <span>Play safe. Stay in control.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/self-assessment" className="text-gray-600 hover:text-primary text-sm transition-colors">Self-Assessment Tool</Link></li>
              <li><Link to="/budget-tools" className="text-gray-600 hover:text-primary text-sm transition-colors">Budget Planner</Link></li>
              <li><Link to="/warning-signs" className="text-gray-600 hover:text-primary text-sm transition-colors">Signs of Harm</Link></li>
              <li><Link to="/education" className="text-gray-600 hover:text-primary text-sm transition-colors">Educational Hub</Link></li>
              <li><Link to="/help-directory" className="text-gray-600 hover:text-primary text-sm transition-colors">Support Directory</Link></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="font-heading font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Get Support</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>24/7 Helpline: <br/><strong className="text-gray-900">1-800-88-1234</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Email Support: <br/><strong className="text-gray-900">help@betsmart.org</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Kuala Lumpur, Malaysia</span>
              </li>
            </ul>
          </div>

          {/* Partner Section */}
          <div className="bg-bg-soft p-6 rounded-2xl border border-gray-100">
            <h3 className="font-heading font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Licensed Partner</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-secondary font-bold">
                <CheckCircle className="w-5 h-5" />
                <span>Platinum Casino</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                We recommend Platinum Casino as a licensed and regulated choice for safe entertainment.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                Visit Responsible Gaming Page
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} BetSmart Portal. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/about" className="text-gray-500 hover:text-primary text-xs">Privacy Policy</Link>
            <Link to="/about" className="text-gray-500 hover:text-primary text-xs">Terms of Use</Link>
            <Link to="/about" className="text-gray-500 hover:text-primary text-xs">Editorial Standards</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
