import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Users, CheckCircle, ArrowRight, Mail, MapPin, Phone, ExternalLink, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tight">About Us</h1>
        <p className="text-xl text-gray-600">
          BetSmart Portal is a non-profit educational resource dedicated to promoting responsible gambling and providing support for those affected by gambling-related harm.
        </p>
      </div>

      {/* Mission Section */}
      <section className="bg-white rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
              <Shield className="w-4 h-4" />
              OUR MISSION
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 leading-tight">
              Empowering You to <br />
              <span className="text-primary">Play Safely</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to provide accurate, evidence-based information and tools that empower individuals to make informed decisions about their gambling habits.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-positive shrink-0 mt-1" />
                <p><strong>Education:</strong> Providing clear and accessible information about gambling mechanics and risks.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-positive shrink-0 mt-1" />
                <p><strong>Support:</strong> Connecting individuals and families with professional help and support communities.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-positive shrink-0 mt-1" />
                <p><strong>Advocacy:</strong> Promoting responsible gambling practices within the industry and the community.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <Card className="p-10 border-2 border-primary/20 space-y-8 text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Trust", desc: "Providing reliable information." },
                  { title: "Caring", desc: "Supporting those in need." },
                  { title: "Professional", desc: "Expert advice and guidance." },
                  { title: "Non-judgmental", desc: "A safe space for everyone." }
                ].map((value, i) => (
                  <div key={i} className="p-4 bg-bg-soft rounded-xl border border-gray-100 space-y-1">
                    <div className="font-bold text-gray-900 text-sm">{value.title}</div>
                    <p className="text-xs text-gray-500">{value.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-heading font-black text-gray-900">Editorial Standards</h2>
          <p className="text-gray-600">We are committed to providing accurate and unbiased information.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4 border-t-4 border-gray-100">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-positive" />
              Evidence-Based
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              All our information and tools are based on the latest research and clinical practices in the field of problem gambling.
            </p>
          </Card>
          <Card className="p-8 space-y-4 border-t-4 border-gray-100">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-positive" />
              Unbiased
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We provide objective information about gambling risks and do not promote gambling as a way to make money.
            </p>
          </Card>
          <Card className="p-8 space-y-4 border-t-4 border-gray-100">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-positive" />
              Transparent
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We are clear about our mission, our partners, and our sources of information.
            </p>
          </Card>
          <Card className="p-8 space-y-4 border-t-4 border-gray-100">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-positive" />
              Up-to-Date
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We regularly review and update our content to ensure it reflects the latest information and resources.
            </p>
          </Card>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-bg-soft rounded-[3rem] p-12 md:p-20 border border-gray-200 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-heading font-black text-gray-900">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with industry leaders who share our commitment to responsible gambling and player safety.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-10 border-2 border-secondary/20 space-y-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center font-black text-3xl">P</div>
              <div className="text-3xl font-heading font-bold text-gray-900">Platinum Casino</div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Platinum Casino is a key partner in our mission. They provide industry-leading responsible gambling tools and support our educational initiatives.
            </p>
            <div className="flex justify-center">
              <a href="#" className="btn-secondary flex items-center gap-2">
                Visit Platinum Casino Responsible Gaming
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-heading font-black text-gray-900">Contact Us</h2>
          <p className="text-gray-600">Have questions or feedback? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900">Email</h4>
            <p className="text-sm text-gray-600">info@betsmart.org</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900">Phone</h4>
            <p className="text-sm text-gray-600">1-800-88-1234</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900">Location</h4>
            <p className="text-sm text-gray-600">Kuala Lumpur, Malaysia</p>
          </div>
        </div>
      </section>
    </div>
  );
}
