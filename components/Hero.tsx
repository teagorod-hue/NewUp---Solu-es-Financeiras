import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, TrendingUp, ShieldCheck, Lock, DollarSign, Gavel, Scale, AlertTriangle, Plane, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-navy-950">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: 'linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
          }} 
        />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl relative z-40"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-bold uppercase tracking-wider mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
            </span>
            Tecnologia Jurídica Avançada
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Recupere seu <span className="text-neon-green text-glow">dinheiro</span> e seus direitos agora.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
            Especialistas em reverter <a href="#problemas" onClick={(e) => scrollToSection(e, 'problemas')} className="relative z-50 inline-block text-white font-medium hover:text-neon-green transition-colors border-b border-white/20 hover:border-neon-green cursor-pointer">fraudes bancárias</a>, <a href="#problemas" onClick={(e) => scrollToSection(e, 'problemas')} className="relative z-50 inline-block text-white font-medium hover:text-neon-green transition-colors border-b border-white/20 hover:border-neon-green cursor-pointer">golpes de Pix</a> e <a href="#voos" onClick={(e) => scrollToSection(e, 'voos')} className="relative z-50 inline-block text-white font-medium hover:text-blue-400 transition-colors border-b border-white/20 hover:border-blue-400 cursor-pointer">problemas com voos</a>. Sem burocracia, 100% digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="w-full sm:w-auto text-lg px-8 py-4 shadow-[0_0_40px_rgba(100,255,218,0.2)]">
              Falar com Especialista
            </Button>
            <a 
              href="#como-funciona"
              onClick={(e) => scrollToSection(e, 'como-funciona')}
              className="group inline-flex items-center justify-center px-6 py-4 rounded-lg font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all gap-2 relative z-10"
            >
              Como funciona
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
             {[
               { icon: <DollarSign className="w-4 h-4" />, text: "Análise Gratuita" },
               { icon: <Lock className="w-4 h-4" />, text: "Segurança Total" },
               { icon: <ShieldCheck className="w-4 h-4" />, text: "Suporte 24h" }
             ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="p-1.5 rounded-full bg-neon-green/10 text-neon-green">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
             ))}
          </div>
        </motion.div>

        {/* Abstract 3D Visual */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center perspective-1000">
          <motion.div 
            initial={{ opacity: 0, rotateX: 10, rotateY: 10 }}
            animate={{ opacity: 1, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-square"
          >
             {/* Central "Phone/Dashboard" Element */}
             <div className="absolute inset-0 animate-float flex items-center justify-center">
                
                {/* Back Glow */}
                <div className="absolute inset-10 bg-gradient-to-tr from-neon-green to-blue-600 rounded-full blur-[80px] opacity-30"></div>

                {/* Main Card */}
                <div className="relative w-72 h-[420px] md:w-80 md:h-[480px] bg-navy-800/80 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col p-6 overflow-hidden z-20 transform -rotate-6 transition-transform hover:rotate-0 duration-500">
                   {/* Card Header */}
                   <div className="flex items-center justify-between mb-6">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                       <ShieldCheck className="w-4 h-4 text-neon-green" />
                     </div>
                     <div className="text-[10px] uppercase tracking-widest text-slate-500">Proteção Jurídica Ativa</div>
                   </div>

                   {/* Card Body - Values & Icons */}
                   <div className="space-y-4">
                     <div>
                       <div className="text-3xl font-heading font-bold text-white mb-1">R$ 12.450</div>
                       <div className="text-sm text-neon-green flex items-center gap-1">
                         <TrendingUp className="w-3 h-3" />
                         <span>Valor da Causa</span>
                       </div>
                     </div>

                     {/* Legal Icons Row */}
                     <div className="flex items-center justify-around py-4 border-y border-white/5">
                        <div className="flex flex-col items-center gap-1">
                          <Gavel className="w-5 h-5 text-neon-gold" />
                          <span className="text-[9px] text-slate-500 uppercase">Justiça</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Scale className="w-5 h-5 text-blue-400" />
                          <span className="text-[9px] text-slate-500 uppercase">Equilíbrio</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <ShieldCheck className="w-5 h-5 text-neon-green" />
                          <span className="text-[9px] text-slate-500 uppercase">Proteção</span>
                        </div>
                     </div>
                     
                     {/* Progress Graph */}
                     <div className="h-24 w-full mt-2 flex items-end gap-2 px-2">
                       {[30, 45, 40, 60, 55, 80, 75, 95].map((h, i) => (
                         <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                            className={`flex-1 rounded-t-sm ${i > 5 ? 'bg-neon-green' : 'bg-gradient-to-t from-blue-900 to-blue-500'}`}
                         />
                       ))}
                     </div>
                   </div>

                   {/* Bottom Status */}
                   <div className="mt-auto bg-navy-950/50 rounded-xl p-4 flex items-center gap-3 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-neon-gold animate-pulse" />
                      <div className="text-xs text-slate-300">
                        Status do Caso: <span className="text-white font-semibold">Consulta Digital</span>
                      </div>
                   </div>
                   
                   {/* Shine Effect */}
                   <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-[0.05] animate-shine" />
                </div>

                {/* Floating Badge 1 - Pix (Top Left) */}
                <motion.div 
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  className="absolute top-20 -left-4 md:top-32 md:-left-32 z-30"
                >
                  <div className="glass-card p-3 rounded-xl flex items-center gap-3 pr-4 border-l-2 border-l-orange-500 bg-navy-900/60 backdrop-blur-md shadow-xl max-w-[220px] md:max-w-none">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-0.5">Contestado com Sucesso</div>
                      <div className="text-sm font-bold text-white">Pix de R$ 8.000</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 2 - Flight (Bottom Right) */}
                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-24 -right-4 md:bottom-24 md:-right-28 z-30"
                >
                  <div className="glass-card p-3 rounded-xl flex items-center gap-3 pr-4 border-l-2 border-l-blue-500 bg-navy-900/60 backdrop-blur-md shadow-xl max-w-[220px] md:max-w-none">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                      <Plane className="w-5 h-5" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-0.5">Indenização Aprovada</div>
                      <div className="text-sm font-bold text-white">R$ 5.000,00</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 3 - Indemnity (Top Right) */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="absolute top-12 -right-4 md:top-20 md:-right-24 z-30"
                >
                  <div className="glass-card p-3 rounded-xl flex items-center gap-3 pr-4 border-l-2 border-l-neon-green bg-navy-900/60 backdrop-blur-md shadow-xl max-w-[220px] md:max-w-none">
                    <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[10px] text-neon-green font-bold uppercase tracking-wider mb-0.5">Indenização Aprovada</div>
                      <div className="text-sm font-bold text-white">R$ 4.800,00</div>
                    </div>
                  </div>
                </motion.div>

             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;