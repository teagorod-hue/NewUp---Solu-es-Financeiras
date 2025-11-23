import { ReactNode } from 'react';

export interface SectionProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}
