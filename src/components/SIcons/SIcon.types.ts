import type React from 'react';
import type { IconName } from '.';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}
