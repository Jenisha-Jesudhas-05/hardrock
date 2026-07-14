import React from 'react';

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="9"
    height="16"
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.75 0.75L7.75 7.75L0.75 14.75"
      stroke="#242628"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronRight;
