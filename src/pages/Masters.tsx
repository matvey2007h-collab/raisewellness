import React from 'react';
import { SectionTitle, Button } from './Home';
import { Link } from 'react-router-dom';

export const Masters = () => {
  const masters = [
    {
      name: "Анна Волкова",
      role: "Старший специалист",
      specialization: "Миофасциальный релиз, глубокая проработка",
      bio: "Более 12 лет практики. Анна специализируется на работе с хроническими зажимами и профессиональными травмами. Её подход — это сочетание силы и анатомической точности.",
      image: "https://picsum.photos/seed/m1/800/1000"
    },
    {
      name: "Дмитрий Морозов",
      role: "Топ-мастер",
      specialization: "Аювердические техники, стоун-терапия",
      bio: "Дмитрий обучался в Индии и Таиланде. Он мастерски объединяет энергетические практики с классическим массажем, создавая ритуалы глубокого заземления.",
      image: "https://picsum.photos/seed/m2/800/1000"
    },
    {
      name: "Мария Рей",
      role: "Ведущий эстетист",
      specialization: "Лимфодренаж, скульптурный массаж лица",
      bio: "Мария верит, что внешняя красота — это отражение внутреннего баланса. Её сеансы — это медитативное путешествие к сиянию кожи и спокойствию ума.",
      image: "https://picsum.photos/seed/m3/800/1000"
    },
    {
      name: "Игорь Чайка",
      role: "Специалист по остеопластике",
      specialization: "Коррекция осанки, мягкие мануальные техники",
      bio: "Игорь работает с телом как с архитектурным объектом. Он находит первопричины дискомфорта и восстанавливает естественную симметрию движений.",
      image: "https://picsum.photos/seed/m4/800/1000"
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <SectionTitle number="03">Мастера</SectionTitle>
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
           <h2 className="font-serif text-3xl md:text-5xl uppercase leading-tight text-brand-gold max-w-2xl">
              Проводники в мир вашего <span className="italic text-brand-cream">спокойствия</span>.
           </h2>
           <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 font-bold border-l border-brand-gold/20 pl-4 py-2">
             All Specialists are certified Level 5+
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-32">
           {masters.map((master, i) => (
             <div key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden border border-brand-gold/10 p-2 mb-8 bg-brand-forest">
                   <img 
                     src={master.image} 
                     alt={master.name} 
                     className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-105" 
                     referrerPolicy="no-referrer"
                   />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                   <div>
                      <h3 className="font-serif text-2xl md:text-3xl uppercase text-brand-gold">{master.name}</h3>
                      <p className="text-[10px] tracking-widest uppercase opacity-40 font-bold">{master.role}</p>
                   </div>
                   <div className="text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-brand-gold/60 border border-brand-gold/20 px-3 py-1">
                      {master.specialization}
                   </div>
                </div>
                <p className="text-sm opacity-60 leading-loose mb-8 max-w-lg">
                   {master.bio}
                </p>
                <Link to="/booking">
                   <Button className="w-full md:w-auto !px-6 !py-2 !text-[10px]">Записаться к мастеру</Button>
                </Link>
             </div>
           ))}
        </div>

        <div className="mt-32 md:mt-40 border-t border-brand-gold/10 pt-16 md:pt-24 editorial-grid">
           <div className="col-span-12 lg:col-span-5">
              <h3 className="font-serif text-2xl md:text-3xl uppercase mb-6 md:mb-8">Присоединяйтесь к команде</h3>
              <p className="text-sm opacity-60 leading-relaxed mb-12">
                 Мы всегда находимся в поиске талантливых специалистов, которые разделяют наши ценности и стремление к высочайшим стандартам. Если вы верите в искусство массажа так же, как мы — давайте работать вместе.
              </p>
              <Button>Отправить резюме</Button>
           </div>
           <div className="col-span-12 lg:col-span-7 mt-16 lg:mt-0 flex justify-end hidden md:flex">
              <div className="vertical-text text-[10px] tracking-[0.5em] uppercase opacity-20 font-bold h-64 border-l border-brand-gold/10 pl-4">
                 Raising Standards Daily
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
