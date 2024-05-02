import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  List,
  Headset,
  Gift,
  Student,
  Coffee,
} from '@phosphor-icons/react';

export type IconTypes =
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'list'
  | 'headset'
  | 'gift'
  | 'student'
  | 'coffee';
export interface IconProps {
  type: IconTypes;
  size: number;
  color: string;
}
export const iconMap = (props: {
  size: number;
  color: string;
}): Record<IconTypes, JSX.Element> => ({
  facebook: <FacebookLogo alt="Facebook Logo" {...props} />,
  instagram: <InstagramLogo alt="Instagram Logo" {...props} />,
  twitter: <TwitterLogo alt="Twitter Logo" {...props} />,
  list: <List alt="List icon" {...props} />,
  headset: <Headset alt="headset icon" {...props} />,
  gift: <Gift alt="gift icon" {...props} />,
  student: <Student alt="student icon" {...props} />,
  coffee: <Coffee alt="coffee cup icon" {...props} />,
});

export const Icon = ({ type, size, color }: IconProps) => {
  return iconMap({ size, color })[type];
};
