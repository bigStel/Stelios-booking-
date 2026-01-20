
import React, { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, ExternalLink, Clock, CheckCircle, ChevronLeft, ChevronRight, Settings } from 'lucide-react';

const Booking: React.FC = () => {
  const [calendarUrl, setCalendarUrl] = useState('https://calendar.google.com/calendar/appointments/schedules/AcZssM2lR-example');
  const [showSettings, setShowSettings] = useState(false);
  const [tempUrl, setTempUrl] = useState(calendarUrl);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  // Ημερομηνία για την προβολή του ημερολογίου
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    // Προσαρμογή ώστε η εβδομάδα να ξεκινά από Δευτέρα (αν χρειάζεται)
    // Εδώ χρησιμοποιούμε την τυπική Κυριακή=0 για απλότητα
    const padding = firstDay;
    return { padding, totalDays };
  }, [currentDate]);

  const monthName = currentDate.toLocaleString('el-GR', { month: 'long' });
  const yearLabel = currentDate.getFullYear();

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    // Μπορούμε να προσθέσουμε εφέ ή να ανοίξουμε το link μετά από λίγο
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const handleSaveUrl = () => {
    setCalendarUrl(tempUrl);
    setShowSettings(false);
  };

  const weekdays = ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'];

  return (
    <section id="booking" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Προγραμματισμός</h2>
          <p className="text-4xl font-bold text-gray-900 sm:text-5xl">Κλείστε το Ραντεβού σας</p>
          <p className="text-gray-500 max-w-xl mx-auto">
            Επιλέξτε την ημερομηνία που σας εξυπηρετεί και ολοκληρώστε την κράτηση στο επόμενο βήμα.
          </p>
        </div>

        {/* Settings Button */}
        <div className="flex justify-end mb-6">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-2 text-gray-400 hover:text-indigo-600 transition-colors text-xs font-medium"
          >
            <Settings className="w-4 h-4" />
            Ρύθμιση Link
          </button>
        </div>

        {showSettings && (
          <div className="mb-8 p-6 bg-gray-50 rounded-3xl border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
            <label className="block text-sm font-bold text-gray-700 mb-2">Σύνδεσμος Google Calendar:</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="text" 
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
                className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button onClick={handleSaveUrl} className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700">Αποθήκευση</button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Info Panel */}
            <div className="lg:w-1/3 p-10 bg-indigo-600 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                    <CalendarIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Booking Info</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-indigo-200 mt-1" />
                    <div>
                      <p className="font-bold">Διάρκεια</p>
                      <p className="text-indigo-100 text-sm opacity-80">60 λεπτά συνεδρίας</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-indigo-200 mt-1" />
                    <div>
                      <p className="font-bold">Επιβεβαίωση</p>
                      <p className="text-indigo-100 text-sm opacity-80">Άμεση μέσω email</p>
                    </div>
                  </div>
                </div>
              </div>

              {selectedDate && (
                <div className="mt-12 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10 animate-in zoom-in duration-300">
                  <p className="text-sm font-medium opacity-80 mb-1">Επιλεγμένη Ημερομηνία:</p>
                  <p className="text-2xl font-black">
                    {selectedDate} {monthName} {yearLabel}
                  </p>
                </div>
              )}
            </div>

            {/* Right Calendar Panel */}
            <div className="flex-1 p-8 lg:p-12">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-black text-gray-900 capitalize">
                  {monthName} <span className="text-indigo-600">{yearLabel}</span>
                </h3>
                <div className="flex gap-2">
                  <button onClick={prevMonth} className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextMonth} className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Weekdays Header */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {weekdays.map(d => (
                  <div key={d} className="text-center text-[10px] font-black uppercase tracking-widest text-gray-400 py-2">
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-4">
                {/* Empty slots for padding */}
                {Array.from({ length: daysInMonth.padding }).map((_, i) => (
                  <div key={`pad-${i}`} />
                ))}

                {/* Actual Days */}
                {Array.from({ length: daysInMonth.totalDays }).map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate === day;
                  const isToday = new Date().getDate() === day && new Date().getMonth() === currentDate.getMonth();

                  return (
                    <button
                      key={day}
                      onClick={() => handleDateClick(day)}
                      className={`
                        relative aspect-square flex flex-col items-center justify-center rounded-full text-lg font-bold transition-all duration-300 group
                        ${isSelected 
                          ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 scale-110' 
                          : 'hover:bg-indigo-50 text-gray-700 hover:text-indigo-600'
                        }
                      `}
                    >
                      {day}
                      {isToday && !isSelected && (
                        <div className="absolute bottom-2 w-1 h-1 bg-indigo-600 rounded-full" />
                      )}
                      {/* Hover effect highlight */}
                      <div className={`absolute inset-0 rounded-full border-2 border-indigo-600 opacity-0 scale-75 group-hover:opacity-10 transition-all ${isSelected ? 'hidden' : ''}`} />
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="mt-12 flex justify-center lg:justify-end">
                <button
                  onClick={() => window.open(calendarUrl, '_blank')}
                  disabled={!selectedDate}
                  className={`
                    flex items-center gap-3 px-10 py-5 rounded-full text-lg font-black transition-all
                    ${selectedDate 
                      ? 'bg-indigo-900 text-white shadow-2xl hover:bg-black hover:-translate-y-1' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                    }
                  `}
                >
                  {selectedDate ? 'Συνέχεια στην Κράτηση' : 'Επιλέξτε μια Ημερομηνία'}
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            Ασφαλής κράτηση μέσω Google Calendar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
