import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle, AlertTriangle, Calculator, BookOpen, Users, Star, ExternalLink, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8"
          >
            <Shield className="w-4 h-4" />
            TRUSTED RESOURCE FOR RESPONSIBLE GAMING
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black text-gray-900 mb-6 tracking-tight"
          >
            Play Safe. Stay in Control. <br />
            <span className="text-primary">Know Your Limits.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-gray-600 mb-12 leading-relaxed"
          >
            Empowering you with the tools, knowledge, and support to keep gambling as a form of entertainment, not a source of harm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/self-assessment" className="btn-primary flex items-center gap-2 w-full sm:w-auto text-lg">
              Take Free Self-Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/education" className="btn-outline w-full sm:w-auto text-lg">
              Explore Resources
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
            <Link to="/self-assessment" className="block h-full">
              <div className="bg-primary/10 group-hover:bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                <CheckCircle className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Risk Check</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-6">
                Understand your gambling habits with our evidence-based assessment tool.
              </p>
              <div className="flex items-center gap-2 font-bold text-primary group-hover:text-white">
                Start Assessment <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </Card>

          <Card className="group hover:bg-secondary hover:text-white transition-all duration-500 cursor-pointer">
            <Link to="/budget-tools" className="block h-full">
              <div className="bg-secondary/10 group-hover:bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                <Calculator className="w-8 h-8 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Budget Planner</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-6">
                Set realistic limits and track your spending to stay within your entertainment budget.
              </p>
              <div className="flex items-center gap-2 font-bold text-secondary group-hover:text-white">
                Plan Your Budget <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </Card>

          <Card className="group hover:bg-accent hover:text-white transition-all duration-500 cursor-pointer">
            <Link to="/warning-signs" className="block h-full">
              <div className="bg-accent/10 group-hover:bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                <AlertTriangle className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Warning Signs</h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-6">
                Learn to recognize the early behavioral and emotional indicators of problem gambling.
              </p>
              <div className="flex items-center gap-2 font-bold text-accent group-hover:text-white">
                Learn the Signs <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </Card>
        </div>
      </section>

      {/* Featured Partner Section */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase">
                <Shield className="w-5 h-5" />
                Trusted Partner
              </div>
              <h2 className="text-4xl font-heading font-black text-gray-900 leading-tight">
                Why We Recommend <br />
                <span className="text-secondary">Platinum Casino</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Platinum Casino is a fully licensed and regulated platform that prioritizes player safety. They provide industry-leading tools for setting deposit limits, session timers, and self-exclusion.
              </p>
              <ul className="space-y-4">
                {[
                  "Licensed by Curacao Gaming Authority",
                  "Advanced responsible gaming toolset",
                  "24/7 dedicated player support",
                  "Transparent RTP and fair play audits"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-positive" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 pt-4">
                <Link to="/education" className="btn-secondary">Read Case Study</Link>
                <a href="#" className="btn-outline flex items-center gap-2">
                  Visit Platinum Casino
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/5 rounded-3xl blur-2xl" />
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white font-black text-xl">P</div>
                      <div className="font-heading font-bold text-xl">Platinum Casino</div>
                    </div>
                    <div className="bg-positive/10 text-positive px-3 py-1 rounded-full text-xs font-bold">LICENSED</div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-bg-soft rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 uppercase font-bold mb-2">Responsible Play Tool</div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Monthly Deposit Limit</span>
                        <span className="text-primary font-bold">RM 500.00</span>
                      </div>
                      <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3" />
                      </div>
                    </div>
                    <div className="p-4 bg-bg-soft rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 uppercase font-bold mb-2">Session Timer</div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Active Session</span>
                        <span className="text-secondary font-mono font-bold">00:42:15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Hub Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-heading font-black mb-4">Educational Hub</h2>
            <p className="text-gray-600">Master the knowledge to stay safe and informed.</p>
          </div>
          <Link to="/education" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
            View All Resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Understanding Odds & House Edge",
              desc: "Learn why the math is always in favor of the house and how to manage expectations.",
              icon: BookOpen,
              color: "text-blue-500",
              bg: "bg-blue-50"
            },
            {
              title: "10 Signs You Need a Break",
              desc: "A comprehensive guide to identifying when gambling is no longer just for fun.",
              icon: AlertTriangle,
              color: "text-amber-500",
              bg: "bg-amber-50"
            },
            {
              title: "Myths vs. Facts",
              desc: "Debunking common misconceptions about 'due' wins and 'hot' machines.",
              icon: Star,
              color: "text-purple-500",
              bg: "bg-purple-50"
            }
          ].map((item, i) => (
            <Card key={i} className="flex flex-col h-full">
              <div className={`${item.bg} ${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{item.desc}</p>
              <Link to="/education" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Read Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-primary/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-black mb-4">Recovery & Control</h2>
            <p className="text-gray-600">Real stories from individuals who took back control of their lives.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="glass" className="p-8">
              <div className="flex gap-1 text-accent mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-accent" />)}
              </div>
              <p className="text-lg italic text-gray-700 mb-6">
                "I used to think I could win back what I lost. The budget tools here helped me realize I was chasing ghosts. Now I play for fun, once a month, with a strict limit at Platinum Casino."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-bold">David L.</div>
                  <div className="text-xs text-gray-500">Member since 2024</div>
                </div>
              </div>
            </Card>
            <Card variant="glass" className="p-8">
              <div className="flex gap-1 text-accent mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-accent" />)}
              </div>
              <p className="text-lg italic text-gray-700 mb-6">
                "The self-assessment was a wake-up call. I didn't realize how much my gambling was affecting my family. The 'For Families' section helped my wife understand how to support me."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-bold">Sarah M.</div>
                  <div className="text-xs text-gray-500">Member since 2025</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 relative z-10">
            Your Safety is Our Priority.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto relative z-10">
            Join thousands of others who are using BetSmart Portal to ensure their gambling remains safe, fun, and in control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link to="/self-assessment" className="bg-white text-primary px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all w-full sm:w-auto">
              Get Started Now
            </Link>
            <Link to="/help-directory" className="bg-alert text-white px-8 py-4 rounded-full font-black text-lg hover:bg-alert/90 transition-all w-full sm:w-auto">
              Find Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
