import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { BrandColors } from './contexts/BrandContext';
import { IconType } from './constants';

export interface StrapiContact {
  typename: string;
  fields: StrapiInputField[];
  sendTo: string;
  header: string;
  bgColor: Color;
  bgImage: StrapiStyledImage;
}

export interface StrapiInputField {
  label: string;
  type:
    | 'text'
    | 'email'
    | 'tel'
    | 'calendar'
    | 'time'
    | 'time_range'
    | 'dropdown'
    | 'money'
    | 'number'
    | 'textarea'
    | 'date';
  options?: string[];
}

export interface StrapiConfig {
  typename: string;
  isUnderConstruction: boolean;
  isMaintenanceMode: boolean;
}

export interface StrapiImage {
  typename: string;
  url: string;
}

export type Color = keyof BrandColors;

export type StrapiBrandColor = {
  color: Color;
} | null;

export interface StrapiStyledImage {
  typename: string;
  media: StrapiImage;
  alt: string;
  border: StrapiBorder;
  filter: StrapiFilter;
}

export type StrapiBorder = {
  width: string | null;
  color: Color;
  radius: string | null;
} | null;

type StrapiFilter = {
  color: Color;
  opacity: number;
  grayscale: number;
} | null;

export interface StrapiStyledButton {
  typename: string;
  type: 'link' | 'modal' | 'pdf' | 'submit';
  text: string;
  href: string;
  icon: string | null;
  color: Color;
  bgColor: Color;
  border: StrapiBorder;
  shadow: string;
}

export interface StrapiSection {
  typename: string;
  header: string;
  variant: 'left' | 'right';
  sortOrder: number;
  text: BlocksContent;
  image: StrapiStyledImage;
  caption: string | null;
  bgImage: StrapiStyledImage;
  bgColor: Color;
}

export interface StrapiBrand {
  typename: string;
  primary: string;
  secondary: string;
  accent: string;
  light: string;
  dark: string;
  fonts: {
    typename: string;
    family: string;
    url: string;
  }[];
  companyName: string;
}

export interface StrapiFooter {
  typename: string;
  text: BlocksContent;
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
}

export interface StrapiHero {
  typename: string;
  header: string;
  variant: 'leftAligned' | 'centerAligned' | 'split';
  subheader: string;
  buttons: StrapiStyledButton[];
  text: BlocksContent;
  image: StrapiStyledImage | null;
  bgImageOpacity: number;
  bgFilterOpacity: number;
  bgImage: StrapiStyledImage;
}

export interface StrapiImageScroll {
  speed: 'normal' | 'fast' | 'slow';
  images: StrapiImage[];
  header?: string;
  bgColor?: Color;
  color?: Color;
}

export interface StrapiProjectSection {
  typename: string;
  header: string;
  bgColor: Color;
  color: Color;
  articles: StrapiArticle[];
}

export interface StrapiArticle {
  typename: string;
  title: string;
  description: BlocksContent;
  images: StrapiImage[];
  link: string;
}

export interface StrapiCarousel {
  typename: string;
  displayArrows: boolean;
  images: StrapiStyledImage[];
  transitionTime: number;
  displayCounter: boolean;
  aspectRatioWidth: number;
  aspectRatioHeight: number;
}

export interface StrapiFeature {
  typename: string;
  header: string;
  blurb: string;
  icon: IconType;
}

export interface StrapiFeatureSection {
  typename: string;
  header: string;
  description: string;
  backsplashColor: Color;
  color: Color;
  features: StrapiFeature[];
}

export interface Client {
  typename: string;
  clientId: string;
  hero: StrapiHero;
  sections: StrapiSection[];
  brand: StrapiBrand;
  footer: StrapiFooter;
  contact: StrapiContact;
  imageScroll: StrapiImageScroll;
  config: StrapiConfig;
  projectSection: StrapiProjectSection;
  carousel: StrapiCarousel;
}

export type FontFamily = { typename: string; family: string; url: string };
