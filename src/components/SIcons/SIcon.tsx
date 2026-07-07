import React from 'react';
import { twMerge } from 'tailwind-merge';

import { icons } from '.';
import type { IconProps } from './SIcon.types';

const Icon: React.FC<IconProps> = ({ name, size = 24, className, ...props }) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    return null;
  }

  return <SvgIcon width={size} height={size} className={twMerge(className)} {...props} />;
};

export default Icon;
