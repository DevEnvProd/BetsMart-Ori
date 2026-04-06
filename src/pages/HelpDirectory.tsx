import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, MapPin, Globe, Shield, ArrowRight, Search, Info, ExternalLink, Users, Heart, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const helpResources = [
  {
    category: "24/7 Helplines",
    icon: PhoneCall,
    color: "text-alert",
    bg: "bg-alert/10",
    items: [
      { name: "Malaysia Gambling Helpline", contact: "1-800-88-1234", desc: "Confidential 24/7 support for anyone affected by gambling harm." },
      { name: "Befrienders KL", contact: "03-7627 2929", desc: "Emotional support for people in distress or at risk of suicide." },
      { name: "Talian Kasih", contact: "15999", desc: "Ministry of Women, Family and Community Development helpline." }
    ]
  },
  {
    category: "Counseling Centers",
    icon: MapPin,
    color: "text-primary",
    bg: "bg-primary/10",
    items: [
      { name: "Gamblers Anonymous KL", contact: "Kuala Lumpur", desc: "Peer support group meetings for those struggling with addiction." },
      { name: "Malaysian Mental Health Association", contact: "Petaling Jaya", desc: "Professional counseling and psychiatric services." },
      { name: "Solace Asia", contact: "Sabah", desc: "Specialized addiction treatment and rehabilitation center." }
    ]
  },
  {
    category: "Online Support",
    icon: Globe,
    color: "text-secondary",
    bg: "bg-secondary/10",
    items: [
      { name: "Gambling Therapy", contact: "Online Chat", desc: "Global online support service providing advice and emotional support." },
      { name: "GamTalk", contact: "Community Forum", desc: "A safe place to share experiences and find support from others." },
      { name: "GamCare Chat", contact: "Live Chat", desc: "Expert advice and support via secure online messaging." }
    ]
  }
];

export default function HelpDirectory() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tight">Help Directory</h1>
        <p className="text-xl text-gray-600">
          You are not alone. There are professional services and support communities across Malaysia ready to help you regain control.
        </p>
      </div>

      {/* Search & Filter Mock */}
      <section className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by state or service type..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:border-primary focus:ring-0 transition-all font-bold text-lg shadow-sm"
          />
        </div>
      </section>

      {/* Help Categories Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {helpResources.map((category, i) => (
          <div key={i} className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className={`${category.bg} ${category.color} p-3 rounded-xl`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900">{category.category}</h3>
            </div>
            
            <div className="space-y-4">
              {category.items.map((item, j) => (
                <Card key={j} className="p-6 hover:border-primary/30 transition-all group">
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{item.name}</h4>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">{item.contact}</div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <button className="text-primary font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all">
                    Contact Service <ArrowRight className="w-4 h-4" />
                  </button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Self-Exclusion Section */}
      <section className="bg-white rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold">
              <Shield className="w-4 h-4" />
              SELF-EXCLUSION PROGRAMS
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 leading-tight">
              Taking a <br />
              <span className="text-secondary">Permanent Break</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Self-exclusion is a formal process where you request a gambling provider to prevent you from using their services for a specific period.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-bg-soft rounded-2xl border border-gray-100 flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-positive shrink-0" />
                <p className="text-sm font-bold text-gray-700">Platinum Casino Self-Exclusion Program</p>
              </div>
              <div className="p-4 bg-bg-soft rounded-2xl border border-gray-100 flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-positive shrink-0" />
                <p className="text-sm font-bold text-gray-700">National Self-Exclusion Registry (Mock)</p>
              </div>
            </div>
            <button className="btn-secondary flex items-center gap-2">
              Learn How to Self-Exclude
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:w-1/2 w-full">
            <Card className="p-10 border-2 border-secondary/20 space-y-6">
              <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              <ul className="space-y-6">
                {[
                  { title: "Registration", desc: "You provide your details and choose the exclusion period (6 months to permanent)." },
                  { title: "Verification", desc: "The provider verifies your identity and locks your account across all platforms." },
                  { title: "Enforcement", desc: "Marketing materials are stopped, and any attempt to log in will be blocked." }
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-secondary text-white rounded-lg flex items-center justify-center font-black shrink-0">{i + 1}</div>
                    <div>
                      <div className="font-bold text-gray-900">{step.title}</div>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Support for Loved Ones CTA */}
      <section className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
          <Heart className="w-5 h-5" />
          FOR FAMILY & FRIENDS
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900">
          Supporting Someone Else?
        </h2>
        <p className="text-lg text-gray-600">
          If you are concerned about a friend or family member's gambling, we have dedicated resources to help you support them while protecting yourself.
        </p>
        <Link to="/for-families" className="btn-outline inline-flex items-center gap-2">
          View Family Resources
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Emergency Section */}
      <section className="bg-alert/5 rounded-[3rem] p-12 md:p-20 border border-alert/10 text-center space-y-8">
        <div className="w-20 h-20 bg-alert text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-alert/20">
          <AlertCircle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-heading font-black text-gray-900">In an Emergency</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          If you or someone you know is in immediate danger of self-harm or is experiencing a severe mental health crisis, please contact emergency services immediately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:999" className="bg-alert text-white px-12 py-4 rounded-full font-black text-xl hover:bg-alert/90 transition-all shadow-xl">
            CALL 999
          </a>
          <a href="tel:1800881234" className="bg-white text-alert border-2 border-alert px-12 py-4 rounded-full font-black text-xl hover:bg-alert/5 transition-all">
            HELPLINE: 1-800-88-1234
          </a>
        </div>
      </section>
    </div>
  );
}
