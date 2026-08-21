import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between text-center px-4 pt-10 pb-10 overflow-hidden bg-[#FAF7F2]">
      {/* Фонове фото на весь екран */}
      <img
        src={heroImg}
        alt="Юра та Іванка"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* М'яке затемнення зверху та висвітлення знизу в колір сайту */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-40% to-[#FAF7F2] pointer-events-none" />

      {/* Верхній блок: Тільки заголовок запрошення */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 pt-4 sm:pt-6"
      >
        <span className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-white/90 font-sans font-medium drop-shadow-md">
          Запрошення на весілля
        </span>
      </motion.div>

      {/* Нижній блок: Імена та Дата на світлому фоні */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="relative z-10 pb-10 sm:pb-12 flex flex-col items-center gap-2"
      >
        {/* Імена */}
        <h1 className="font-serif text-4xl sm:text-6xl text-[#2A2421] tracking-tight font-normal">
          Юра <span className="font-serif italic text-[#C58284] font-light">&</span> Іванка
        </h1>

        {/* Дата */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <span className="h-[1px] w-8 bg-[#2A2421]/30" />
          <p className="font-serif text-sm sm:text-base tracking-[0.25em] text-[#556956] uppercase font-medium">
            18 жовтня 2026 року
          </p>
          <span className="h-[1px] w-8 bg-[#2A2421]/30" />
        </div>
      </motion.div>
    </section>
  );
}