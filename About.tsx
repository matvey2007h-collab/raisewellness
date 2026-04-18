import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './Home';

export const About = () => {
  return (
    <div className="pt-24 md:pt-32 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <SectionTitle number="01">О Нас</SectionTitle>
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 md:gap-16 mb-24 md:mb-32">
          <div className="lg:col-span-6">
            <h1 className="font-serif text-5xl md:text-8xl uppercase leading-none mb-8 md:mb-12">
              Искусство <br /> <span className="italic text-brand-gold">Восстановления</span>
            </h1>
            <p className="text-lg md:text-2xl font-light leading-relaxed mb-8 opacity-90 border-l border-brand-gold/40 pl-6 md:pl-8">
              Raise был основан в 2018 году с одной целью: создать пространство, где время замедляется, а тело обретает второе дыхание. Мы верим, что забота о себе — это не роскошь, а необходимость для полноценной жизни.
            </p>
            <p className="text-sm leading-loose opacity-60 max-w-lg mb-12">
              Наша философия строится на трех столпах: Мастерство, Атмосфера и Результат. Каждый аспект нашего сервиса, от температуры полотенец до глубины нажатия пальцев мастера, выверен с точностью до миллиметра. Мы не следуем трендам, мы создаем стандарты глубокой релаксации.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] border border-brand-gold/20 p-2 grayscale">
               <img 
                 src="https://picsum.photos/seed/about-spa/1000/1250" 
                 alt="Atmosphere" 
                 className="w-full h-full object-cover opacity-60"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 md:gap-16 items-center mb-24 md:mb-32">
           <div className="lg:col-span-4 hidden lg:block">
              <div className="aspect-square border border-brand-gold/10 p-4">
                 <img src="https://picsum.photos/seed/oil/800/800" alt="Detail" className="w-full h-full object-cover grayscale opacity-40" referrerPolicy="no-referrer" />
              </div>
           </div>
           <div className="lg:col-span-8 lg:pl-16">
              <h2 className="font-serif text-3xl md:text-4xl uppercase mb-8 border-b border-brand-gold/20 pb-4">Наши Ценности</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 <div>
                    <h3 className="font-serif text-xl uppercase mb-4 text-brand-gold">Честность</h3>
                    <p className="text-sm opacity-60 leading-relaxed">Мы открыто говорим о результатах и всегда стремимся превзойти ваши ожидания, создавая атмосферу абсолютного доверия.</p>
                 </div>
                 <div>
                    <h3 className="font-serif text-xl uppercase mb-4 text-brand-gold">Эстетика</h3>
                    <p className="text-sm opacity-60 leading-relaxed">Красота в деталях — ключ к психологическому комфорту. Мы создаем пространство, которое радует глаз и успокаивает ум.</p>
                 </div>
                 <div>
                    <h3 className="font-serif text-xl uppercase mb-4 text-brand-gold">Прогресс</h3>
                    <p className="text-sm opacity-60 leading-relaxed">Наши мастера постоянно совершенствуют свои техники, объединяя древние знания с современными анатомическими открытиями.</p>
                 </div>
                 <div>
                    <h3 className="font-serif text-xl uppercase mb-4 text-brand-gold">Тишина</h3>
                    <p className="text-sm opacity-60 leading-relaxed">В мире шума мы предлагаем роскошь молчания и возможность услышать потребности своего собственного тела.</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-brand-moss/30 p-12 md:p-24 text-center border border-brand-gold/10">
           <p className="font-serif text-3xl md:text-5xl italic text-brand-gold mb-8 italic leading-tight">
             "Мы не просто салон. Мы — точка возврата к себе."
           </p>
           <div className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-40">Основатель RAISE</div>
        </div>
      </div>
    </div>
  );
};
