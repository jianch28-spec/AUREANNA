
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-primary/10 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-3 text-primary">
             <div className="w-8 h-8">
               <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                 <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"/>
               </svg>
             </div>
             <span className="text-xl font-extrabold uppercase tracking-tight">Aureanna</span>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Design contemporaneo con radici artigianali. Specializzata in identità visive che durano nel tempo tra Monza, Milano e la Brianza.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Social</h4>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-neutral-100 rounded-lg hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a href="#" className="p-3 bg-neutral-100 rounded-lg hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 text-sm text-neutral-400 font-medium">
          <p>© 2024 Aureanna Studio. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
