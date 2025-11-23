import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Clock, UserX, Briefcase, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const flightProblems = [
  {
    icon: <Plane className="w-10 h-10" />,
    title: "Voo Cancelado",
    subtitle: "Sem aviso prévio",
    description: "Se o seu voo foi cancelado com menos de 72h de antecedência ou se você chegou ao destino com 4h+ de atraso.",
    detailedDescription: "Cancelamentos de voo sem aviso prévio de no mínimo 72 horas geram transtornos graves. Pela Resolução 400 da ANAC, você tem direito a reacomodação em outro voo (da mesma ou de outra companhia), reembolso integral ou execução do serviço por outra modalidade. Além disso, se o cancelamento gerou perda de compromissos ou falta de assistência material, cabe indenização por danos morais.",
    delay: 0.1
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Atraso de Voo",
    subtitle: "Mais de 4 horas",
    description: "Atrasos superiores a 4 horas que atrapalharam seus compromissos ou geraram desconforto dão direito a indenização.",
    detailedDescription: "Atrasos geram obrigações progressivas para a companhia: comunicação (1h), alimentação (2h) e hospedagem/transporte (4h). Se você chegou ao destino final com mais de 4 horas de atraso em relação ao horário original, ou se a companhia falhou no dever de assistência, você tem direito a buscar compensação financeira pelos danos sofridos.",
    delay: 0.2
  },
  {
    icon: <UserX className="w-10 h-10" />,
    title: "Overbooking",
    subtitle: "Embarque Negado",
    description: "Quando a companhia aérea impede seu embarque por excesso de passageiros. Prática abusiva com alta chance de indenização.",
    detailedDescription: "A preterição de embarque (overbooking) ocorre quando a empresa vende mais passagens do que a capacidade do avião. É uma prática abusiva. Se você foi impedido de embarcar, tem direito a uma compensação imediata (DES) paga pela companhia no aeroporto, além de poder pleitear indenização judicial por danos morais pelo constrangimento e atraso na viagem.",
    delay: 0.3
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Bagagem",
    subtitle: "Extravio ou Danos",
    description: "Mala perdida por mais de 3 dias (viagem nacional) ou 7 dias (internacional), ou devolvida danificada.",
    detailedDescription: "Chegar ao destino sem seus pertences é frustrante. Se sua mala foi extraviada (temporária ou definitivamente) ou violada, a companhia aérea deve ressarcir gastos emergenciais (roupas/itens de higiene) e indenizar pelo extravio. O prazo para retorno é de 7 dias (voos domésticos) ou 21 dias (internacionais). Após isso, a indenização é devida.",
    delay: 0.4
  }
];

const FlightSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<typeof flightProblems[0] | null>(null);

  return (
    <section id="voos" className="py-24 relative bg-navy-950 overflow-hidden border-t border-white/5">
      {/* Visual Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Plane className="w-3 h-3" />
            Novo Serviço
          </motion.div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Problemas com seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Voo?</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Além de problemas bancários, agora ajudamos você a ser compensado por falhas de companhias aéreas. Clique nos itens abaixo para saber mais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {flightProblems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: item.delay }}
              onClick={() => setSelectedProblem(item)}
              className="group relative p-6 rounded-2xl bg-navy-800/40 border border-white/5 hover:bg-navy-800/60 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 z-10 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.icon}
                </div>

                {/* Tooltip (Only visible if not clicked/modal open logic could be applied, but kept for hover UX) */}
                <AnimatePresence>
                  {hoveredIndex === index && !selectedProblem && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="hidden md:block absolute bottom-full left-0 mb-3 w-64 p-4 bg-white rounded-xl shadow-2xl z-50 pointer-events-none"
                    >
                      <div className="absolute bottom-[-6px] left-6 w-3 h-3 bg-white transform rotate-45 border-b border-r border-slate-100"></div>
                      <h4 className="text-navy-900 font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-1 mt-1">
                        Clique para ver detalhes completos
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-400/80">{item.subtitle}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              
              <div className="mt-4 flex items-center text-xs font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Ver detalhes <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
            <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Avaliar meu caso de Voo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        </div>
      </div>

      {/* Expanded Details Modal */}
      <AnimatePresence>
        {selectedProblem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProblem(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-navy-900 border border-blue-500/30 rounded-2xl p-8 relative shadow-[0_0_50px_rgba(59,130,246,0.2)] overflow-hidden"
            >
              {/* Blue Glow Background */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/20 blur-[80px] pointer-events-none" />
              
              <button
                onClick={() => setSelectedProblem(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                  {selectedProblem.icon}
                </div>

                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-400">{selectedProblem.subtitle}</div>
                <h3 className="text-3xl font-heading font-bold text-white mb-6">
                  {selectedProblem.title}
                </h3>
                
                <div className="bg-navy-950/50 rounded-xl p-6 border border-white/5 mb-8">
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {selectedProblem.detailedDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-400">Análise gratuita baseada na Resolução 400 da ANAC.</p>
                  </div>
                  <div className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                     <p className="text-sm text-slate-400">Pagamento somente no êxito (se você ganhar).</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                  <Button className="w-full justify-center bg-blue-500 text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                    Avaliar meu caso
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FlightSection;