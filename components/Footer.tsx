import React, { useState } from 'react';
import { ShieldCheck, Instagram, Facebook, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_NAME } from '../constants';

const legalItems = [
  {
    title: "Termos de Uso",
    content: "Os Termos de Uso regulam a utilização dos serviços oferecidos pela NewUp, estabelecendo as responsabilidades e direitos dos usuários. Ao acessar nossa plataforma e utilizar nossos serviços, você concorda com as condições estabelecidas, garantindo um entendimento claro sobre as práticas e políticas adotadas pela nossa equipe jurídica."
  },
  {
    title: "Privacidade",
    content: "A Política de Privacidade descreve como coletamos, utilizamos e protegemos as suas informações pessoais durante o uso dos nossos serviços. Garantimos que seus dados serão tratados de maneira confidencial e de acordo com as leis de proteção de dados, para que sua experiência conosco seja segura e transparente."
  },
  {
    title: "Contato",
    content: "Se tiver qualquer dúvida ou precisar de assistência, entre em contato conosco através do e-mail: newuprecfin@gmail.com. Estamos disponíveis para esclarecer suas questões e fornecer o suporte necessário."
  }
];

const Footer: React.FC = () => {
  const [selectedLegal, setSelectedLegal] = useState<typeof legalItems[0] | null>(null);

  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-16 pb-8 relative z-30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-8 h-8 text-neon-green" />
              <h2 className="font-heading text-2xl font-bold text-white">{COMPANY_NAME}</h2>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Sua parceira na busca por justiça financeira. Tecnologia e expertise jurídica unidas para recuperar o que é seu por direito.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/thenewup/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/anewup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              {legalItems.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => setSelectedLegal(item)}
                    className="hover:text-neon-green transition-colors text-left"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">A NewUp é uma plataforma de mediação e tecnologia jurídica. Não somos um escritório de advocacia.</p>
        </div>
      </div>

      {/* Legal Content Modal */}
      <AnimatePresence>
        {selectedLegal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLegal(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-navy-900 border border-white/10 rounded-2xl p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedLegal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-heading font-bold text-white mb-6 text-neon-green">
                {selectedLegal.title}
              </h3>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {selectedLegal.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;