import React from 'react';
import { ImageBroken } from '@phosphor-icons/react';

export interface IconProps {
  type: string;
  size: number;
  color: string;
}

export const iconMap = (
  iconName: string,
  props: {
    size: number;
    color: string;
  },
  callback: (icon: React.ReactNode) => void
) => {
  import('@phosphor-icons/react')
    .then((module) => {
      const DynamicIcon = module[iconName];
      if (DynamicIcon) {
        // @ts-ignore
        callback(<DynamicIcon alt={`${iconName} icon`} {...props} />);
      } else {
        throw new Error(`Icon '${iconName}' not found`);
      }
    })
    .catch((error) => {
      console.error(`Error loading icon '${iconName}':`, error);
      callback(<ImageBroken alt="Image Broken" {...props} />);
    });
};

export const Icon = ({ type, size, color }: IconProps) => {
  const [icon, setIcon] = React.useState<React.ReactNode>(null);

  React.useEffect(() => {
    iconMap(type, { size, color }, setIcon);
  }, [type, size, color]);

  return icon;
};
