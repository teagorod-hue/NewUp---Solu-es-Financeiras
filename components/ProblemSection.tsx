import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Banknote, Landmark, ArrowRight, X, ChevronUp } from 'lucide-react';
import Button from './Button';

const problems = [
  {
    icon: <AlertTriangle className="w-12 h-12" />,
    title: "Golpes Digitais",
    subtitle: "Engenharia Social e Phishing",
    shortDescription: "Foi vítima de falsos leilões, clonagem de WhatsApp ou links maliciosos? Recuperamos valores transferidos para estelionatários.",
    longDescription: "Golpes digitais, como falsos leilões, clonagem de WhatsApp e links maliciosos, são formas cada vez mais comuns de estelionato. Se você foi vítima dessas práticas, podemos ajudar a recuperar os valores que foram transferidos para criminosos. Nossos especialistas possuem a expertise necessária para reverter esses danos rapidamente e sem burocracia.",
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/50",
    shadow: "shadow-[0_0_30px_rgba(248,113,113,0.15)]",
    hoverBorder: "group-hover:border-red-400/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(248,113,113,0.15)]"
  },
  {
    icon: <Banknote className="w-12 h-12" />,
    title: "Fraudes no Pix",
    subtitle: "Falhas de Segurança Bancária",
    shortDescription: "Transferências indevidas ou sequestro relâmpago? O banco tem responsabilidade objetiva sobre a segurança do seu dinheiro.",
    longDescription: "O Pix, por ser uma plataforma rápida e eficiente, também tem sido alvo de fraudes. Se você sofreu uma transferência indevida, foi vítima de sequestro relâmpago ou encontrou alguma falha na segurança, o banco tem responsabilidade objetiva sobre a segurança do seu dinheiro. Nossos profissionais estão preparados para garantir a devolução dos valores e responsabilizar os envolvidos.",
    color: "text-neon-green",
    bg: "bg-neon-green/10",
    border: "border-neon-green/50",
    shadow: "shadow-[0_0_30px_rgba(100,255,218,0.15)]",
    hoverBorder: "group-hover:border-neon-green/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(100,255,218,0.15)]"
  },
  {
    icon: <Landmark className="w-12 h-12" />,
    title: "Erros Bancários",
    subtitle: "Cobranças e Negativação",
    shortDescription: "Juros abusivos, empréstimos não contratados ou nome sujo indevidamente. Exija a reparação e indenização por danos morais.",
    longDescription: "Erros bancários, como juros abusivos ou empréstimos não contratados, podem gerar prejuízos e danos morais. Se você está sendo cobrado de forma indevida ou teve seu nome comprometido sem autorização, é possível exigir reparação e indenização. Nossa equipe é especializada em reverter essas situações e garantir os seus direitos.",
    color: "text-neon-gold",
    bg: "bg-neon-gold/10",
    border: "border-neon-gold/50",
    shadow: "shadow-[0_0_30px_rgba(255,215,0,0.15)]",
    hoverBorder: "group-hover:border-neon-gold/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]"
  }
];

const ProblemSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    // If not expanded, expand. If already expanded, toggle off (or do nothing if we want 'X' to be the only close way)
    // Here we allow toggling if clicking the container, but 'X' is explicit.
    const isExpanding = expandedIndex !== index;
    setExpandedIndex(isExpanding ? index : null);

    if (isExpanding) {
      // Small delay to allow layout animation to start/finish before scrolling
      setTimeout(() => {
        const element = document.getElementById(`problem-card-${index}`);
        if (element) {
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <section id="problemas" className="py-24 relative bg-navy-900 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Problemas com <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-blue-400">Golpes ou Pix?</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Não aceite o prejuízo como algo definitivo. Clique nos cards abaixo para entender como podemos ajudar.
          </p>
        </div>

        {/* items-start prevents other cards from stretching vertically when one expands */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 items-start">
          {problems.map((item, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                layout
                key={index}
                id={`problem-card-${index}`}
                onClick={() => !isExpanded && handleCardClick(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                className={`group glass-card p-8 rounded-2xl transition-all duration-300 ${item.hoverBorder} ${item.hoverShadow} relative overflow-hidden ${
                  isExpanded ? 'ring-2 ring-neon-green/50 bg-navy-800 z-20' : 'cursor-pointer hover:-translate-y-2'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <motion.div 
                    layout="position"
                    className={`w-20 h-20 rounded-2xl ${item.bg} flex items-center justify-center transition-transform duration-300 ${!isExpanded && 'group-hover:scale-110 group-hover:rotate-3'}`}
                  >
                    <div className={`${item.color}`}>{item.icon}</div>
                  </motion.div>
                  
                  {isExpanded && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setExpandedIndex(null); }}
                      className="p-2 -mr-2 -mt-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  )}
                </div>
                
                <motion.div layout="position">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">{item.subtitle}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                </motion.div>

                <AnimatePresence mode="wait">
                  {isExpanded ? (
                    <motion.div
                      key="content-expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-slate-300 leading-relaxed text-base border-t border-white/10 pt-4 mb-6">
                        {item.longDescription}
                      </p>
                      
                      <div className="flex flex-col gap-3">
                         <div onClick={(e) => e.stopPropagation()}>
                            <Button className="w-full justify-center">
                                Falar com Especialista
                            </Button>
                         </div>
                         <button 
                            onClick={(e) => { e.stopPropagation(); setExpandedIndex(null); }}
                            className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                         >
                            Fechar detalhes <ChevronUp className="w-4 h-4" />
                         </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="content-collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <p className="text-slate-400 leading-relaxed mb-8 min-h-[80px]">
                        {item.shortDescription}
                      </p>
                      
                      <div className="flex items-center text-sm font-semibold text-white group-hover:text-neon-green transition-colors">
                        Ver detalhes <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-navy-800/50 rounded-2xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Não encontrou seu problema?</h4>
            <p className="text-slate-400">Fale com um especialista para uma análise personalizada do seu caso.</p>
          </div>
          <Button>
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;