import React from 'react';
import { motion } from 'framer-motion';
import paletteImg from '../assets/palette.png';

const paletteItems = [
  { name: 'Blush Pink', x: 16.4, y: 5.9 },
  { name: 'Dusty Rose', x: 50.3, y: 5.9 },
  { name: 'Mauve', x: 84.9, y: 5.9 },

  { name: 'Sage Green', x: 16.4, y: 45.4 },
  { name: 'Eucalyptus', x: 50.3, y: 45.4 },
  { name: 'Dark Olive', x: 84.9, y: 45.4 },

  { name: 'Champagne', x: 16.4, y: 84.9 },
  { name: 'Soft Taupe', x: 50.3, y: 84.9 },
  { name: 'Black', x: 84.9, y: 84.9 },
];

export default function DressCode() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#FAF7F2] via-[#8A9A86]/10 to-[#FAF7F2] border-t border-[#8A9A86]/20 text-center relative overflow-hidden">
      
      {/* Сяйво Sage Green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8A9A86]/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-sm mx-auto relative z-10"
      >
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] mb-2">
          Дрес-код
        </h2>

        <p className="text-xs text-[#4D5333] leading-relaxed mb-8 font-sans px-2">
          Ми будемо дуже вдячні, якщо для своїх образів ви оберете наряди в ніжних або глибоких відтінках нашої весільної палітри:
        </p>

        {/* Сітка 3x3 */}
        <div className="grid grid-cols-3 gap-y-7 gap-x-3 justify-items-center mb-6">
          {paletteItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Шовковий / оксамитовий кружечок */}
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full p-[2.5px] bg-gradient-to-tr from-[#E8D2BD] via-[#C58284]/50 to-[#8A9A86]/50 shadow-md group-hover:shadow-xl transition-all duration-300">
                <div 
                  className="w-full h-full rounded-full overflow-hidden shadow-inner bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${paletteImg})`,
                    backgroundSize: '418% 418%',
                    backgroundPosition: `${item.x}% ${item.y}%`,
                  }}
                />
              </div>

              {/* Стильний більший підпис відтінку */}
              <div className="mt-2.5 px-2 py-0.5 rounded-full transition-colors duration-300">
                <span className="font-serif text-sm sm:text-[15px] tracking-wide text-[#2A2421] font-medium block leading-tight group-hover:text-[#C58284]">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Акуратний нижній підпис */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif italic text-sm text-[#9A6B78] mt-4"
        >
          Головне — ваша зручність та чудовий настрій!
        </motion.p>
      </motion.div>
    </section>
  );
}