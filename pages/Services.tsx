
import React from 'react';

const Services: React.FC = () => {
  const categories = [
    {
      title: "Branding & Strategia di Marca",
      icon: "fingerprint",
      items: [
        "Naming (creazione del nome del brand)",
        "Sviluppo del concept e posizionamento",
        "Progettazione del logo",
        "Sistema di identità visiva completo",
        "Palette colori e tipografie",
        "Manuale di brand (Brand Guidelines)",
        "Direzione creativa"
      ]
    },
    {
      title: "Web Design & UI/UX",
      icon: "language",
      items: [
        "Web design (progettazione visiva del sito)",
        "UI Design (User Interface)",
        "UX Design (User Experience)",
        "Wireframe e prototipazione",
        "Architettura visiva e struttura contenuti",
        "Ottimizzazione estetica e coerenza digitale"
      ]
    },
    {
      title: "Design Editoriale",
      icon: "auto_stories",
      items: [
        "Riviste e magazine",
        "Cataloghi prodotto",
        "Dossier aziendali",
        "Presentazioni professionali",
        "Impaginazione e layout grafico"
      ]
    },
    {
      title: "Packaging",
      icon: "inventory_2",
      items: [
        "Progettazione packaging",
        "Etichette",
        "Scatole e confezioni",
        "Sviluppo linea visiva di prodotto",
        "Studio grafico per brand commerciali"
      ]
    },
    {
      title: "Segnaletica",
      icon: "signpost",
      items: [
        "Sistemi di segnaletica per spazi commerciali",
        "Segnaletica aziendale e corporate",
        "Segnaletica istituzionale",
        "Progettazione grafica ambientale"
      ]
    },
    {
      title: "Contenuti Digitali & Video",
      icon: "movie",
      items: [
        "Editing video",
        "Video promozionali per brand",
        "Contenuti visivi per social media",
        "Direzione estetica per contenuti digitali"
      ]
    }
  ];

  const fashionDetails = [
    "Sviluppo collezioni",
    "Progettazione e confezione di abbigliamento femminile",
    "Realizzazione capi su misura",
    "Figurino e illustrazione di moda",
    "Bozzetti creativi e tecnici",
    "Elaborazione di schede tecniche con misure, materiali e specifiche di produzione",
    "Studio vestibilità e dettagli costruttivi",
    "Creazione identità e branding per marchi di moda",
    "Direzione creativa applicata alla moda"
  ];

  return (
    <div className="reveal-up">
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Il mio Core Business</span>
          <h1 className="text-5xl md:text-7xl font-black text-bg-dark leading-tight">
            Servizi Creativi <span className="text-primary italic font-serif">Integrali</span>
          </h1>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto font-medium leading-relaxed">
            In Aureanna sviluppo progetti dove strategia, identità e visione estetica si fondono per costruire marchi solidi e contemporanei.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
              </div>
              <h3 className="text-2xl font-black mb-6 text-bg-dark">{cat.title}</h3>
              <ul className="space-y-4 flex-grow">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-500 text-sm font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-primary/30 rounded-full mt-1.5 shrink-0 group-hover:bg-primary transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Fashion Design Special Section */}
      <section className="bg-bg-dark text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 relative z-10">
            <div className="inline-flex items-center gap-4 bg-primary/20 border border-primary/30 px-6 py-2 rounded-full">
              <span className="material-symbols-outlined text-primary text-xl">checkroom</span>
              <span className="text-xs font-black uppercase tracking-widest text-primary">Specializzazione High-End</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight">Design di Moda</h2>
            <p className="text-xl text-white/70 font-medium leading-relaxed">
              Sviluppo completo di progetti moda, dal concept creativo alla realizzazione finale del capo, con un focus sull'eccellenza tecnica.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {fashionDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 py-3 border-b border-white/10 group">
                  <span className="material-symbols-outlined text-primary text-sm group-hover:scale-125 transition-transform">verified</span>
                  <span className="text-sm font-bold text-white/90">{detail}</span>
                </div>
              ))}
            </div>
            <button className="bg-primary text-white px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform active:scale-95">
              Richiedi Portfolio Moda
            </button>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/fashion1/600/800" className="rounded-3xl w-full aspect-[3/4] object-cover border border-white/10" alt="Fashion Design Sketch" />
                <img src="https://picsum.photos/seed/fashion2/600/800" className="rounded-3xl w-full aspect-square object-cover border border-white/10" alt="Tailoring Detail" />
              </div>
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/fashion3/600/800" className="rounded-3xl w-full aspect-square object-cover border border-white/10" alt="Fabric Selection" />
                <img src="https://picsum.photos/seed/fashion4/600/800" className="rounded-3xl w-full aspect-[3/4] object-cover border border-white/10" alt="Final Garment" />
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-bg-dark p-8 rounded-full shadow-2xl hidden md:block">
              <span className="block text-4xl font-black text-primary">0-100</span>
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">Sviluppo <br/>Prodotto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-black">Pronti a elevare la vostra immagine?</h2>
          <p className="text-lg text-neutral-500 font-medium">Ogni progetto è un viaggio unico. Combino la precisione tecnica delle schede tecniche moda con la sensibilità estetica del branding contemporaneo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contatti" className="px-10 py-5 bg-primary text-white rounded-xl font-black hover:shadow-xl hover:shadow-primary/30 transition-all">Lavoriamo Insieme</a>
            <a href="#chi-sono" className="px-10 py-5 border-2 border-primary text-primary rounded-xl font-black hover:bg-primary hover:text-white transition-all">Chi Sono</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
