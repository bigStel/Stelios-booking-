
import React from 'react';
import { ChevronRight, Star, Award, CheckCircle, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 text-left space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">AI-Powered Consulting & Business Strategy</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1]">
              Αναβαθμίστε την <span className="text-indigo-600">Επιχείρησή</span> σας με Εξειδικευμένη Καθοδήγηση
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Συνδυάζουμε την ανθρώπινη εμπειρία με την ισχύ της <b>Τεχνητής Νοημοσύνης</b> για να προσφέρουμε λύσεις που φέρνουν πραγματικά αποτελέσματα.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="#booking"
                className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group"
              >
                Κλείστε Ραντεβού
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto border border-gray-200 bg-white text-gray-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all text-center"
              >
                Οι Υπηρεσίες μου
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    src={`https://i.pravatar.cc/150?u=${i + 10}`}
                    alt="Client avatar"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">4.9/5</span> από εκατοντάδες ευχαριστημένους πελάτες
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          <div className="flex-1 relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 rounded-2xl -z-10 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-violet-200 rounded-full -z-10" />
              
              {/* Floating Cards */}
              <div className="absolute top-10 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 z-10 animate-bounce transition-all hover:scale-105" style={{ animationDuration: '3s' }}>
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Status</p>
                  <p className="text-sm font-bold text-gray-900">Διαθέσιμος σήμερα</p>
                </div>
              </div>

              <div className="absolute bottom-10 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 z-10 animate-pulse" style={{ animationDuration: '4s' }}>
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Expertise</p>
                  <p className="text-sm font-bold text-gray-900">10+ Χρόνια Εμπειρία</p>
                </div>
              </div>

              {/* Main Profile Image */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Client Logos Section */}
        <div className="pt-24 border-t border-gray-100 mt-20">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-12">Συνεργασίες με κορυφαία Brands</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex justify-center items-center font-bold text-3xl tracking-tighter">CLARK</div>
            <div className="flex justify-center items-center font-bold text-3xl tracking-tighter">STARK</div>
            <div className="flex justify-center items-center font-bold text-3xl tracking-tighter">WAYNE</div>
            <div className="flex justify-center items-center font-bold text-3xl tracking-tighter">PARKER</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
