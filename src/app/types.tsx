import { type BlocksContent } from '@strapi/blocks-react-renderer';

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

export interface StrapiCoordinates {
  lat: number;
  lng: number;
  label?: string;
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

export type Color = 'primary' | 'secondary' | 'accent' | 'light' | 'dark';

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
  color: string;
  bgColor: string;
  border: StrapiBorder;
  shadow: string;
}

export interface StrapiSection {
  typename: string;
  header: string;
  variant: 'left' | 'right' | 'splitLeft' | 'splitRight';
  sortOrder: number;
  text: BlocksContent;
  image: StrapiStyledImage;
  caption: string | null;
  bgImage: StrapiStyledImage | null;
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

export interface StrapiMapSection {
  typename: string;
  theme: string;
  center: StrapiCoordinates;
  markers: StrapiCoordinates[];
  markerIcon: string;
  zoom: number;
}

export interface Client {
  typename: string;
  clientId: string;
  hero: StrapiHero;
  sections: StrapiSection[];
  brand: StrapiBrand;
  footer: StrapiFooter;
  contact: StrapiContact;
  config: StrapiConfig;
  mapSection: StrapiMapSection;
}
