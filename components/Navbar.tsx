
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: Page.HOME },
    { label: 'Servizi', page: Page.SERVIZI },
    { label: 'Chi Sono', page: Page.CHI_SONO },
    { label: 'Contatti', page: Page.CONTATTI },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-light/80 backdrop-blur-lg border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a 
          href={`#${Page.HOME}`} 
          className="flex items-center gap-3 text-primary group transition-all z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="w-8 h-8">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform group-hover:rotate-12 transition-transform">
              <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"/>
              <path opacity="0.4" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.0104 36.0767 8.68485 36.6314 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-xl font-extrabold uppercase tracking-tight">Aureanna</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.page}
              href={`#${link.page}`}
              className={`text-sm font-bold transition-all hover:text-primary relative group py-2 ${
                currentPage === link.page ? 'text-primary' : 'text-neutral-800'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${currentPage === link.page ? 'scale-x-100' : ''}`}></span>
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={`#${Page.CONTATTI}`}
            className="hidden sm:block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
          >
            Inizia un progetto
          </a>

          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 group"
            onClick={toggleMenu}
            aria-label="Apri menu"
          >
            <span className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bg-light/98 backdrop-blur-xl z-40 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.page}
              href={`#${link.page}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black uppercase tracking-tighter transition-all hover:scale-110 ${
                currentPage === link.page ? 'text-primary' : 'text-neutral-400'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`#${Page.CONTATTI}`}
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 bg-primary text-white px-10 py-4 rounded-xl text-lg font-black hover:shadow-xl transition-all"
          >
            Contattami Ora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
