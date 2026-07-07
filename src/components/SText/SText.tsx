import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { STextProps } from './SText.types';

const SText: React.FC<STextProps> = ({
  variant = 'bodySm',
  children,
  classStyles = '',
  ...props
}) => {
  const baseClasses = 'font-sans';

  const variantClasses = {
    displaymd: 'font-display text-3xl font-bold text-text-black leading-display',
    displaysm: 'font-display text-2xl font-bold text-text-black leading-display',
    h1: 'text-2xl font-bold text-text-black leading-relaxed',
    h2: 'text-xl font-bold text-text-black leading-relaxed',
    bodyLg: 'text-lg font-bold text-text-black leading-snug',
    bodyMd: 'text-md font-bold text-text-black leading-normal',
    bodySm: 'text-sm font-bold text-text-black leading-normal',
    bodyXs: 'text-xs font-bold text-text-black leading-relaxed',
  };

  return (
    <p className={twMerge(baseClasses, variantClasses[variant], classStyles)} {...props}>
      {children}
    </p>
  );
};

export default SText;
