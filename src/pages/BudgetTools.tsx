import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Calculator, Clock, TrendingDown, CheckCircle, ArrowRight, Download, Info, DollarSign, Timer, AlertCircle, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

export default function BudgetTools() {
  const [monthlyIncome, setMonthlyIncome] = React.useState<number>(0);
  const [essentialExpenses, setEssentialExpenses] = React.useState<number>(0);
  const [savingsGoal, setSavingsGoal] = React.useState<number>(0);
  
  const disposableIncome = Math.max(0, monthlyIncome - essentialExpenses - savingsGoal);
  const recommendedBudget = disposableIncome * 0.1; // 10% of disposable income as max

  const [timerActive, setTimerActive] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(3600); // 60 minutes

  React.useEffect(() => {
    let interval: any;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">Budget & Limit Tools</h1>
        <p className="text-xl text-gray-600">
          The most effective way to stay in control is to decide your limits <span className="font-bold text-primary italic">before</span> you start playing.
        </p>
      </div>

      {/* Budget Planner Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
            <Calculator className="w-4 h-4" />
            MONTHLY BUDGET PLANNER
          </div>
          <h2 className="text-3xl font-heading font-black text-gray-900 leading-tight">
            Calculate Your <br />
            <span className="text-primary">Entertainment Budget</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Gambling should only ever be done with money you can afford to lose. Use this calculator to see what a safe monthly limit looks like for your financial situation.
          </p>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Total Monthly Income (After Tax)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">RM</div>
                <input 
                  type="number" 
                  value={monthlyIncome || ''} 
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full bg-white border-2 border-gray-100 rounded-xl py-4 pl-12 pr-4 focus:border-primary focus:ring-0 transition-all font-mono font-bold text-lg"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Essential Expenses (Rent, Food, Bills)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">RM</div>
                <input 
                  type="number" 
                  value={essentialExpenses || ''} 
                  onChange={(e) => setEssentialExpenses(Number(e.target.value))}
                  className="w-full bg-white border-2 border-gray-100 rounded-xl py-4 pl-12 pr-4 focus:border-primary focus:ring-0 transition-all font-mono font-bold text-lg"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Savings & Emergency Fund Goal</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">RM</div>
                <input 
                  type="number" 
                  value={savingsGoal || ''} 
                  onChange={(e) => setSavingsGoal(Number(e.target.value))}
                  className="w-full bg-white border-2 border-gray-100 rounded-xl py-4 pl-12 pr-4 focus:border-primary focus:ring-0 transition-all font-mono font-bold text-lg"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl -z-10" />
          <Card className="p-10 border-t-8 border-primary shadow-2xl">
            <div className="space-y-10">
              <div className="flex justify-between items-center">
                <div className="text-sm font-black text-gray-400 uppercase tracking-widest">Disposable Income</div>
                <div className="text-2xl font-mono font-black text-gray-900">RM {disposableIncome.toLocaleString()}</div>
              </div>
              
              <div className="p-8 bg-primary/5 rounded-3xl border-2 border-primary/10 text-center space-y-4">
                <div className="text-xs font-black text-primary uppercase tracking-widest">Recommended Max Budget</div>
                <div className="text-5xl font-mono font-black text-primary">RM {recommendedBudget.toLocaleString()}</div>
                <p className="text-xs text-gray-500 italic">
                  *Based on 10% of your disposable income. We recommend staying below this amount.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-positive" />
                  Next Steps:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-black">1</div>
                    <span>Log in to your <strong>Platinum Casino</strong> account.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-black">2</div>
                    <span>Navigate to <strong>Responsible Gaming</strong> settings.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-black">3</div>
                    <span>Set your <strong>Monthly Deposit Limit</strong> to RM {recommendedBudget.toLocaleString()}.</span>
                  </li>
                </ul>
                <button className="btn-primary w-full flex items-center justify-center gap-2 mt-6">
                  Set Limits at Platinum Casino
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Session Timer Section */}
      <section className="bg-white rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold">
              <Clock className="w-4 h-4" />
              SESSION TIMER
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 leading-tight">
              Track Your <br />
              <span className="text-secondary">Time Spent Playing</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Time flies when you're having fun, but it's easy to lose track. Use our session timer to remind yourself when it's time to take a break.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-bg-soft rounded-2xl border border-gray-100">
                <div className="text-xs text-gray-500 uppercase font-bold mb-1">Recommended</div>
                <div className="text-lg font-bold">60 Minutes</div>
              </div>
              <div className="p-4 bg-bg-soft rounded-2xl border border-gray-100">
                <div className="text-xs text-gray-500 uppercase font-bold mb-1">Max Session</div>
                <div className="text-lg font-bold">120 Minutes</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <Card className="p-10 text-center space-y-8 border-2 border-secondary/20">
              <div className="text-sm font-black text-gray-400 uppercase tracking-widest">Current Session Timer</div>
              <div className={`text-7xl md:text-8xl font-mono font-black transition-colors duration-500 ${timeLeft < 300 ? 'text-alert animate-pulse' : 'text-secondary'}`}>
                {formatTime(timeLeft)}
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => setTimerActive(!timerActive)}
                  className={`flex-grow py-4 rounded-2xl font-black text-lg transition-all ${timerActive ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-secondary text-white hover:bg-secondary/90 shadow-lg'}`}
                >
                  {timerActive ? 'PAUSE TIMER' : 'START SESSION'}
                </button>
                <button 
                  onClick={() => { setTimerActive(false); setTimeLeft(3600); }}
                  className="p-4 bg-gray-100 text-gray-600 rounded-2xl hover:bg-gray-200 transition-all"
                >
                  <RefreshCw className="w-6 h-6" />
                </button>
              </div>

              {timeLeft < 300 && (
                <div className="flex items-center gap-2 text-alert font-bold justify-center animate-bounce">
                  <AlertCircle className="w-5 h-5" />
                  Time is almost up! Consider taking a break.
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Loss Limit Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-3xl font-heading font-black text-gray-900">Loss Limits</h2>
          <p className="text-gray-600">
            A loss limit is the maximum amount you are willing to lose in a single session. Once you hit this limit, you <span className="font-bold underline">must stop</span> playing.
          </p>
          <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
            <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              The Golden Rule
            </h4>
            <p className="text-sm text-gray-700">Never chase your losses. If you lose your session budget, walk away. Trying to "win it back" is the #1 cause of problem gambling.</p>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Card className="p-8 space-y-6 border-t-4 border-accent">
            <div className="bg-accent/10 text-accent w-12 h-12 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Session Loss Limit</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Set a limit for each time you play. We recommend no more than 20% of your monthly entertainment budget per session.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <div className="text-xs text-gray-400 uppercase font-bold mb-2">Example Calculation</div>
              <div className="text-lg font-bold text-gray-900">RM 500 Budget ÷ 5 Sessions = RM 100 Limit</div>
            </div>
          </Card>

          <Card className="p-8 space-y-6 border-t-4 border-positive">
            <div className="bg-positive/10 text-positive w-12 h-12 rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Loss Tracker Worksheet</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Download our printable worksheet to manually track your wins and losses. Seeing the numbers on paper can provide a powerful reality check.
            </p>
            <button className="btn-outline w-full flex items-center justify-center gap-2">
              Download PDF
              <Download className="w-4 h-4" />
            </button>
          </Card>
        </div>
      </section>

      {/* Platinum Casino Integration */}
      <section className="bg-bg-soft rounded-[3rem] p-12 border border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase">
            <Shield className="w-5 h-5" />
            PLATINUM CASINO TOOLS
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900">
            How to Set Limits at Platinum Casino
          </h2>
          <p className="text-lg text-gray-600">
            Platinum Casino makes it easy to implement the limits you've calculated today. Follow these simple steps to secure your account.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                step: "01",
                title: "Deposit Limits",
                desc: "Set daily, weekly, or monthly caps on how much you can deposit into your account."
              },
              {
                step: "02",
                title: "Reality Checks",
                desc: "Enable pop-up notifications that appear every 30, 60, or 90 minutes to track your time."
              },
              {
                step: "03",
                title: "Self-Exclusion",
                desc: "Take a break for 24 hours, 7 days, or permanently if you feel you're losing control."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="text-4xl font-black text-gray-200">{item.step}</div>
                <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <a href="#" className="btn-secondary inline-flex items-center gap-2">
              Go to Platinum Casino Responsible Gaming
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function RefreshCw(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}
