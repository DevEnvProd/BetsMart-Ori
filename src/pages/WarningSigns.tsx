import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Users, Heart, Brain, Wallet, CheckCircle, ArrowRight, Info, Search, HelpCircle, PhoneCall } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const warningCategories = [
  {
    title: "Behavioral Signs",
    icon: Brain,
    color: "text-blue-500",
    bg: "bg-blue-50",
    signs: [
      "Spending more time gambling than intended",
      "Gamble until all money is gone",
      "Neglecting responsibilities (work, school, home)",
      "Gambling to escape problems or boredom",
      "Lying about gambling habits or losses",
      "Unsuccessful attempts to stop or cut back"
    ]
  },
  {
    title: "Emotional Signs",
    icon: Heart,
    color: "text-pink-500",
    bg: "bg-pink-50",
    signs: [
      "Feeling restless or irritable when not gambling",
      "Mood swings based on winning or losing",
      "Guilt or shame after a gambling session",
      "Anxiety or depression related to gambling",
      "Feeling 'high' or euphoric while gambling",
      "Using gambling as a way to cope with stress"
    ]
  },
  {
    title: "Financial Signs",
    icon: Wallet,
    color: "text-amber-500",
    bg: "bg-amber-50",
    signs: [
      "Borrowing money to gamble or pay debts",
      "Selling personal belongings for gambling money",
      "Unexplained lack of money for essentials",
      "Secretive about bank accounts or finances",
      "Chasing losses (gambling more to win back)",
      "Maxing out credit cards or taking loans"
    ]
  },
  {
    title: "Relationship Signs",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-50",
    signs: [
      "Arguments with family about gambling",
      "Missing important family events or milestones",
      "Withdrawing from friends and social activities",
      "Losing trust with loved ones due to lies",
      "Prioritizing gambling over time with family",
      "Hiding gambling activities from partners"
    ]
  }
];

export default function WarningSigns() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">Warning Signs Library</h1>
        <p className="text-xl text-gray-600">
          Problem gambling often starts slowly. Recognizing the early signs in yourself or a loved one is the first step toward regaining control.
        </p>
      </div>

      {/* Warning Categories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {warningCategories.map((category, i) => (
          <Card key={i} className="p-8 border-t-4 border-gray-100 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className={`${category.bg} ${category.color} p-4 rounded-2xl`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">{category.title}</h3>
            </div>
            <ul className="space-y-4">
              {category.signs.map((sign, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                  <span className="text-sm leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      {/* Self-Reflection Section */}
      <section className="bg-white rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
              <Search className="w-4 h-4" />
              SELF-REFLECTION
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 leading-tight">
              Ask Yourself <br />
              <span className="text-primary">The Tough Questions</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you're unsure if your gambling is becoming a problem, take a moment to reflect on these questions. Honest answers can provide clarity.
            </p>
            <Link to="/self-assessment" className="btn-primary inline-flex items-center gap-2">
              Take Full Self-Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:w-1/2 w-full space-y-4">
            {[
              "Do I ever lie about how much I've lost?",
              "Do I gamble to escape stress or anxiety?",
              "Have I ever borrowed money to place a bet?",
              "Do I feel guilty after a gambling session?",
              "Is gambling affecting my work or relationships?"
            ].map((q, i) => (
              <div key={i} className="p-5 bg-bg-soft rounded-2xl border border-gray-100 flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <p className="font-medium text-gray-800">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-heading font-black text-gray-900">When to Seek Professional Help</h2>
          <p className="text-gray-600">If you experience any of the following, it's time to reach out for support.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Thoughts of self-harm or suicide",
            "Inability to pay for basic needs (rent, food)",
            "Engaging in illegal acts to fund gambling",
            "Severe depression or constant anxiety",
            "Total breakdown of family relationships",
            "Complete loss of control over betting"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-alert/5 rounded-2xl border border-alert/10">
              <AlertTriangle className="w-6 h-6 text-alert shrink-0" />
              <span className="font-bold text-gray-900 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-alert rounded-3xl p-8 md:p-12 text-white text-center space-y-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-heading font-black">Don't wait for things to get worse.</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our support teams are available 24/7 to listen and provide guidance. Your call is confidential and non-judgmental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1800881234" className="bg-white text-alert px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" />
              1-800-88-1234
            </a>
            <Link to="/help-directory" className="bg-white/20 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-white/30 transition-all flex items-center justify-center gap-2">
              Find Local Support
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Context */}
      <section className="bg-bg-soft rounded-[3rem] p-12 border border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
            <Info className="w-5 h-5" />
            Understanding the Progression
          </div>
          <h2 className="text-3xl font-heading font-black text-gray-900">The Three Phases of Problem Gambling</h2>
          <div className="space-y-12 mt-12">
            {[
              {
                phase: "The Winning Phase",
                desc: "Gambling is exciting. You might have a big win early on, leading to the belief that you have a special talent or 'system'. You start gambling more frequently and for higher stakes."
              },
              {
                phase: "The Losing Phase",
                desc: "Wins become less frequent. You start chasing losses, gambling alone, and lying to family. You may begin to borrow money or neglect work and personal responsibilities."
              },
              {
                phase: "The Desperation Phase",
                desc: "You feel hopeless and out of control. Financial problems are severe. You may experience depression, panic, and thoughts of self-harm. Gambling is no longer for fun; it's a desperate attempt to survive."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8">
                <div className="text-6xl font-black text-gray-200 shrink-0">{i + 1}</div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900">{item.phase}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
