import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { SButtonProps } from './SButton.types';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-sans font-bold leading-relaxed whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-yellow text-text-black text-xs leading-loose',
        secondary: 'bg-border text-text-black hover:bg-black/10',
        outline: 'bg-transparent text-text-black border border-border',
        gold: 'bg-gold text-text-black text-sm leading-loose',
        ghost: 'bg-transparent text-text-black border-none',
      },
      size: {
        lg: 'h-10 px-6 text-base rounded-full',
        md: 'h-8 px-5 text-sm rounded-full',
        sm: 'h-7 px-4 text-sm rounded-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  },
);

const SButton = React.forwardRef<HTMLButtonElement, SButtonProps>(
  ({ variant, size, classStyles = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(buttonVariants({ variant, size }), classStyles)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

SButton.displayName = 'SButton';

export default SButton;
