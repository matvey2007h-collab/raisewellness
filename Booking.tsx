import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionTitle, Button } from './Home';
import { CheckCircle2, Calendar, Clock, User, Sparkles } from 'lucide-react';

export const Booking = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const rituals = [
    "Signature Deep Tissue (90 мин)",
    "Авторская Ароматерапия (60 мин)",
    "Террапия Лавовыми Камнями (75 мин)",
    "Восстановление после перелета (45 мин)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-brand-moss/20 border border-brand-gold/30 p-12 text-center"
        >
          <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
             <CheckCircle2 className="w-10 h-10 text-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl uppercase mb-4 text-brand-gold">Заявка принята</h2>
          <p className="text-sm opacity-60 leading-relaxed mb-12">
            Благодарим вас за выбор нашего салона. Наш консьерж свяжется с вами в течение 15 минут для подтверждения времени и деталей вашего визита.
          </p>
          <Button primary onClick={() => window.location.href = '/'}>На главную</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <SectionTitle number="05">Запись</SectionTitle>
          <p className="text-sm tracking-[0.3em] uppercase opacity-40 font-bold -mt-8">Reserve your moment of peace</p>
        </div>

        <div className="editorial-grid gap-0 bg-brand-moss/10 border border-brand-gold/10 overflow-hidden">
           <div className="col-span-12 lg:col-span-4 bg-brand-forest/60 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-brand-gold/10">
              <div className="space-y-12">
                 <div className={`flex items-center gap-4 transition-all ${step >= 1 ? 'opacity-100' : 'opacity-20'}`}>
                    <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center font-serif text-sm">1</div>
                    <span className="text-[10px] tracking-widest uppercase font-bold">Выбор услуги</span>
                 </div>
                 <div className={`flex items-center gap-4 transition-all ${step >= 2 ? 'opacity-100' : 'opacity-20'}`}>
                    <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center font-serif text-sm">2</div>
                    <span className="text-[10px] tracking-widest uppercase font-bold">Детали и Время</span>
                 </div>
                 <div className={`flex items-center gap-4 transition-all ${step >= 3 ? 'opacity-100' : 'opacity-20'}`}>
                    <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center font-serif text-sm">3</div>
                    <span className="text-[10px] tracking-widest uppercase font-bold">Подтверждение</span>
                 </div>
              </div>
              
              <div className="mt-24 pt-12 border-t border-brand-gold/10">
                 <div className="flex items-center gap-4 text-brand-gold mb-4 opacity-60">
                    <Sparkles size={16} />
                    <span className="text-[9px] tracking-widest uppercase font-bold">Exclusive Access</span>
                 </div>
                 <p className="text-[10px] leading-loose opacity-40 uppercase">Нажимая кнопку «Записаться», вы соглашаетесь с нашей политикой конфиденциальности и правилами посещения салона.</p>
              </div>
           </div>

           <div className="col-span-12 lg:col-span-8 p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-12">
                 <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div 
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                         <h3 className="font-serif text-3xl uppercase text-brand-gold">Выберите Ритуал</h3>
                         <div className="grid grid-cols-1 gap-4">
                            {rituals.map((r, i) => (
                              <label key={i} className="flex items-center gap-4 p-4 border border-brand-gold/10 hover:bg-brand-gold/5 cursor-pointer transition-all">
                                 <input type="radio" name="ritual" value={r} className="accent-brand-gold" required />
                                 <span className="text-[12px] uppercase tracking-widest font-medium opacity-80">{r}</span>
                              </label>
                            ))}
                         </div>
                         <Button type="button" onClick={() => setStep(2)} className="w-full">Далее</Button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div 
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                         <h3 className="font-serif text-3xl uppercase text-brand-gold">Когда вас ждать?</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                               <div className="flex items-center gap-2 text-brand-gold opacity-60">
                                  <Calendar size={16} />
                                  <label className="text-[10px] tracking-widest uppercase font-bold">Выбор даты</label>
                               </div>
                               <input type="date" className="w-full bg-transparent border border-brand-gold/20 p-4 focus:border-brand-gold outline-none text-brand-cream" required />
                            </div>
                            <div className="space-y-4">
                               <div className="flex items-center gap-2 text-brand-gold opacity-60">
                                  <Clock size={16} />
                                  <label className="text-[10px] tracking-widest uppercase font-bold">Выбор времени</label>
                               </div>
                               <select className="w-full bg-brand-forest border border-brand-gold/20 p-4 focus:border-brand-gold outline-none text-brand-cream" required>
                                  <option value="">Выберите слот</option>
                                  <option>10:00</option>
                                  <option>12:30</option>
                                  <option>15:00</option>
                                  <option>18:00</option>
                                  <option>20:00</option>
                               </select>
                            </div>
                         </div>
                         <div className="flex gap-4">
                            <Button type="button" onClick={() => setStep(1)} className="flex-1 !bg-transparent opacity-40">Назад</Button>
                            <Button type="button" onClick={() => setStep(3)} className="flex-1" primary>Далее</Button>
                         </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div 
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                         <h3 className="font-serif text-3xl uppercase text-brand-gold">Контактные данные</h3>
                         <div className="space-y-6">
                            <div className="flex items-center gap-2 text-brand-gold opacity-60">
                               <User size={16} />
                               <label className="text-[10px] tracking-widest uppercase font-bold">Информация о госте</label>
                            </div>
                            <input type="text" placeholder="Ваше Имя" className="w-full bg-transparent border border-brand-gold/20 p-4 focus:border-brand-gold outline-none text-brand-cream" required />
                            <input type="tel" placeholder="Телефон" className="w-full bg-transparent border border-brand-gold/20 p-4 focus:border-brand-gold outline-none text-brand-cream" required />
                            <textarea placeholder="Пожелания (необязательно)" className="w-full bg-transparent border border-brand-gold/20 p-4 h-24 focus:border-brand-gold outline-none text-brand-cream" />
                         </div>
                         <div className="flex gap-4">
                            <Button type="button" onClick={() => setStep(2)} className="flex-1 !bg-transparent opacity-40">Назад</Button>
                            <Button type="submit" className="flex-1" primary>Завершить запись</Button>
                         </div>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};
