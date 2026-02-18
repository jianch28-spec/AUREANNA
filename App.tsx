
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import { Page } from './types.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple hash-based router simulation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage(Page.HOME);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={(p) => window.location.hash = p} />;
      case Page.SERVIZI:
        return <Services />;
      case Page.CHI_SONO:
        return <About />;
      case Page.CONTATTI:
        return <Contact />;
      default:
        return <Home onNavigate={(p) => window.location.hash = p} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
