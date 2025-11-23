import React from 'react';
import { Star, User, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Recuperou R$ 5.000",
    text: "Sofri um golpe do PIX e achei que estava tudo perdido. A NewUp me orientou e conseguimos o ressarcimento com o banco.",
    rating: 5
  },
  {
    id: 6,
    name: "Juliana R.",
    role: "Voo Cancelado",
    text: "Meu voo foi cancelado em cima da hora e perdi uma conexão importante. A NewUp conseguiu minha indenização por danos morais muito rápido.",
    rating: 5
  },
  {
    id: 2,
    name: "Fernanda Lima",
    role: "Problema com Cartão",
    text: "Atendimento excelente. Falaram comigo no WhatsApp rápido e em menos de 1 mês meu nome estava limpo.",
    rating: 5
  },
  {
    id: 7,
    name: "Marcos V.",
    role: "Bagagem Extraviada",
    text: "Fiquei 5 dias sem mala na Europa. A companhia não ajudava, mas a equipe da NewUp resolveu e fui compensado pelo transtorno.",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto Silva",
    role: "Empréstimo Indevido",
    text: "Profissionais sérios. A tecnologia deles facilita muito, não precisei ir em cartório nem nada. Recomendo demais!",
    rating: 5
  },
  {
    id: 8,
    name: "Beatriz L.",
    role: "Atraso de 8h",
    text: "Passei a noite no aeroporto por causa de um atraso injustificável. Recebi danos morais graças ao atendimento excelente de vocês.",
    rating: 5
  },
  {
    id: 4,
    name: "Ana Costa",
    role: "Golpe de Leilão",
    text: "Sensacional. Eu já tinha desistido, mas vi o anúncio e resolvi tentar. O resultado foi positivo!",
    rating: 5
  },
  {
    id: 5,
    name: "Paulo Souza",
    role: "Fraude Bancária",
    text: "O banco não queria me ouvir. Com a NewUp, eles resolveram em duas semanas. Muito obrigado!",
    rating: 5
  }
];

const SocialProof: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-navy-950 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white text-center mb-6">
          Quem confia na <span className="text-neon-green">NewUp</span>
        </h2>
        <div className="flex flex-col items-center gap-2">
           <div className="flex gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-neon-gold fill-neon-gold drop-shadow-lg" />)}
           </div>
           <p className="text-slate-400 text-sm font-medium">Mais de 2.000 casos analisados com sucesso</p>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full">
        {/* Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-8 animate-[scroll_60s_linear_infinite] w-max hover:[animation-play-state:paused] px-4 py-8">
          {/* Triple the array to create seamless loop effect with enough buffer */}
          {[...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`}
              className="relative w-[320px] md:w-[420px] p-8 rounded-2xl bg-navy-800/50 backdrop-blur-sm border border-white/5 flex-shrink-0 hover:border-neon-green/30 hover:bg-navy-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] cursor-default group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-neon-green/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center text-slate-300 shadow-inner">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{review.name}</h4>
                  <p className="text-xs text-neon-green font-bold uppercase tracking-wide bg-neon-green/10 px-2 py-0.5 rounded-full inline-block mt-1">{review.role}</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-base leading-relaxed italic mb-6">
                "{review.text}"
              </p>
              
              <div className="flex pt-4 border-t border-white/5 justify-between items-center">
                 <div className="flex gap-1 text-neon-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                 </div>
                 <span className="text-xs text-slate-500">Verificado</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;