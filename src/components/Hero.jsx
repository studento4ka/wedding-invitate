import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

export default function Hero({ 
  names = "Юра та Іванка", 
  location = "м. Луцьк" 
}) {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between items-center text-center px-6 py-12 text-white overflow-hidden">
      
      {/* Фонове фото на весь екран з м'яким затемненням */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px] z-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF7F2] to-transparent z-0" />

      {/* Верхня позначка */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-sans font-light text-white/90"
      >
        Запрошення на весілля
      </motion.div>

      {/* Центральний блок: Імена рукописним шрифтом + Велика дата */}
      <div className="relative z-10 my-auto w-full max-w-xs flex flex-col items-center">
        
        {/* Рукописні витончені імена */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif italic text-5xl sm:text-6xl text-white drop-shadow-md tracking-normal mb-8"
        >
          {names}
        </motion.h1>

        {/* Блок дати: Вересень | 18 | 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex items-center justify-between gap-2 border-t border-b border-white/60 py-3 px-2 text-white"
        >
          <span className="font-serif text-sm tracking-widest lowercase text-white/90">
            жовтень
          </span>

          <span className="font-serif text-5xl sm:text-6xl font-light leading-none text-white px-2">
            18
          </span>

          <span className="font-serif text-sm tracking-widest text-white/90">
            2026
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-white/80 font-sans mt-4"
        >
          {location}
        </motion.p>
      </div>

      {/* Стрілочка скролу */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center text-[#556956] text-[10px] tracking-[0.25em] uppercase font-sans font-medium"
      >
        <ChevronDown className="w-5 h-5 text-[#FAF7F2] drop-shadow-md" />
      </motion.div>

    </section>
  );
}