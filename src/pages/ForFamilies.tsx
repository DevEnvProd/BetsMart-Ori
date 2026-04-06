import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, MessageSquare, AlertCircle, CheckCircle, ArrowRight, Info, Wallet, HelpCircle, PhoneCall } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const conversationStarters = [
  {
    title: "The Direct Approach",
    text: "\"I've noticed you're spending more time gambling lately, and I'm concerned about how it's affecting you. Can we talk about it?\""
  },
  {
    title: "The Financial Approach",
    text: "\"I've noticed some unusual activity in our bank account. I'm worried about our finances. Is there something going on with gambling?\""
  },
  {
    title: "The Emotional Approach",
    text: "\"You've seemed more stressed and irritable lately, and I've noticed you're gambling more. I care about you and want to help.\""
  }
];

export default function ForFamilies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tight">For Family & Friends</h1>
        <p className="text-xl text-gray-600">
          When someone you love has a gambling problem, it affects you too. We provide the tools and support you need to help them while protecting yourself.
        </p>
      </div>

      {/* Hero Section for Families */}
      <section className="bg-white rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-500 px-4 py-2 rounded-full text-sm font-bold">
              <Heart className="w-4 h-4" />
              SUPPORTING LOVED ONES
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 leading-tight">
              You Don't Have to <br />
              <span className="text-pink-500">Face This Alone</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Supporting someone with a gambling problem is challenging. It's important to remember that you are not responsible for their gambling, but you can be a part of their recovery.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-positive shrink-0 mt-1" />
                <p><strong>Protect your finances:</strong> Ensure your own financial security first.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-positive shrink-0 mt-1" />
                <p><strong>Set boundaries:</strong> Be clear about what behavior you will and will not accept.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-positive shrink-0 mt-1" />
                <p><strong>Seek support:</strong> Join a family support group to connect with others in similar situations.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <Card className="p-10 border-2 border-pink-500/20 space-y-8">
              <h3 className="text-xl font-bold text-center">Conversation Starters</h3>
              <div className="space-y-4">
                {conversationStarters.map((starter, i) => (
                  <div key={i} className="p-5 bg-bg-soft rounded-2xl border border-gray-100 space-y-2 group hover:bg-white hover:shadow-md transition-all">
                    <div className="text-xs font-black text-pink-500 uppercase tracking-widest">{starter.title}</div>
                    <p className="italic text-gray-700 text-sm leading-relaxed">{starter.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center italic">
                *Choose a time when you are both calm and have enough time to talk.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Protection Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-3xl font-heading font-black text-gray-900">Financial Protection</h2>
          <p className="text-gray-600">
            Protecting your family's finances is a priority. Here are some practical steps you can take to secure your assets.
          </p>
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Secure Your Future
            </h4>
            <p className="text-sm text-gray-700">Taking control of the finances is not an act of distrust, but an act of protection for the whole family.</p>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Card className="p-8 space-y-6 border-t-4 border-primary">
            <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Manage the Money</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Consider taking over the management of family finances. Set up separate bank accounts and ensure you have control over important documents.
            </p>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>• Change passwords on shared accounts</li>
              <li>• Monitor bank statements regularly</li>
              <li>• Set up alerts for large transactions</li>
            </ul>
          </Card>

          <Card className="p-8 space-y-6 border-t-4 border-secondary">
            <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Legal Protection</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              If the gambling is severe, you may need to seek legal advice to protect your home or other assets from being used to pay gambling debts.
            </p>
            <button className="btn-outline w-full flex items-center justify-center gap-2">
              Find Legal Resources
              <ArrowRight className="w-4 h-4" />
            </button>
          </Card>
        </div>
      </section>

      {/* Supporting Without Enabling */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-heading font-black text-gray-900">Supporting Without Enabling</h2>
          <p className="text-gray-600">It's important to support your loved one's recovery without making it easier for them to continue gambling.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4 bg-positive/5 border-2 border-positive/20">
            <h4 className="font-bold text-positive flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              What to Do
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• Encourage them to seek professional help.</li>
              <li>• Acknowledge their effort to stop gambling.</li>
              <li>• Focus on the impact their gambling has on you.</li>
              <li>• Spend time together on non-gambling activities.</li>
              <li>• Be patient and understanding, but firm on boundaries.</li>
            </ul>
          </Card>
          <Card className="p-8 space-y-4 bg-alert/5 border-2 border-alert/20">
            <h4 className="font-bold text-alert flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              What to Avoid
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• Don't pay off their gambling debts.</li>
              <li>• Don't lend them money for any reason.</li>
              <li>• Don't lie or cover up for their gambling.</li>
              <li>• Don't argue or lecture them while they are gambling.</li>
              <li>• Don't blame yourself for their gambling problem.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Family Support Groups */}
      <section className="bg-bg-soft rounded-[3rem] p-12 md:p-20 border border-gray-200">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-heading font-black text-gray-900">Family Support Groups</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Connecting with others who are going through similar experiences can be incredibly helpful. Support groups provide a safe space to share and learn.
            </p>
            <div className="space-y-4">
              {[
                { name: "Gam-Anon Malaysia", desc: "A 12-step program for the family and friends of compulsive gamblers." },
                { name: "Family Support Network", desc: "A community-based support group for families affected by addiction." }
              ].map((group, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-gray-100 space-y-2">
                  <div className="font-bold text-gray-900">{group.name}</div>
                  <p className="text-sm text-gray-600">{group.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <Card className="p-10 bg-white border-2 border-gray-100 space-y-6 text-center">
              <div className="w-16 h-16 bg-pink-500/10 text-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Join a Meeting</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Most support groups offer both in-person and online meetings. Find a meeting that works for you and take the first step toward healing.
              </p>
              <Link to="/help-directory" className="btn-primary w-full flex items-center justify-center gap-2">
                Find a Meeting Near You
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Platinum Casino Support Section */}
      <section className="bg-secondary rounded-[3rem] p-12 text-white text-center space-y-8 shadow-xl">
        <h3 className="text-2xl md:text-3xl font-heading font-black">Platinum Casino Support for Families</h3>
        <p className="text-white/80 max-w-2xl mx-auto">
          Platinum Casino provides information and tools for families to help their loved ones play safely. They also offer a dedicated support line for family concerns.
        </p>
        <div className="flex justify-center">
          <a href="#" className="bg-white text-secondary px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all flex items-center gap-2">
            Visit Platinum Casino Family Support
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
