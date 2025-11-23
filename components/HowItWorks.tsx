import React from 'react';
import { FileText, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    icon: <FileText className="w-8 h-8" />,
    title: "Relate o Caso",
    desc: "Entre em contato pelo WhatsApp e nos conte o que aconteceu. É rápido, sem burocracia e 100% online."
  },
  {
    id: "02",
    icon: <Search className="w-8 h-8" />,
    title: "Análise Gratuita",
    desc: "Nossa equipe jurídica avalia a viabilidade do seu caso sem custo para analisar. Temos as melhores condições para você."
  },
  {
    id: "03",
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Solução Rápida",
    desc: "Iniciamos as medidas extrajudiciais ou judiciais imediatamente para recuperar seu dinheiro e indenização."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-green/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Como funciona a <span className="text-neon-green">NewUp</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Simplificamos o processo jurídico para você. Em apenas 3 passos, você inicia a recuperação dos seus direitos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-neon-green/10 via-neon-green/50 to-neon-green/10 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-32 h-32 rounded-full bg-navy-900 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-neon-green/50 transition-colors duration-500 shadow-xl">
                 {/* Inner Circle Glow */}
                 <div className="absolute inset-2 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-navy-800/80 transition-colors">
                    <div className="text-neon-green transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                 </div>
                 {/* Step Number Badge */}
                 <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-neon-green text-navy-900 font-bold flex items-center justify-center shadow-lg border-4 border-navy-800 z-20">
                   {step.id}
                 </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 px-4 leading-relaxed">
                {step.desc}
              </p>
              
              {/* Mobile Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden my-8 text-neon-green/20 flex justify-center">
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;