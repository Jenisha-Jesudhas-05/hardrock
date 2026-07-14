import React from 'react';

const Balcony = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.33268 10.8333V17.5M6.66602 10.8333V17.5M13.3327 10.8333V17.5M9.99935 10.8333V17.5M16.666 10.8333V17.5M1.66602 17.5H18.3327M1.66602 10.8333H18.3327M14.9993 8.33333V3C14.9993 2.86739 14.9467 2.74021 14.8529 2.64645C14.7591 2.55268 14.632 2.5 14.4993 2.5H5.49935C5.36674 2.5 5.23956 2.55268 5.1458 2.64645C5.05203 2.74021 4.99935 2.86739 4.99935 3V8.33333"
      stroke="#646366"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Balcony;
