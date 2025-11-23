import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', icon = true }) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-neon-green/50";
  
  const variants = {
    primary: "bg-neon-green text-navy-900 hover:bg-neon-green/90 shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)] hover:-translate-y-1",
    outline: "border border-neon-green text-neon-green hover:bg-neon-green/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)]",
    ghost: "text-slate-300 hover:text-neon-green hover:bg-navy-700/50"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className} group`}
    >
      {variant === 'primary' && (
        <div className="absolute top-0 -left-full w-1/2 h-full skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
      )}
      
      {icon && <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />}
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default Button;