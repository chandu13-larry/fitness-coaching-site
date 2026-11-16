import React, { useState } from 'react';
import { BarChart3, Dumbbell, Apple, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';

// Custom WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function App() {
  const [openFAQ, setOpenFAQ] = useState(null);

  // Replace this with your actual WhatsApp number (include country code, no + or spaces)
  const whatsappNumber = "917349462869"; 
  const whatsappMessage = encodeURIComponent("Hi Coach Chandu, I want to start my 90-day transformation.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const faqs = [
    {
      question: "Do I need a gym membership?",
      answer: "Not necessarily. I can build highly effective home workout plans focused on progressive overload, or fully structured gym routines depending on your access to equipment."
    },
    {
      question: "I am vegetarian. Will this diet work for me?",
      answer: "Absolutely. Whether you are vegetarian (utilizing pea protein, paneer, oats) or non-veg (chicken breast, egg whites), I create a gram-by-gram macronutrient breakdown that fits your specific dietary preferences."
    },
    {
      question: "How do the weekly check-ins work?",
      answer: "Every week, you will send me your scale weight and progress photos via WhatsApp. We will analyze the data together and I will make exact adjustments to your macros and training volume to ensure continuous progress."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500 selection:text-white pb-24 lg:pb-0 overflow-x-hidden">
      
      {/* Inline CSS for the Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative w-full h-[85vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/chandu.jpeg" 
            alt="Coach Chandu - VTU Medalist" 
            className="w-full h-full object-cover object-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-4 py-1 rounded-full text-sm mb-4 uppercase tracking-wider shadow-lg shadow-orange-500/30">
            VTU Best Physique Medalist
          </div>
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-tight mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400">
            90 Days <br/> <span className="text-orange-500">Transformation</span>
          </h1>
          <p className="text-lg lg:text-xl text-neutral-300 mb-8 font-medium shadow-black drop-shadow-lg">
            Muscle Gain • Fat Loss • Strength Building
          </p>
          
          <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-6 rounded-3xl shadow-2xl inline-block backdrop-blur-sm bg-opacity-80">
            <h2 className="text-4xl font-black text-orange-500 mb-1">₹299<span className="text-lg text-neutral-400 font-bold">/MONTH</span></h2>
            <p className="text-sm text-neutral-500 font-semibold uppercase tracking-widest">Limited Slots Available</p>
          </div>
        </div>
      </header>

      {/* Infinite Scrolling Ticker */}
      <div className="w-full bg-orange-600 text-white font-black uppercase tracking-widest py-3 overflow-hidden border-y border-orange-500">
        <div className="animate-marquee text-sm sm:text-base">
          🔥 ONLY 3 SLOTS LEFT THIS MONTH • 100% CUSTOMIZED DIET • NO CRASH DIETING • SCIENTIFIC PROGRESSIVE OVERLOAD • WEEKLY DATA ANALYSIS • 
          🔥 ONLY 3 SLOTS LEFT THIS MONTH • 100% CUSTOMIZED DIET • NO CRASH DIETING • SCIENTIFIC PROGRESSIVE OVERLOAD • WEEKLY DATA ANALYSIS • 
        </div>
      </div>

      {/* Deliverables Bento Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black uppercase text-center mb-10 tracking-tight">What You Get</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
            <Apple className="text-orange-500 w-8 h-8 mb-4" />
            <h3 className="font-bold text-xl mb-2">Personalized Diet</h3>
            <p className="text-neutral-400 text-sm">Gram-by-gram macro breakdown tailored to your current bodyweight and goals.</p>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
            <Dumbbell className="text-orange-500 w-8 h-8 mb-4" />
            <h3 className="font-bold text-xl mb-2">Custom Workouts</h3>
            <p className="text-neutral-400 text-sm">Structured routines for home or gym, optimized for progressive overload.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
            <BarChart3 className="text-orange-500 w-8 h-8 mb-4" />
            <h3 className="font-bold text-xl mb-2">Weekly Check-ins</h3>
            <p className="text-neutral-400 text-sm">Data-driven adjustments to your plan based on your weekly progress photos and scale weight.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl lg:col-span-3 flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-bold text-xl mb-1 flex items-center gap-2">
                <Smartphone className="text-orange-500 w-6 h-6" />
                24/7 Priority Support
              </h3>
              <p className="text-neutral-400 text-sm">Direct WhatsApp and call access for form checks and daily guidance.</p>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 hover:bg-[#25D366] text-white border border-neutral-700 hover:border-[#25D366] px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-black uppercase text-center mb-8 tracking-tight">Got Questions?</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left font-bold focus:outline-none"
              >
                <span>{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-500" />
                )}
              </button>
              
              <div 
                className={`px-5 text-neutral-400 text-sm leading-relaxed transition-all duration-300 ${
                  openFAQ === index ? "pb-5 max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-neutral-950 via-neutral-950 to-transparent lg:hidden z-50 pointer-events-none">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-neutral-950 font-black text-lg py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-900/50 active:scale-95 transition-transform pointer-events-auto"
        >
          <WhatsAppIcon className="w-7 h-7" />
          START NOW
        </a>
      </div>

    </div>
  );
}