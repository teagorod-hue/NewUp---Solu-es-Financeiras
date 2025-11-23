import React from 'react';
import { ShieldAlert, Plane, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const SolutionsOverview: React.FC = () => {
  return (
    <section className="py-12 bg-navy-950 relative z-20 border-b border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-center gap-2 mb-8">
           <div className="h-px w-8 bg-neon-green/30"></div>
           <span className="text-neon-green text-xs font-bold uppercase tracking-widest">Nossas Soluções</span>
           <div className="h-px w-8 bg-neon-green/30"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Fraudes Financeiras */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-navy-800/40 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-navy-800/60 hover:border-neon-green/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] hover:-translate-y-1 flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-16 h-16 rounded-xl bg-neon-green/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <ShieldAlert className="w-8 h-8 text-neon-green" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                Golpes e Pix
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Recuperação de valores via MED (Mecanismo Especial de Devolução) e processos contra bancos por falha de segurança.
              </p>
              <div className="inline-flex items-center text-neon-green font-bold text-sm gap-2">
                Avaliar meu caso <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          {/* Card 2: Direitos do Passageiro */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-navy-800/40 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-navy-800/60 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.1)] hover:-translate-y-1 flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Plane className="w-8 h-8 text-blue-400" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Problemas Aéreos
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Indenização imediata para Voos Cancelados, Atrasos (+4h), Overbooking e Bagagens Extraviadas (Baseado na Resolução 400 da ANAC).
              </p>
              <div className="inline-flex items-center text-blue-400 font-bold text-sm gap-2">
                Avaliar meu caso <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;