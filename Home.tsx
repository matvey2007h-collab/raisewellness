import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

// --- Shared Components ---
export const SectionTitle = ({ children, number }: { children: React.ReactNode; number: string }) => (
  <div className="flex items-baseline gap-2 md:gap-4 mb-10 md:mb-16 border-b border-brand-gold/20 pb-4">
    <span className="font-serif italic text-2xl md:text-4xl text-brand-gold opacity-40">{number}</span>
    <h2 className="font-serif text-3xl md:text-7xl tracking-tight leading-none uppercase text-brand-gold">{children}</h2>
  </div>
);

export const Button = ({ children, primary = false, className = "", onClick, type = "button" }: { children: React.ReactNode; primary?: boolean; className?: string; onClick?: () => void; type?: "button" | "submit" | "reset" }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type={type}
    onClick={onClick}
    className={`px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all ${
      primary 
        ? "bg-brand-gold text-brand-forest hover:bg-brand-cream" 
        : "border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-forest"
    } ${className}`}
  >
    {children}
  </motion.button>
);

export const Home = () => {
  return (
    <div className="bg-brand-forest">
      {/* 1. ATTENTION: Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-end p-6 md:p-16 overflow-hidden">
        <div className="absolute top-24 md:top-12 left-6 md:left-12 text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold text-brand-gold z-20">
          ESTABLISHED 2018 • MOSCOW / ОБРАЗ ЖИЗНИ
        </div>
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/massage-luxury/1920/1080" 
            alt="Luxury Spa Interior" 
            className="w-full h-full object-cover grayscale opacity-20 scale-110 md:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-brand-forest/60 to-transparent" />
        </div>

        <div className="relative z-10 editorial-grid h-full items-end pb-8 md:pb-12 border-b border-brand-gold/30">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] md:text-[12px] tracking-[0.4em] mb-4 text-brand-gold opacity-60 uppercase font-medium">The Art of Restoration</p>
              <h1 className="font-serif text-[28vw] md:text-[22vw] lg:text-[18vw] leading-[0.7] uppercase tracking-tighter mb-8 md:mb-12 text-brand-gold select-none font-normal">
                Raise
              </h1>
              <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-12">
                <p className="max-w-xs md:max-w-md text-lg md:text-2xl font-light italic leading-tight text-brand-cream/80">
                  Возвращаем искусство тишины через мастерски созданные тактильные ощущения.
                </p>
                <div className="flex gap-4 w-full md:w-auto">
                  <Link to="/booking" className="flex-1 md:flex-none">
                    <Button primary className="w-full !px-12">Записаться</Button>
                  </Link>
                  <div className="hidden md:block vertical-text text-[10px] tracking-[0.3em] font-medium opacity-40 uppercase pt-4 border-l border-brand-gold/20 pl-4">
                    Signature Rituals
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM: The Modern Struggle */}
      <section className="py-20 md:py-32 px-6 md:px-16 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto editorial-grid">
          <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0 lg:pr-24 lg:border-r lg:border-brand-gold/10">
             <SectionTitle number="01">Проблема</SectionTitle>
             <div className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-6 font-bold block">The Human Cost</div>
             <p className="text-sm leading-loose opacity-70">
                Современная жизнь требует постоянного присутствия, но редко позволяет осознанность. Мы часами склоняемся над экранами, сжимая свою энергию и накапливая напряжение, которое в итоге становится невидимым барьером между тем, кто мы есть, и тем, как мы себя чувствуем.
              </p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:pl-24">
            <p className="font-serif text-3xl md:text-6xl leading-[1.05] mb-8 md:mb-12 text-brand-gold">
              Груз цифрового мира отражается в ваших <span className="italic text-brand-cream">плечах</span> и <span className="italic text-brand-cream">дыхании</span>.
            </p>
            <div className="grid grid-cols-1 gap-12 text-base md:text-lg font-light leading-relaxed opacity-80 italic">
              <p>
                Хроническая усталость — это не просто недостаток сна. Это неспособность тела отпустить внешний шум. Ваши мышцы помнят каждый дедлайн, каждый стресс и каждое несказанное слово.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION: The Raise Method */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-brand-moss/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 md:gap-16 relative z-10">
          <div className="lg:col-span-7">
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-6 md:mb-8 font-bold block">Our Philosophy</span>
            <h2 className="font-serif text-5xl md:text-[9vw] leading-none uppercase mb-8 md:mb-12">
              Метод <br /><span className="italic text-brand-gold">Восхождения</span>
            </h2>
            <p className="text-lg md:text-2xl mb-12 md:mb-16 font-light opacity-90 leading-relaxed max-w-2xl border-l border-brand-gold/40 pl-6 md:pl-8">
              В Raise мы не просто делаем массаж. Мы деконструируем паттерны напряжения и пересобираем ваше физическое состояние через дисциплинированный сплав анатомической науки и терапевтической интуиции.
            </p>
            <Link to="/about">
              <Button className="w-full md:w-auto">Познакомиться с методом</Button>
            </Link>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div 
              initial={{ rotate: 10 }}
              whileInView={{ rotate: 0 }}
              className="w-full max-w-sm aspect-[3/4] border border-brand-gold/30 p-2 overflow-hidden bg-brand-forest"
            >
              <img 
                src="https://picsum.photos/seed/zen-sand/800/1200" 
                alt="Philosophy" 
                className="w-full h-full object-cover grayscale opacity-60" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ACHIEVEMENTS: In Numbers */}
      <section className="py-20 md:py-32 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
            {[
              { label: "Восстановленных клиентов", value: "12k+" },
              { label: "Мастеров высшей категории", value: "09" },
              { label: "Наград в индустрии", value: "03" },
              { label: "Натуральные компоненты", value: "100%" },
            ].map((stat, i) => (
              <div key={i} className="border-t border-brand-cream/20 pt-6 md:pt-8">
                <div className="font-serif text-4xl md:text-6xl mb-2 text-brand-gold">{stat.value}</div>
                <div className="text-[8px] md:text-[10px] tracking-[0.2em] font-bold uppercase opacity-50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF: Voices */}
      <section className="py-24 md:py-40 px-6 md:px-16 border-y border-brand-gold/10">
        <div className="max-w-5xl mx-auto text-center">
          <Quote className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-12 md:mb-16 text-brand-gold opacity-30" />
          <p className="font-serif text-2xl md:text-5xl leading-tight italic mb-10 md:mb-12 text-brand-gold">
            «После сеанса в RAISE я чувствую себя обновленным человеком. Это не просто массаж, это глубокая перезагрузка сознания.»
          </p>
          <div className="text-[10px] md:text-[12px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold text-brand-cream opacity-60">— АЛЕКСАНДР В., CEO TECH-CORP</div>
        </div>
      </section>

      {/* 7, 8: PRODUCT & SCARCITY */}
      <section className="py-20 md:py-32 px-6 md:px-16" id="rituals">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-6 lg:pr-24">
             <SectionTitle number="02">Услуги</SectionTitle>
             <div className="space-y-8 md:space-y-12">
                {[
                  { name: "Ритуал Глубоких Тканей", duration: "90 мин", price: "7,500 ₽" },
                  { name: "Авторская Ароматерапия", duration: "60 мин", price: "5,000 ₽" },
                  { name: "Террапия Лавовыми Камнями", duration: "75 мин", price: "6,200 ₽" },
                ].map((service, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-brand-gold/10 pb-6 md:pb-8">
                    <div className="max-w-[70%] text-left">
                      <h3 className="font-serif text-lg md:text-2xl uppercase mb-1 md:mb-2 leading-tight">{service.name}</h3>
                      <p className="text-[9px] md:text-xs opacity-50 uppercase tracking-widest">{service.duration}</p>
                    </div>
                    <span className="font-serif text-base md:text-xl text-brand-gold whitespace-nowrap">{service.price}</span>
                  </div>
                ))}
             </div>
             <Link to="/services" className="inline-block mt-8 md:mt-12 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-brand-gold border-b border-brand-gold/40">Посмотреть все услуги</Link>
          </div>
          
          <div className="lg:col-span-6 mt-8 lg:mt-0">
             <motion.div 
               whileHover={{ y: -5 }}
               className="bg-brand-cream text-brand-forest p-8 md:p-12 lg:p-16 flex flex-col justify-between h-full relative"
             >
                <div className="absolute top-0 right-0 p-6 md:p-8">
                   <div className="bg-brand-earth text-brand-cream px-3 md:px-4 py-1 text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
                      Только 3 места на сегодня
                   </div>
                </div>
                
                <div className="pt-8 md:pt-0">
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-gold mb-6 md:mb-8 block">Feature Ritual</span>
                  <h2 className="font-serif text-3xl md:text-5xl uppercase leading-none mb-6 md:mb-8">Deep Tissue <br />Ritual</h2>
                  <p className="text-sm leading-relaxed mb-8 md:mb-12 opacity-80 max-w-sm font-sans">
                    90 минут абсолютного погружения в покой. Глубокая проработка мышц и авторская ароматерапия для полного восстановления.
                  </p>
                  <div className="flex items-baseline gap-4 mb-8 md:mb-12">
                    <span className="text-3xl md:text-4xl font-serif font-bold text-brand-forest">8 500 ₽</span>
                    <span className="text-sm line-through opacity-30 tracking-widest">12 000 ₽</span>
                  </div>
                </div>

                <div className="space-y-12">
                  <Link to="/booking" className="block">
                    <Button primary className="w-full !bg-brand-forest !text-brand-cream hover:!bg-brand-moss !border-none !text-sm !py-5 md:!py-6">Записаться сейчас</Button>
                  </Link>
                  <div className="pt-8 border-t border-brand-forest/10 font-serif italic text-sm opacity-70">
                    Гарантия результата: Если вы не почувствуете расслабления в первые 15 минут, мы вернем полную стоимость сеанса.
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 11. WARNING & 12. REMINDER: Footer Info */}
      <section className="py-20 md:py-32 px-6 md:px-16 border-t border-brand-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-16">
          <div className="max-w-md text-left">
             <div className="flex items-center gap-4 text-brand-gold mb-6 md:mb-8">
                <AlertCircle className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Priority Notice</span>
             </div>
             <p className="text-[10px] md:text-[12px] uppercase tracking-widest leading-loose text-brand-gold opacity-60">
                Внимание: Мы принимаем гостей только по предварительной записи. Рекомендуем бронировать время за 48 часов для гарантии выбора мастера.
             </p>
          </div>
          
          <div className="text-left md:text-right w-full md:w-auto mt-8 md:mt-0">
             <div className="font-serif text-3xl md:text-6xl uppercase leading-[1.1] mb-6 md:mb-8">
                Ваше тело — ваш <br className="hidden md:block" />единственный <span className="text-brand-gold italic">дом</span>.
             </div>
             <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-gold">Позаботьтесь о нем в RAISE.</div>
          </div>
        </div>
      </section>
    </div>
  );
};
