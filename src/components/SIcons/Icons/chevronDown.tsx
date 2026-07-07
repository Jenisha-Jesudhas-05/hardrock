import React from 'react';

const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.75 0.75L7.75 7.75L0.75 0.75"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronDown;
