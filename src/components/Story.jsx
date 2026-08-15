import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

  // Жовтень 2026: 1 жовтня - Четвер (3 порожні клітинки на початку), 31 день
  const calendarDays = [
    '', '', '', 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, '',
  ];

  return (
    <section className="py-20 px-6 bg-[#FAF7F2] text-[#2A2421] text-center relative overflow-hidden">
      
      {/* Декоративні тонкі дуги як на скріншоті */}
      <div className="absolute -top-20 -left-20 w-64 h-64 border border-[#8A9A86]/20 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-72 h-72 border border-[#C58284]/20 rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xs mx-auto relative z-10"
      >
        {/* Великий заголовок тонкими літерами */}
        <h2 className="font-serif text-3xl tracking-[0.15em] text-[#2A2421] uppercase mb-8">
          Дорогі наші гості!
        </h2>

        {/* Текст запрошення */}
        <p className="font-sans font-light text-xs text-[#425343] leading-relaxed mb-6">
          Незабаром у нашому житті відбудеться важлива подія — наше весілля!
        </p>

        <p className="font-sans font-light text-xs text-[#425343] leading-relaxed mb-12">
          Ми віримо та сподіваємося, що цей день стане гарним початком довгого та щасливого життя.
        </p>

        {/* Назва місяця календаря */}
        <h3 className="font-serif text-2xl tracking-[0.25em] text-[#2A2421] uppercase mb-6">
          Жовтень
        </h3>

        {/* Календарна сітка */}
        <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center font-sans text-xs text-[#556956] mb-4">
          {daysOfWeek.map((day, i) => (
            <span key={i} className="font-medium text-[11px] text-[#8A9A86] pb-2">
              {day}
            </span>
          ))}

          {calendarDays.map((day, idx) => {
            const isWeddingDay = day === 18;
            return (
              <div key={idx} className="h-8 flex items-center justify-center relative">
                {isWeddingDay ? (
                  <div className="relative flex items-center justify-center">
                    {/* Тонке сердечко навколо дати 18 */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C58284"
                      strokeWidth="1.5"
                      className="absolute w-8 h-8 -top-0.5 text-[#C58284] animate-pulse"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="font-serif text-sm font-semibold text-[#C58284] z-10">
                      18
                    </span>
                  </div>
                ) : (
                  <span className={`font-serif text-xs ${day ? 'text-[#2A2421]' : ''}`}>
                    {day}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="w-8 h-[1px] bg-[#E8D2BD] mx-auto mt-8" />
      </motion.div>
    </section>
  );
}