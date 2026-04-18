import React from 'react';
import { SectionTitle, Button } from './Home';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

export const Contacts = () => {
  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <SectionTitle number="04">Контакты</SectionTitle>
        
        <div className="editorial-grid mb-32">
           <div className="col-span-12 lg:col-span-5 space-y-16">
              <div>
                 <h2 className="font-serif text-4xl uppercase mb-8 border-b border-brand-gold/20 pb-4">Связь с нами</h2>
                 <p className="text-sm opacity-60 leading-relaxed max-w-sm">Мы работаем исключительно по предварительной записи, чтобы обеспечить каждому гостю приватность и спокойствие.</p>
              </div>

              <div className="space-y-8">
                 <div className="flex items-start gap-6">
                    <div className="p-3 bg-brand-gold/10 text-brand-gold">
                       <MapPin size={20} />
                    </div>
                    <div>
                       <div className="text-[10px] tracking-widest uppercase font-bold text-brand-gold mb-2">Адрес</div>
                       <p className="text-sm opacity-80">ул. Покровка 22, Москва, 101000</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-6">
                    <div className="p-3 bg-brand-gold/10 text-brand-gold">
                       <Phone size={20} />
                    </div>
                    <div>
                       <div className="text-[10px] tracking-widest uppercase font-bold text-brand-gold mb-2">Телефон</div>
                       <p className="text-sm opacity-80">+7 (495) 123-4567</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-6">
                    <div className="p-3 bg-brand-gold/10 text-brand-gold">
                       <Mail size={20} />
                    </div>
                    <div>
                       <div className="text-[10px] tracking-widest uppercase font-bold text-brand-gold mb-2">Email</div>
                       <p className="text-sm opacity-80">welcome@raisesalon.com</p>
                    </div>
                 </div>
              </div>

              <div className="pt-8 border-t border-brand-gold/10">
                 <div className="text-[10px] tracking-widest uppercase font-bold text-brand-gold mb-6">Социальные сети</div>
                 <div className="flex gap-4">
                    <a href="#" className="p-4 border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-forest transition-all text-brand-gold">
                       <Instagram size={20} />
                    </a>
                    <a href="#" className="p-4 border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-forest transition-all text-brand-gold">
                       <MessageCircle size={20} />
                    </a>
                 </div>
              </div>
           </div>

           <div className="col-span-12 lg:col-span-7 mt-16 lg:mt-0">
              <div className="bg-brand-moss/20 p-8 md:p-12 border border-brand-gold/10 h-full">
                 <h2 className="font-serif text-3xl uppercase mb-8">Напишите нам</h2>
                 <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] tracking-widest uppercase font-bold opacity-40">Ваше имя</label>
                          <input type="text" className="w-full bg-brand-forest/40 border border-brand-gold/20 p-4 focus:border-brand-gold outline-none text-brand-cream transition-all" placeholder="Александр" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] tracking-widest uppercase font-bold opacity-40">Телефон</label>
                          <input type="tel" className="w-full bg-brand-forest/40 border border-brand-gold/20 p-4 focus:border-brand-gold outline-none text-brand-cream transition-all" placeholder="+7 (___) ___ __ __" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] tracking-widest uppercase font-bold opacity-40">Сообщение</label>
                       <textarea className="w-full bg-brand-forest/40 border border-brand-gold/20 p-4 h-32 focus:border-brand-gold outline-none text-brand-cream transition-all" placeholder="Оставьте ваш вопрос или пожелание..."></textarea>
                    </div>
                    <Button primary className="w-full md:w-auto">Отправить запрос</Button>
                 </form>
              </div>
           </div>
        </div>

        <div className="h-96 w-full border border-brand-gold/20 p-2 overflow-hidden bg-brand-moss/10">
           {/* Map Placeholder */}
           <div className="w-full h-full flex flex-col items-center justify-center grayscale opacity-40">
              <MapPin size={48} className="mb-4 text-brand-gold" />
              <div className="text-[10px] tracking-[0.5em] uppercase font-bold">Interactive Map View</div>
              <div className="text-[8px] tracking-[0.2em] mt-2 opacity-50">55.7590° N, 37.6430° E</div>
           </div>
        </div>
      </div>
    </div>
  );
};
