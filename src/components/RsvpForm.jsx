import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Minus, Plus } from 'lucide-react';
import confetti from 'canvas-confetti';
import { supabase } from '../lib/supabaseClient';
import { sendTelegramNotification } from '../lib/telegram';

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    guestNames: '',
    isAttending: 'yes',
    guestsCount: 2,
    transportHelp: '',
    wishes: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const transportOptions = [
    'Так',
    'Ні, доберемося самостійно',
  ];

  const handleCountChange = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1) {
      setFormData((prev) => ({ ...prev, guestsCount: 1 }));
    } else {
      setFormData((prev) => ({ ...prev, guestsCount: Math.min(num, 20) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.isAttending === 'yes' && !formData.transportHelp) {
      setError('Будь ласка, вкажіть інформацію щодо доїзду');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 1. Запис у базу Supabase
      const { error: dbError } = await supabase.from('rsvp_responses').insert([
        {
          guest_names: formData.guestNames,
          is_attending: formData.isAttending === 'yes',
          guests_count: formData.isAttending === 'yes' ? Number(formData.guestsCount) : 0,
          transport_help: formData.isAttending === 'yes' ? formData.transportHelp : null,
          wishes: formData.wishes,
        },
      ]);

      if (dbError) {
        console.error('Supabase error:', dbError);
        throw new Error(`Помилка бази даних: ${dbError.message}`);
      }

      // 2. Сповіщення в Telegram
      await sendTelegramNotification(formData);

      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C58284', '#E5AFA9', '#556956', '#8A9A86', '#E8D2BD'],
      });
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Не вдалося надіслати відповідь. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-[#FAF7F2] text-[#1C1917]" id="rsvp">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-sm mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] mt-1">
            Анкета гостя
          </h2>
          <p className="text-xs text-[#556956] mt-2 font-sans font-medium">
            Будь ласка, заповніть форму до 1 жовтня 2026 року
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 bg-white rounded-3xl shadow-[0_10px_30px_-10px_rgba(85,105,86,0.2)] border border-[#8A9A86]/30 text-center"
          >
            <CheckCircle2 className="w-12 h-12 text-[#556956] mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-[#2A2421] mb-2">Дякуємо!</h3>
            <p className="text-xs text-[#556956] font-sans">
              Вашу відповідь збережено та надіслано молодятам. З нетерпінням чекаємо на зустріч!
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#8A9A86]/30 shadow-[0_10px_30px_-10px_rgba(197,130,132,0.15)] space-y-5"
          >
            {/* Ім'я */}
            <div>
              <label className="block text-xs font-medium text-[#2A2421] mb-1 font-sans">
                Ваше ім'я та прізвище (або пари / родини)
              </label>
              <input
                required
                type="text"
                value={formData.guestNames}
                onChange={(e) => setFormData({ ...formData, guestNames: e.target.value })}
                placeholder="наприклад, Богдан та Марго"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D2BD] focus:outline-none focus:ring-2 focus:ring-[#C58284] text-sm bg-white"
              />
            </div>

            {/* Присутність */}
            <div>
              <label className="block text-xs font-medium text-[#2A2421] mb-2 font-sans">
                Чи зможете розділити з нами цей день?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isAttending: 'yes' })}
                  className={`py-2.5 text-xs font-medium rounded-xl border transition-all ${
                    formData.isAttending === 'yes'
                      ? 'bg-[#C58284] text-white border-[#C58284] shadow-sm'
                      : 'bg-white text-[#2A2421] border-[#E8D2BD] hover:bg-[#FAF7F2]'
                  }`}
                >
                  Так, із радістю! ❤
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isAttending: 'no' })}
                  className={`py-2.5 text-xs font-medium rounded-xl border transition-all ${
                    formData.isAttending === 'no'
                      ? 'bg-[#556956] text-white border-[#556956] shadow-sm'
                      : 'bg-white text-[#2A2421] border-[#E8D2BD] hover:bg-[#FAF7F2]'
                  }`}
                >
                  На жаль, не зможу 💔
                </button>
              </div>
            </div>

            {/* Блоки, які показуються лише якщо гість буде на весіллі */}
            {formData.isAttending === 'yes' && (
              <>
                {/* Кількість персон */}
                <div>
                  <label className="block text-xs font-medium text-[#2A2421] mb-1.5 font-sans">
                    Скільки гостей буде включно з вами ?
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleCountChange(formData.guestsCount - 1)}
                      className="w-10 h-10 rounded-xl border border-[#E8D2BD] bg-white flex items-center justify-center text-[#2A2421] hover:bg-[#FAF7F2] active:scale-95 transition-all shadow-xs"
                    >
                      <Minus className="w-4 h-4 text-[#C58284]" />
                    </button>

                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guestsCount}
                      onChange={(e) => handleCountChange(e.target.value)}
                      className="w-20 text-center py-2 rounded-xl border border-[#E8D2BD] focus:outline-none focus:ring-2 focus:ring-[#C58284] text-base font-semibold font-serif bg-white"
                    />

                    <button
                      type="button"
                      onClick={() => handleCountChange(formData.guestsCount + 1)}
                      className="w-10 h-10 rounded-xl border border-[#E8D2BD] bg-white flex items-center justify-center text-[#2A2421] hover:bg-[#FAF7F2] active:scale-95 transition-all shadow-xs"
                    >
                      <Plus className="w-4 h-4 text-[#C58284]" />
                    </button>

                    <span className="text-xs text-[#556956] font-sans font-medium">
                      {formData.guestsCount === 1 ? 'персона' : formData.guestsCount < 5 ? 'персони' : 'персон'}
                    </span>
                  </div>
                </div>

                {/* Допомога з доїздом */}
                <div>
                  <label className="block text-xs font-medium text-[#2A2421] mb-2 font-sans">
                    Чи потрібно вам допомогти з доїздом ?
                  </label>
                  <div className="flex flex-col gap-2">
                    {transportOptions.map((opt) => {
                      const isSelected = formData.transportHelp === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, transportHelp: opt });
                            setError(null);
                          }}
                          className={`w-full py-2.5 px-3 rounded-xl border text-left text-xs font-sans transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#556956] text-white border-[#556956] shadow-sm font-medium'
                              : 'bg-white text-[#2A2421] border-[#E8D2BD] hover:bg-[#FAF7F2]'
                          }`}
                        >
                          <span>{opt}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                              isSelected ? 'border-white bg-white text-[#556956]' : 'border-[#8A9A86]/50'
                            }`}
                          >
                            {isSelected ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Побажання */}
            <div>
              <label className="block text-xs font-medium text-[#2A2421] mb-1 font-sans">
                Побажання для молодят
              </label>
              <textarea
                rows={3}
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                placeholder="Кілька теплих слів..."
                className="w-full px-3.5 py-2 rounded-xl border border-[#E8D2BD] focus:outline-none focus:ring-2 focus:ring-[#C58284] text-xs bg-white resize-none"
              />
            </div>

            {error && (
              <p className="text-xs text-red-500 text-center font-sans font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-[#C58284] hover:bg-[#B67375] text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98"
            >
              {loading ? 'Надсилання...' : 'Надіслати відповідь'}
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}