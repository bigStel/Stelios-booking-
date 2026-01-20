
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="services-anchor">
          <Services />
        </div>

        <div className="py-20 bg-indigo-600/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Γιατί να επιλέξετε εμένα;</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-3">Εμπειρία</h3>
                <p className="text-gray-600">Πάνω από 10 χρόνια στον κλάδο με επιτυχίες σε μεγάλες επιχειρήσεις.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-3">Εξατομίκευση</h3>
                <p className="text-gray-600">Κάθε πελάτης είναι μοναδικός. Δημιουργούμε λύσεις στα μέτρα σας.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-3">Αποτελέσματα</h3>
                <p className="text-gray-600">Εστιάζουμε στην ουσία και στην επίτευξη των στόχων σας.</p>
              </div>
            </div>
          </div>
        </div>

        <Booking />
      </main>

      <Footer />
      
      <AiAssistant />
    </div>
  );
}

export default App;
