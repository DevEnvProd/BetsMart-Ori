import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, ArrowRight, RefreshCw, Save, Mail, Info, ChevronRight, ChevronLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const pgsiQuestions = [
  {
    id: 1,
    text: "Have you bet more than you could really afford to lose?",
  },
  {
    id: 2,
    text: "Have you needed to gamble with larger amounts of money to get the same feeling of excitement?",
  },
  {
    id: 3,
    text: "When you gambled, did you go back another day to try to win back the money you lost?",
  },
  {
    id: 4,
    text: "Have you borrowed money or sold anything to get money to gamble?",
  },
  {
    id: 5,
    text: "Have you felt that you might have a problem with gambling?",
  },
  {
    id: 6,
    text: "Has gambling caused you any health problems, including stress or anxiety?",
  },
  {
    id: 7,
    text: "Have people criticized your betting or told you that you had a gambling problem, regardless of whether or not you thought it was true?",
  },
  {
    id: 8,
    text: "Has your gambling caused any financial problems for you or your household?",
  },
  {
    id: 9,
    text: "Have you felt guilty about the way you gamble or what happens when you gamble?",
  }
];

const options = [
  { label: "Never", value: 0 },
  { label: "Sometimes", value: 1 },
  { label: "Most of the time", value: 2 },
  { label: "Almost always", value: 3 }
];

export default function SelfAssessment() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = React.useState(false);

  const totalScore = (Object.values(answers) as number[]).reduce((acc: number, curr: number) => acc + curr, 0);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (currentStep < pgsiQuestions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setIsFinished(true), 300);
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  const getResult = (score: number) => {
    if (score === 0) return {
      level: "Non-problem Gambling",
      color: "text-positive",
      bg: "bg-positive/10",
      desc: "Your gambling habits appear to be under control. You gamble for entertainment and it doesn't negatively impact your life.",
      advice: "Keep practicing responsible habits. Set limits even when things are going well."
    };
    if (score >= 1 && score <= 2) return {
      level: "Low Risk",
      color: "text-secondary",
      bg: "bg-secondary/10",
      desc: "You have a low level of problems with few or no identified negative consequences.",
      advice: "Be mindful of your habits. It's a good time to set firm limits at Platinum Casino to ensure you stay in this category."
    };
    if (score >= 3 && score <= 7) return {
      level: "Moderate Risk",
      color: "text-accent",
      bg: "bg-accent/10",
      desc: "You are experiencing a moderate level of problems leading to some negative consequences.",
      advice: "We recommend taking a break. Consider using the self-exclusion tools at Platinum Casino for a few weeks to reset."
    };
    return {
      level: "High Risk / Problem Gambling",
      color: "text-alert",
      bg: "bg-alert/10",
      desc: "Your gambling habits are causing significant negative consequences and a possible loss of control.",
      advice: "Please seek professional help immediately. Call our 24/7 helpline at 1-800-88-1234. We strongly recommend permanent self-exclusion."
    };
  };

  const result = getResult(totalScore);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-black mb-4">Self-Assessment Center</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take our evidence-based Problem Gambling Severity Index (PGSI) assessment to understand your relationship with gambling.
        </p>
      </div>

      {!isFinished ? (
        <Card className="p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-2 bg-primary transition-all duration-500" style={{ width: `${((currentStep + 1) / pgsiQuestions.length) * 100}%` }} />
          
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Question {currentStep + 1} of {pgsiQuestions.length}</span>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentStep(Math.min(pgsiQuestions.length - 1, currentStep + 1))}
                disabled={answers[pgsiQuestions[currentStep].id] === undefined}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 leading-tight">
                {pgsiQuestions[currentStep].text}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(pgsiQuestions[currentStep].id, option.value)}
                    className={`
                      p-6 rounded-2xl text-left font-bold transition-all duration-200 border-2
                      ${answers[pgsiQuestions[currentStep].id] === option.value 
                        ? 'bg-primary border-primary text-white shadow-lg scale-[1.02]' 
                        : 'bg-white border-gray-100 text-gray-700 hover:border-primary/30 hover:bg-primary/5'}
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Card>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-8"
        >
          <Card className="p-8 md:p-12 text-center border-t-8 border-primary">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${result.bg} ${result.color} mb-6`}>
              {totalScore === 0 ? <CheckCircle className="w-10 h-10" /> : <AlertTriangle className="w-10 h-10" />}
            </div>
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Your Assessment Result</h2>
            <div className={`text-4xl md:text-5xl font-heading font-black mb-6 ${result.color}`}>
              {result.level}
            </div>
            <div className="bg-bg-soft p-6 rounded-2xl mb-8">
              <div className="text-3xl font-mono font-black text-gray-900 mb-1">{totalScore}</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Total PGSI Score</div>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              {result.desc}
            </p>
            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 mb-12 text-left">
              <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Recommended Next Steps:
              </h3>
              <p className="text-gray-700">{result.advice}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={resetAssessment} className="btn-outline flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Retake Assessment
              </button>
              <Link to="/help-directory" className="btn-primary flex items-center justify-center gap-2">
                Get Professional Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-secondary text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Safe Play at Platinum Casino
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Regardless of your score, setting limits is the best way to ensure gambling remains entertainment. Platinum Casino offers easy-to-use tools for all players.
              </p>
              <Link to="/budget-tools" className="inline-flex items-center gap-2 font-bold hover:underline">
                Learn how to set limits <ChevronRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card className="bg-white border-2 border-gray-100">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <Save className="w-6 h-6 text-primary" />
                Save Your Results
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Keep a record of your assessment to track your progress over time. You can download a PDF or email the results to yourself.
              </p>
              <div className="flex gap-3">
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Save className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Mail className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </Card>
          </div>
        </motion.div>
      )}

      {/* Educational Context */}
      <section className="mt-24 space-y-12">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-2xl font-heading font-bold mb-4">About the PGSI</h2>
          <p className="text-gray-600 leading-relaxed">
            The Problem Gambling Severity Index (PGSI) is the gold standard for measuring gambling risk in the general population. It was developed as part of the Canadian Problem Gambling Index and is used worldwide by researchers and clinicians to identify individuals at risk of developing gambling-related problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-primary font-black text-3xl">0</div>
            <h4 className="font-bold">Non-problem</h4>
            <p className="text-sm text-gray-500">Gambling is for entertainment only with no negative consequences.</p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary font-black text-3xl">1-7</div>
            <h4 className="font-bold">Low to Moderate Risk</h4>
            <p className="text-sm text-gray-500">Some negative consequences may be occurring. Action is recommended.</p>
          </div>
          <div className="space-y-4">
            <div className="text-alert font-black text-3xl">8+</div>
            <h4 className="font-bold">Problem Gambling</h4>
            <p className="text-sm text-gray-500">Significant harm is occurring. Professional intervention is strongly advised.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
