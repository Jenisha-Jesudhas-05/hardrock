import React from 'react';

export interface SButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
  size?: 'lg' | 'md' | 'sm';
  classStyles?: string;
}
