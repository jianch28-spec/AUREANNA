
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="reveal-up">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-serif italic text-primary leading-[1.1] tracking-tight">
            Design con identità. <br />
            <span className="font-sans font-black not-italic text-bg-dark">Estetica con strategia.</span>
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-lg font-medium">
            Sono graphic designer e fashion designer in Monza e Brianza. Aiuto brand e professionisti a costruire un'immagine visiva solida, elegante e contemporanea.
          </p>
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => onNavigate(Page.SERVIZI)}
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Scopri i servizi
            </button>
            <button
              onClick={() => onNavigate(Page.CONTATTI)}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              Contattami
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3 transition-transform group-hover:rotate-0 duration-700"></div>
          <img
            src="https://picsum.photos/seed/aureanna-hero/1200/1500"
            alt="Vaso artistico minimalista"
            className="relative rounded-[40px] shadow-2xl w-full aspect-[4/5] object-cover transition-transform group-hover:-translate-y-2 duration-700"
          />
        </div>
      </section>

      {/* Sub-Hero / Studio Info */}
      <section className="bg-neutral-100 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Location: Lombardia</span>
          <h2 className="text-4xl md:text-5xl font-black">Studio creativo in Lombardia</h2>
          <p className="text-2xl font-serif italic text-neutral-600 leading-relaxed">
            "Aureanna è uno studio creativo con sede in Monza e Brianza specializzato in branding, web design, packaging e fashion design."
          </p>
          <div className="flex justify-center gap-12 pt-8 text-neutral-400">
            <span className="material-symbols-outlined text-4xl">pentagon</span>
            <span className="material-symbols-outlined text-4xl">architecture</span>
            <span className="material-symbols-outlined text-4xl">draw</span>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-black">Servizi su Misura</h2>
            <p className="text-neutral-500 font-medium max-w-md">Dall'ideazione alla realizzazione finale, trasformo la tua visione in realtà tangibile ed elegante.</p>
          </div>
          <button onClick={() => onNavigate(Page.SERVIZI)} className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary pb-1 transition-all">
            Vedi tutti i servizi
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: '1', label: 'Branding & Naming', desc: 'Identità visiva unica per distinguersi nel mercato.', color: 'bg-[#F2D7E6]/40', icon: 'fingerprint' },
            { id: '2', label: 'Web Design UI/UX', desc: 'Esperienze digitali intuitive che fondono estetica e funzionalità.', color: 'bg-neutral-100', icon: 'web_asset' },
            { id: '3', label: 'Packaging & Editoria', desc: 'Soluzioni cartacee eleganti che comunicano il valore del prodotto.', color: 'bg-[#F2D7E6]/40', icon: 'package_2' },
            { id: '4', label: 'Design di Moda', desc: "Dall'idea creativa allo sviluppo tecnico del prodotto fashion.", color: 'bg-neutral-100', icon: 'apparel' }
          ].map((item) => (
            <div key={item.id} className={`${item.color} p-8 rounded-2xl flex flex-col gap-6 hover:shadow-xl transition-all group`}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold">{item.label}</h3>
              <p className="text-neutral-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* My Approach */}
      <section className="bg-white py-24 px-6 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-20">Il mio approccio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { n: '01', t: 'Analisi e strategia', d: 'Capire il mercato e definire gli obiettivi di business.' },
               { n: '02', t: 'Concept creativo', d: "Esplorazione visiva e definizione dell'estetica." },
               { n: '03', t: 'Sviluppo progettuale', d: 'Trasformazione del concept in design esecutivo.' },
               { n: '04', t: 'Refinement e consegna', d: 'Perfezionamento dettagli e consegna finale.' }
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center text-center gap-4">
                 <span className="text-7xl font-black text-primary/10 tracking-tighter">{step.n}</span>
                 <h4 className="text-lg font-bold">{step.t}</h4>
                 <p className="text-neutral-500 text-sm px-4">{step.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-[#F2D7E6]/30 rounded-[40px] p-12 md:p-24 text-center space-y-8 border border-primary/5">
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">Hai un progetto in mente?</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
            Collaboriamo per creare qualcosa di straordinario. Raccontami la tua idea e costruiamo insieme il tuo futuro visivo.
          </p>
          <button
            onClick={() => onNavigate(Page.CONTATTI)}
            className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all active:scale-95"
          >
            Richiedi un preventivo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
