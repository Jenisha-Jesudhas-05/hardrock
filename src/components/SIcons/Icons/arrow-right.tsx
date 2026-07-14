import React from 'react';

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-2 -2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.375 6.875L17.5 10L14.375 13.125M17.5 10H2.5"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRight;
