import React from 'react';
import { ChevronRight, Star, Award, CheckCircle, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">Strategic Consulting & Business Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1]">
              Αναβαθμίστε την <span className="text-indigo-600">Επιχείρησή</span> σας με Εξειδικευμένη Καθοδήγηση
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Συνδυάζουμε την πολυετή εμπειρία με σύγχρονες μεθοδολογίες για να προσφέρουμε λύσεις που φέρνουν πραγματική ανάπτυξη.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a href="#booking" className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group">
                Κλείστε Ραντεβού
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="flex-1 relative order-1 lg:order-2">
            <div className="w-full aspect-square max-w-[500px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Professional Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;