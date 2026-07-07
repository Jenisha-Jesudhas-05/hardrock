import React from 'react';

export interface STextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'displaymd' | 'displaysm' | 'h1' | 'h2' | 'bodyLg' | 'bodyMd' | 'bodySm' | 'bodyXs';
  children: React.ReactNode;
  classStyles?: string;
}
