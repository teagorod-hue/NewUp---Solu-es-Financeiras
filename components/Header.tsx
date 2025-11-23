import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import Button from './Button';
import { COMPANY_NAME, SLOGAN } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Fraudes bancárias e golpes do Pix', href: '#problemas' },
    { label: 'Voos', href: '#voos' },
    { label: 'Depoimentos', href: '#depoimentos' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/80 backdrop-blur-md shadow-lg py-3 border-b border-white/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-neon-green group-hover:scale-110 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-neon-green blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-heading text-2xl font-bold text-white tracking-tight leading-none">{COMPANY_NAME}</h1>
            <p className="text-[10px] text-neon-green/80 uppercase tracking-widest leading-none mt-1">{SLOGAN}</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative text-slate-300 hover:text-white transition-colors text-sm font-medium group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all group-hover:w-full"></span>
            </a>
          ))}
          <Button variant="outline" className="px-5 py-2 text-sm" icon={false}>
            Consultar Especialista
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-xl border-b border-neon-green/20 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 shadow-2xl">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-slate-300 hover:text-neon-green text-lg font-medium border-b border-white/5 pb-2" 
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <Button className="w-full justify-center">
              Falar com Especialista
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;