import React from 'react';
import { Shield, Layout, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
    title: 'Στρατηγική Ανάπτυξης',
    description: 'Αναλύουμε τα δεδομένα σας και δημιουργούμε ένα πλάνο δράσης για να αυξήσετε τα έσοδά σας.',
    price: '99€ / ώρα'
  },
  {
    icon: <Layout className="w-8 h-8 text-violet-600" />,
    title: 'Ψηφιακός Μετασχηματισμός',
    description: 'Εκσυγχρονισμός των διαδικασιών σας με σύγχρονα ψηφιακά εργαλεία για μέγιστη αποδοτικότητα.',
    price: 'Custom Project'
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-600" />,
    title: 'Συμβουλευτική Επιχειρήσεων',
    description: 'Επίλυση προβλημάτων οργάνωσης και διαχείρισης ανθρωπίνου δυναμικού.',
    price: '120€ / ώρα'
  },
  {
    icon: <Users className="w-8 h-8 text-rose-600" />,
    title: 'Εκπαίδευση Ομάδας',
    description: 'Σεμινάρια πωλήσεων και ηγεσίας για το προσωπικό της επιχείρησής σας.',
    price: 'Κατόπιν συνεννόησης'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Υπηρεσίες</h2>
          <p className="text-4xl font-bold text-gray-900 sm:text-5xl">Πώς μπορώ να σας βοηθήσω;</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all group relative overflow-hidden"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-indigo-50 transition-colors w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <p className="text-indigo-600 font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;