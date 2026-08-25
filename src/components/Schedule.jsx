import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car,
  Church, 
  GlassWater, 
  Sparkles, 
  Utensils, 
  Music, 
  Cake, 
  Heart,
  MapPin, 
  Navigation 
} from 'lucide-react';

const timelineEvents = [
  {
    time: "09:00",
    title: "Виїзд з дому нареченої",
    location: "с. Крушинець",
    icon: Car,
    color: "sage",
  },
  {
    time: "12:00",
    title: "Вінчання",
    location: "Свято-Покровський храм, с. Піддубці",
    icon: Church,
    color: "rose",
    isMain: true,
  },
  {
    time: "13:00",
    title: "Збір гостей & Welcome Drink",
    location: "Ресторан «Рестпарк», с. Струмівка",
    icon: GlassWater,
    color: "sage",
  },
  {
    time: "13:30",
    title: "Урочиста церемонія",
    icon: Sparkles,
    color: "rose",
  },
  {
    time: "14:00",
    title: "Святковий бенкет",
    icon: Utensils,
    color: "sage",
    isMain: true,
  },
  {
    time: "17:00",
    title: "Танці та розваги",
    icon: Music,
    color: "rose",
  },
  {
    time: "21:00",
    title: "Весільний торт",
    icon: Cake,
    color: "sage",
  },
];

const locations = [
  {
    title: "Свято-Покровський храм",
    subtitle: "Церемонія вінчання (12:00)",
    address: "с. Піддубці, Волинська область",
    link: "https://www.google.com/maps/place/%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0/@50.7693146,25.5133207,16z/data=!4m6!3m5!1s0x47258e288a004f2f:0x7880abfa2b828618!8m2!3d50.7693146!4d25.5228479!16s%2Fg%2F11c1q8196b",
  },
  {
    title: "Ресторанний комплекс «Рестпарк»",
    subtitle: "Святковий бенкет (14:00)",
    address: "вул. Рівненська, 135, с. Струмівка, Волинська область",
    link: "https://www.google.com/maps/search/?api=1&query=Рестпарк+Струмівка",
  },
];

export default function Schedule() {
  return (
    <section className="py-16 px-6 bg-[#FAF7F2] text-[#1C1917]" id="schedule">
      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] mt-1">
          Розклад дня
        </h2>
      </motion.div>

      {/* Таймлайн */}
      <div className="relative max-w-xs mx-auto mb-16 pl-6">
        {/* Багата шавлієва лінія */}
        <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#8A9A86] via-[#C58284] to-[#556956]" />

        <div className="space-y-8 relative">
          {timelineEvents.map((item, idx) => {
            const Icon = item.icon;
            const isRose = item.color === "rose";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative flex items-start group"
              >
                {/* Кружечок на осі лінії */}
                <div className={`absolute -left-[24px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 ${
                  item.isMain
                    ? isRose 
                      ? 'bg-gradient-to-tr from-[#C58284] to-[#E5AFA9] border-[#C58284] text-white shadow-md' 
                      : 'bg-gradient-to-tr from-[#556956] to-[#8A9A86] border-[#556956] text-white shadow-md'
                    : isRose 
                      ? 'bg-[#FAF7F2] border-[#C58284] text-[#C58284] shadow-sm' 
                      : 'bg-[#FAF7F2] border-[#556956] text-[#556956] shadow-sm'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Текст */}
                <div className="pl-6">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold font-sans mb-1 ${
                    item.isMain
                      ? isRose ? 'bg-[#C58284] text-white' : 'bg-[#556956] text-white'
                      : isRose ? 'bg-[#E5AFA9]/30 text-[#9A6B78]' : 'bg-[#8A9A86]/25 text-[#425343]'
                  }`}>
                    {item.time}
                  </span>
                  <h3 className={`font-serif font-medium ${
                    item.isMain
                      ? isRose ? 'text-2xl text-[#9A6B78] font-semibold' : 'text-2xl text-[#425343] font-semibold'
                      : 'text-xl text-[#2A2421]'
                  }`}>
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="font-sans text-xs text-[#556956] mt-0.5 font-medium">
                      {item.location}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Фінал таймлайну */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative flex items-center pt-2"
          >
            <div className="absolute -left-[20px] top-2 w-6 h-6 rounded-full bg-gradient-to-tr from-[#556956] to-[#C58284] text-white flex items-center justify-center shadow-sm z-10">
              <Heart className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="pl-6 font-serif italic text-xs text-[#556956] font-medium">
              Щасливий початок нашої історії
            </span>
          </motion.div>
        </div>
      </div>

      {/* Картки локацій */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-4 max-w-sm mx-auto"
      >
        <div className="text-center mb-6">
          <h3 className="font-serif text-2xl text-[#2A2421] mt-1">
            Локації весілля
          </h3>
        </div>

        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="p-5 bg-white rounded-3xl border border-[#8A9A86]/30 shadow-[0_8px_25px_-8px_rgba(85,105,86,0.12)] flex flex-col justify-between gap-3"
          >
            <div>
              <div className="flex items-center gap-2 text-[#556956] mb-1">
                <MapPin className="w-4 h-4 shrink-0 text-[#C58284]" />
                <h4 className="font-serif text-lg font-semibold text-[#2A2421]">
                  {loc.title}
                </h4>
              </div>
              <p className="text-xs font-medium text-[#9A6B78] font-sans">
                {loc.subtitle}
              </p>
              <p className="text-[11px] text-[#556956] mt-1 font-sans">
                {loc.address}
              </p>
            </div>

            <a
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#556956] to-[#425343] hover:from-[#425343] hover:to-[#354336] text-white font-sans text-xs font-medium tracking-wide transition-all shadow-sm active:scale-95"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Відкрити на карті</span>
            </a>
          </div>
        ))}
      </motion.div>
    </section>
  );
}