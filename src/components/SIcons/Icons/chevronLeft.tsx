import React from 'react';

const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="9"
    height="16"
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.75 14.75L0.75 7.75L7.75 0.75"
      stroke="#909091"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronLeft;
