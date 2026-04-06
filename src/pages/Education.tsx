import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, AlertTriangle, CheckCircle, ArrowRight, Info, PlayCircle, HelpCircle, ChevronDown, ChevronUp, Shield, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const myths = [
  {
    myth: "If I keep gambling, I'm bound to win eventually.",
    fact: "Each bet is an independent event. Past losses do not increase your chances of a future win. The odds remain the same every time you play."
  },
  {
    myth: "I have a 'system' that helps me beat the house.",
    fact: "No system can overcome the mathematical house edge in the long run. Games of chance are designed to favor the casino over time."
  },
  {
    myth: "The machine is 'due' for a big payout because it hasn't hit in a while.",
    fact: "Modern slot machines use Random Number Generators (RNGs). They have no memory of previous spins and are never 'due' for a win."
  },
  {
    myth: "Gambling is a good way to make extra money.",
    fact: "Gambling should be viewed as a cost of entertainment, like a movie ticket. It is not a reliable source of income and most people lose money in the long run."
  }
];

export default function Education() {
  const [openMyth, setOpenMyth] = React.useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tight">Education Hub</h1>
        <p className="text-xl text-gray-600">
          Knowledge is your best defense. Master the mechanics of gambling to stay safe and informed.
        </p>
      </div>

      {/* Core Principles */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Entertainment Only",
            desc: "Never view gambling as a way to make money. It's a paid form of entertainment.",
            icon: PlayCircle,
            color: "text-blue-500",
            bg: "bg-blue-50"
          },
          {
            title: "Set Limits First",
            desc: "Decide your time and money limits before you start playing, not during.",
            icon: Shield,
            color: "text-primary",
            bg: "bg-primary/10"
          },
          {
            title: "Never Chase Losses",
            desc: "Accept your losses as the cost of entertainment. Trying to win them back leads to harm.",
            icon: AlertTriangle,
            color: "text-amber-500",
            bg: "bg-amber-50"
          },
          {
            title: "Balance Your Life",
            desc: "Gambling should only be one of many leisure activities in your life.",
            icon: Star,
            color: "text-purple-500",
            bg: "bg-purple-50"
          }
        ].map((item, i) => (
          <Card key={i} className="text-center p-8 space-y-6 border-b-4 border-transparent hover:border-primary transition-all">
            <div className={`${item.bg} ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </section>

      {/* Deep Dive: House Edge */}
      <section className="bg-white rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
              <Info className="w-4 h-4" />
              UNDERSTANDING THE MATH
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 leading-tight">
              What is the <br />
              <span className="text-primary">House Edge?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The house edge is the mathematical advantage that the gambling game, and therefore the casino, has over you as you play over time.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-positive shrink-0 mt-1" />
                <p><strong>It's built-in:</strong> The edge is part of the game's design and rules.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-positive shrink-0 mt-1" />
                <p><strong>It's long-term:</strong> While you might win in the short term, the house always wins over thousands of plays.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-positive shrink-0 mt-1" />
                <p><strong>It varies:</strong> Different games have different edges. For example, Blackjack (0.5%) vs. Keno (25%).</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <Card className="p-10 bg-bg-soft border-2 border-gray-100 space-y-8">
              <h3 className="text-xl font-bold text-center">Typical House Edge Examples</h3>
              <div className="space-y-6">
                {[
                  { name: "Slot Machines", edge: "5% - 15%", color: "bg-amber-500" },
                  { name: "American Roulette", edge: "5.26%", color: "bg-blue-500" },
                  { name: "Baccarat (Banker)", edge: "1.06%", color: "bg-primary" },
                  { name: "Blackjack (Basic Strategy)", edge: "0.5%", color: "bg-positive" }
                ].map((game, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span>{game.name}</span>
                      <span className="text-gray-500">{game.edge}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: game.edge }}
                        viewport={{ once: true }}
                        className={`h-full ${game.color}`}
                        style={{ width: game.edge }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center italic">
                *Platinum Casino provides transparent RTP (Return to Player) data for all games.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-heading font-black text-gray-900">Myths vs. Facts</h2>
          <p className="text-gray-600">Don't let common misconceptions cloud your judgment.</p>
        </div>

        <div className="space-y-4">
          {myths.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button 
                onClick={() => setOpenMyth(openMyth === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-alert/10 text-alert p-2 rounded-lg">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-gray-900">{item.myth}</span>
                </div>
                {openMyth === i ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              <AnimatePresence>
                {openMyth === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-gray-50 bg-positive/5"
                  >
                    <div className="p-6 flex items-start gap-4">
                      <div className="bg-positive/10 text-positive p-2 rounded-lg shrink-0">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-positive">Fact:</strong> {item.fact}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section Mock */}
      <section className="bg-bg-soft rounded-[3rem] p-12 md:p-20 border border-gray-200">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-heading font-black text-gray-900">Watch & Learn</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our video series breaks down complex gambling concepts into easy-to-understand visual guides.
            </p>
            <div className="space-y-4">
              {[
                "How Random Number Generators Work",
                "The Psychology of the 'Near Miss'",
                "Setting Up Your First Budget"
              ].map((video, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-primary transition-all group">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="w-5 h-5 text-primary" />
                    <span className="font-bold text-gray-800">{video}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-video bg-gray-900 rounded-[2rem] flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-transform relative z-10">
              <PlayCircle className="w-10 h-10" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <div className="text-xs font-black uppercase tracking-widest mb-2 text-white/60">Featured Video</div>
              <div className="text-xl font-bold">Understanding RTP: Examples from Platinum Casino</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-heading font-black text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: "Can I win money in the long run?",
              a: "Mathematically, no. The house edge ensures the casino wins over time. Gambling should be seen as a cost, not an investment."
            },
            {
              q: "Is online gambling safe?",
              a: "Only if you use licensed and regulated platforms like Platinum Casino. Unlicensed sites offer no protection for your funds or data."
            },
            {
              q: "What is RTP?",
              a: "Return to Player (RTP) is the percentage of all wagered money a game will pay back to players over time."
            },
            {
              q: "How do I know if I'm addicted?",
              a: "Take our self-assessment. If gambling is causing stress, financial problems, or relationship issues, it's a sign of addiction."
            }
          ].map((faq, i) => (
            <div key={i} className="space-y-3">
              <h4 className="font-bold text-gray-900 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {faq.q}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platinum Casino Integration */}
      <section className="bg-primary rounded-[3rem] p-12 text-white text-center space-y-8 shadow-xl">
        <h3 className="text-2xl md:text-3xl font-heading font-black">Learn More at Platinum Casino</h3>
        <p className="text-white/80 max-w-2xl mx-auto">
          Platinum Casino provides detailed educational resources for all their games, including specific RTP data and game mechanics.
        </p>
        <div className="flex justify-center">
          <a href="#" className="bg-white text-primary px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all flex items-center gap-2">
            Visit Platinum Casino Education Center
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
