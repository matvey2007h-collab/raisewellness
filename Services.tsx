import React from 'react';
import { SectionTitle, Button } from './Home';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
  const categories = [
    {
      title: "Терапевтические Ритуалы",
      items: [
        { name: "Глубокая проработка мышц", time: "90 / 120 мин", price: "7,500 / 9,000 ₽", desc: "Устранение триггерных точек, работа с осанкой и снятие глубокого напряжения." },
        { name: "Спортивное восстановление", time: "60 / 90 мин", price: "5,500 / 7,000 ₽", desc: "Подготовка к нагрузкам или ускоренная регенерация после тренировок." },
        { name: "Лимфодренажный эффект", time: "60 мин", price: "4,800 ₽", desc: "Стимуляция микроциркуляции, детокс и борьба с отечностью." },
        { name: "Миофасциальный релиз", time: "75 мин", price: "6,000 ₽", desc: "Работа с соединительной тканью для восстановления гибкости и снятия фасциальных зажимов." }
      ]
    },
    {
      title: "Восточные Традиции",
      items: [
        { name: "Шиацу-массаж", time: "60 мин", price: "5,200 ₽", desc: "Японская техника надавливания на биологически активные точки для гармонизации энергии." },
        { name: "Классический Тайский ритуал", time: "90 мин", price: "6,800 ₽", desc: "Пассивная йога и глубокое растяжение мышц в традициях северного Таиланда." },
        { name: "Балийское восстановление", time: "75 мин", price: "5,800 ₽", desc: "Сочетание растяжки, похлопываний и ароматерапии для тотального релакса." },
        { name: "Массаж травяными мешочками", time: "60 мин", price: "5,500 ₽", desc: "Прогревание мышц горячими компрессами с гималайскими травами." }
      ]
    },
    {
      title: "Эстетика и Релакс",
      items: [
        { name: "Авторская Ароматерапия", time: "60 / 90 мин", price: "5,000 / 6,500 ₽", desc: "Погружение в мир эфирных масел редких сортов для психоэмоционального баланса." },
        { name: "Стоун-терапия Black Pearl", time: "75 мин", price: "6,200 ₽", desc: "Тепло черного нефрита проникает глубоко, расслабляя нервную систему." },
        { name: "Ритуал для лица 'Сияние'", time: "45 мин", price: "3,800 ₽", desc: "Миофасциальный массаж лица с использованием сывороток премиум-класса." },
        { name: "Массаж головы 'Глубокий сон'", time: "30 мин", price: "2,500 ₽", desc: "Целенаправленное снятие ментального напряжения и улучшение кровотока." },
        { name: "Скрабирование 'Морская соль'", time: "40 мин", price: "3,200 ₽", desc: "Обновление кожи и подготовка к основному ритуалу с использованием солей Мертвого моря." }
      ]
    },
    {
       title: "Комплексные Программы",
       items: [
         { name: "Погружение в Raise", time: "150 мин", price: "15,000 ₽", desc: "Трехчасовое путешествие, включающее скраб, обертывание и полный массаж тела." },
         { name: "Антистресс-день", time: "120 мин", price: "11,500 ₽", desc: "Специальный сет процедур для людей с высокой умственной нагрузкой." },
         { name: "Дуэт 'Синергия'", time: "90 мин", price: "13,000 ₽", desc: "Синхронный ритуал для двоих в специально подготовленном люксе." }
       ]
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <SectionTitle number="02">Услуги</SectionTitle>
        
        <div className="mb-16 md:mb-24">
           <p className="font-serif text-3xl md:text-5xl uppercase leading-tight text-brand-gold mb-8 md:mb-12">
             Выберите свой путь к <span className="italic text-brand-cream">равновесию</span>.
           </p>
           <p className="text-sm opacity-60 leading-relaxed max-w-2xl mb-12 md:mb-16">
             Каждая процедура в нашем меню — это результат многолетней практики. Мы не предлагаем шаблонных решений. Перед каждым сеансом мастер проводит короткую консультацию, чтобы адаптировать ритуал под текущее состояние вашего тела и ума.
           </p>
        </div>

        <div className="space-y-24 md:space-y-32">
           {categories.map((cat, i) => (
             <div key={i} className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-16">
                <div className="lg:col-span-4 lg:pr-16 mb-4 lg:mb-0">
                   <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-tighter text-brand-gold lg:sticky lg:top-40 border-b border-brand-gold/20 pb-4 lg:border-none">{cat.title}</h2>
                </div>
                <div className="lg:col-span-8 space-y-12 md:space-y-16">
                   {cat.items.map((item, j) => (
                     <div key={j} className="flex flex-col sm:flex-row justify-between items-start border-b border-brand-gold/10 pb-8 group">
                        <div className="max-w-md mb-6 sm:mb-0">
                           <h3 className="font-serif text-xl md:text-2xl uppercase mb-2 group-hover:text-brand-gold transition-colors">{item.name}</h3>
                           <p className="text-[10px] md:text-xs opacity-50 mb-4 uppercase tracking-widest">{item.time}</p>
                           <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="sm:text-right w-full sm:w-auto">
                           <div className="font-serif text-xl md:text-2xl text-brand-gold mb-6">{item.price}</div>
                           <Link to="/booking">
                             <Button className="w-full sm:w-auto !px-6 !py-2 !text-[10px]">Записаться</Button>
                           </Link>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>

        <div className="mt-40 bg-brand-cream text-brand-forest p-12 md:p-24 editorial-grid items-center">
           <div className="col-span-12 lg:col-span-8">
              <h2 className="font-serif text-4xl mb-8">Персональный Сертификат</h2>
              <p className="text-sm opacity-80 leading-loose mb-12 pr-12">
                Подарите возможность восстановления тем, кто вам дорог. Наши сертификаты оформляются на дизайнерской бумаге и упаковываются в крафтовую коробку с нашими фирменными маслами. Доступны номиналы от 5 000 ₽.
              </p>
              <Button className="!bg-brand-forest !text-brand-cream border-none">Оформить в подарок</Button>
           </div>
           <div className="col-span-12 lg:col-span-4 mt-16 lg:mt-0">
              <div className="aspect-square border border-brand-forest/20 p-2">
                 <img src="https://picsum.photos/seed/gift/600/600" alt="Gift Box" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
