
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="reveal-up bg-soft-rose/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Header & Form */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight tracking-tighter">
                Parliamo del tuo progetto
              </h1>
              <p className="text-xl text-neutral-600 font-medium max-w-lg leading-relaxed">
                Se hai un’idea, un brand da costruire o un progetto da sviluppare, sarò felice di ascoltarti e aiutarti.
              </p>
            </div>

            <form className="bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white shadow-2xl shadow-primary/5 space-y-8" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Nome e Cognome</label>
                  <input type="text" placeholder="Il tuo nome" className="w-full bg-white/80 border-primary/10 rounded-xl h-14 px-6 focus:ring-primary focus:border-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Email</label>
                  <input type="email" placeholder="la-tua@email.it" className="w-full bg-white/80 border-primary/10 rounded-xl h-14 px-6 focus:ring-primary focus:border-primary transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Azienda / Brand</label>
                  <input type="text" placeholder="Nome attività" className="w-full bg-white/80 border-primary/10 rounded-xl h-14 px-6 focus:ring-primary focus:border-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Servizio di interesse</label>
                  <select className="w-full bg-white/80 border-primary/10 rounded-xl h-14 px-6 focus:ring-primary focus:border-primary transition-all appearance-none">
                    <option disabled selected>Seleziona un servizio</option>
                    <option>Identità Visiva / Branding</option>
                    <option>Web Design</option>
                    <option>Social Media Management</option>
                    <option>Consulenza Strategica</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Messaggio</label>
                <textarea rows={4} placeholder="Raccontami la tua idea..." className="w-full bg-white/80 border-primary/10 rounded-xl p-6 focus:ring-primary focus:border-primary transition-all"></textarea>
              </div>
              <button className="w-full bg-primary text-white h-16 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95">
                Invia richiesta
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:sticky lg:top-32 space-y-16 lg:pl-12">
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-primary">Dove mi trovo</h3>
                  <p className="text-neutral-500 font-medium text-lg">Monza e Brianza, Italia</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-primary">Scrivimi</h3>
                  <p className="text-neutral-500 font-medium text-lg">hello@aureanna.design</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Seguimi sui social</h3>
              <div className="flex gap-4">
                 <a href="#" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                   <span className="material-symbols-outlined text-3xl">camera</span>
                 </a>
                 <a href="#" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                   <span className="material-symbols-outlined text-3xl">link</span>
                 </a>
              </div>
            </div>

            <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group">
              <img src="https://picsum.photos/seed/texture-pink/1200/800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Texture" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <p className="text-white font-serif italic text-lg">"L'estetica è il linguaggio silenzioso del tuo brand."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-32 text-center space-y-4 max-w-4xl mx-auto">
          <p className="text-3xl md:text-4xl font-black text-primary leading-relaxed">
            Sarò felice di aiutarti a sviluppare un’identità visiva unica e autentica. Parliamone insieme 💛
          </p>
          <p className="text-neutral-400 text-sm font-bold uppercase tracking-widest pt-4">© 2024 Aureanna Studio. P.IVA 01234567890. Monza e Brianza.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
