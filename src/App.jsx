import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Schedule from './components/Schedule';
import DressCode from './components/DressCode';
import RsvpForm from './components/RsvpForm';

export default function App() {
  return (
    <div className="min-h-screen bg-[#EBE7E1] flex justify-center selection:bg-[#8A9A86] selection:text-white">
      {/* Мобільний додаток-контейнер */}
      <main className="w-full max-w-md bg-[#FAF7F2] shadow-2xl min-h-screen relative overflow-hidden border-x border-[#8A9A86]/20 flex flex-col">
        
        {/* Головний екран */}
        <Hero 
          names="Юра & Іванка" 
          date="2026-10-18T00:00:00" 
          location="м. Луцьк" 
        />

        {/* Історія та теплі слова */}
        <Story />

        {/* Розклад дня та локації на карті */}
        <Schedule />

        {/* Текстурний Дрес-код */}
        <DressCode />

        {/* Форма присутності (RSVP) */}
        <RsvpForm />
        
        {/* Вишуканий футер у тонах Sage Green та Dusty Rose */}
        <footer className="py-10 text-center bg-gradient-to-t from-[#8A9A86]/20 to-transparent border-t border-[#8A9A86]/20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6A876B] font-sans font-medium">
            З нетерпінням чекаємо на вас
          </p>
          <p className="mt-2 font-serif text-[#C58284] text-2xl tracking-wide">
            Юра & Іванка
          </p>
          <span className="inline-block mt-3 text-[10px] text-[#BFA89B] font-sans">
            18.10.2026 • Луцьк
          </span>
        </footer>
      </main>
    </div>
  );
}