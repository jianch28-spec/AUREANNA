
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="reveal-up space-y-32 py-16">
      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <span className="text-primary/60 font-bold uppercase tracking-[0.2em] text-xs">Fondatrice & Designer</span>
          <h1 className="text-6xl md:text-8xl font-black leading-none">Chi Sono</h1>
          <p className="text-xl text-neutral-600 font-medium leading-relaxed">
            Sono una fashion designer e graphic designer basata tra <span className="text-primary font-bold">Monza, Milano e la Brianza</span>. Il mio percorso nasce dal desiderio di unire l'estetica tangibile della moda alla forza comunicativa della grafica.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full flex items-center gap-2 text-sm font-bold text-primary">
              <span className="material-symbols-outlined text-lg">location_on</span> Monza & Brianza
            </div>
            <div className="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full flex items-center gap-2 text-sm font-bold text-primary">
              <span className="material-symbols-outlined text-lg">palette</span> Graphic Design
            </div>
            <div className="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full flex items-center gap-2 text-sm font-bold text-primary">
              <span className="material-symbols-outlined text-lg">checkroom</span> Fashion Design
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -bottom-10 -left-10 w-full h-full bg-primary/5 rounded-[40px] -z-10"></div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-primary/10 group">
            <img
              src="https://picsum.photos/seed/aureanna-portrait/800/1000"
              alt="Aureanna Portrait"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Vision / Concept Section */}
      <section className="bg-primary/5 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto shadow-inner">
             <span className="material-symbols-outlined text-4xl">auto_awesome</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary">L'Aura: Il Cuore della Mia Visione</h2>
          <p className="text-2xl md:text-3xl font-serif italic text-neutral-600 leading-loose">
            "Il concetto di 'aura' non è solo estetica: è l'essenza e l'identità profonda che rende ogni creazione unica. Nel mio lavoro, cerco di tradurre questa vibrazione invisibile in forme tangibili, sia nel fashion design che nella grafica. Ogni brand, ogni abito, ha un'anima propria che merita di risplendere."
          </p>
          <div className="w-24 h-0.5 bg-primary/20 mx-auto"></div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <h2 className="text-4xl font-black text-center">Le mie specializzazioni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Box 1 */}
          <div className="bg-white p-12 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-2xl transition-all space-y-8">
             <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
               <span className="material-symbols-outlined text-3xl">apparel</span>
             </div>
             <h3 className="text-3xl font-black">Fashion Design</h3>
             <p className="text-neutral-500 font-medium leading-relaxed">
               Dall'ideazione del concept alla realizzazione dei bozzetti, progetto collezioni che riflettono uno stile sofisticato e contemporaneo. La mia attenzione è rivolta alla scelta dei tessuti e alla cura del dettaglio sartoriale, con un forte legame alla tradizione della Brianza.
             </p>
             <ul className="space-y-4">
               {['Ricerca Tendenze & Moodboard', 'Sviluppo Collezione', 'Technical Drawing (Flat Sketch)'].map(t => (
                 <li key={t} className="flex items-center gap-3 text-sm font-bold">
                   <span className="w-2 h-2 bg-primary rounded-full"></span> {t}
                 </li>
               ))}
             </ul>
          </div>
          {/* Box 2 */}
          <div className="bg-white p-12 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-2xl transition-all space-y-8">
             <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
               <span className="material-symbols-outlined text-3xl">brush</span>
             </div>
             <h3 className="text-3xl font-black">Graphic Design</h3>
             <p className="text-neutral-500 font-medium leading-relaxed">
               Aiuto brand e liberi professionisti a costruire una presenza visiva coerente ed elegante. Credo nella semplicità come massima espressione di lusso. Dalla brand identity alla comunicazione digitale, ogni pixel è pensato per comunicare valore.
             </p>
             <ul className="space-y-4">
               {['Brand Identity & Logo Design', 'UI/UX Design per il Fashion', 'Social Media Content Creation'].map(t => (
                 <li key={t} className="flex items-center gap-3 text-sm font-bold">
                   <span className="w-2 h-2 bg-primary rounded-full"></span> {t}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* Territory Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-bg-dark rounded-[40px] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden">
          <div className="relative z-10 lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Radici in Lombardia, <br />visione internazionale.</h2>
            <p className="text-lg text-white/70 leading-relaxed font-medium">
              Aureanna opera attivamente sul territorio tra <span className="text-primary font-bold">Monza</span>, <span className="text-primary font-bold">Milano</span> e la <span className="text-primary font-bold">Brianza</span>. Questo triangolo di eccellenza artigianale e innovazione è la mia costante fonte d'ispirazione.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95">
                Fissa un incontro
              </button>
              <button className="text-sm font-bold border-b border-primary py-1 hover:text-primary transition-colors">
                Vedi i miei progetti
              </button>
            </div>
          </div>
          <div className="relative z-10 lg:w-1/3 flex justify-center">
            <div className="w-72 h-72 rounded-full border border-primary/30 flex flex-col items-center justify-center text-center p-8 space-y-4 animate-[pulse_4s_infinite]">
              <span className="material-symbols-outlined text-5xl text-primary">map</span>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-primary mb-1">Operativa a</span>
                <span className="text-2xl font-black">Milano & Brianza</span>
              </div>
            </div>
          </div>
          {/* Deco circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
