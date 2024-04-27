import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  List,
} from '@phosphor-icons/react';

export type IconTypes = 'facebook' | 'instagram' | 'twitter' | 'list';
export interface IconProps {
  type: IconTypes;
  size: number;
  color: string;
}
export const iconMap = (props: {
  size: number;
  color: string;
}): Record<IconTypes, React.ReactNode> => ({
  facebook: <FacebookLogo alt="Facebook Logo" {...props} />,
  instagram: <InstagramLogo alt="Instagram Logo" {...props} />,
  twitter: <TwitterLogo alt="Twitter Logo" {...props} />,
  list: <List alt="List icon" {...props} />,
});

export const Icon = ({ type, size, color }: IconProps) => {
  return iconMap({ size, color })[type];
};
