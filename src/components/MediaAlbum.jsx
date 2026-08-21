import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Sparkles } from 'lucide-react';

// ВСТАВ СЮДИ СВОЄ ПОСИЛАННЯ НА ТЕЛЕГРАМ-ГРУПУ:
const TELEGRAM_PHOTO_GROUP_URL = "https://t.me/+2puLYd3C1y8zMjhi";

export default function MediaAlbum() {
  return (
    <section className="py-14 px-6 bg-[#FAF7F2] text-[#1C1917]" id="media-album">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-sm mx-auto"
      >
        <div className="p-7 rounded-3xl bg-white/90 backdrop-blur-md border border-[#8A9A86]/30 shadow-[0_10px_30px_-10px_rgba(85,105,86,0.15)] text-center relative overflow-hidden">
          
          {/* Декоративні м'які бліки */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#C58284]/15 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#8A9A86]/20 rounded-full blur-xl pointer-events-none" />

          {/* Іконка камери */}
          <div className="w-12 h-12 mx-auto rounded-full bg-[#8A9A86]/15 border border-[#8A9A86]/30 flex items-center justify-center text-[#556956] mb-3 relative z-10">
            <Camera className="w-6 h-6 text-[#C58284]" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.25em] text-[#556956] font-sans font-semibold relative z-10">
            Спільні спогади
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] mt-1 mb-3 relative z-10">
            Весільний медіа-альбом
          </h3>

          <p className="font-sans text-xs text-[#425343] leading-relaxed mb-6 font-light relative z-10 px-2">
            Будемо безмежно вдячні, якщо ви поділитеся фото та відео, зробленими під час свята. Ми створили спільний Telegram-чат, щоб зберегти кожну мить!
          </p>

          <a
            href={TELEGRAM_PHOTO_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#556956] to-[#425343] hover:from-[#425343] hover:to-[#354336] text-white font-sans text-xs font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 relative z-10"
          >
            <span>Приєднатися до чату гостей</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}