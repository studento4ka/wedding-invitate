import React from 'react';
import { motion } from 'framer-motion';
import kidsPhoto from '../assets/kids.png';

export default function ChildhoodPhoto() {
  return (
    <section className="w-full bg-[#FAF7F2] py-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative flex justify-center items-center"
      >
        {/* Фото на всю ширину з плавним висвітленням країв з усіх боків */}
        <div className="w-full max-w-2xl relative">
          <img
            src={kidsPhoto}
            alt="Юра та Іванка"
            className="w-full h-auto max-h-[480px] object-cover sm:object-contain relative z-10 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%),linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%),linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-composite:source-in]"
          />
        </div>
      </motion.div>
    </section>
  );
}