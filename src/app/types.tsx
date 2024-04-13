export interface StrapiContact {
  typename: string;
  fields: StrapiInputField[];
  sendTo: string;
  bgImage: StrapiStyledImage;
}

export interface StrapiInputField {
  label: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "calendar"
    | "time"
    | "time_range"
    | "dropdown"
    | "money"
    | "number"
    | "textarea"
    | "date";
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

export interface StrapiStyledImage {
  typename: string;
  media: StrapiImage;
  alt: string;
  borderWidth: string | null;
  borderColor: string | null;
  borderRadius: string | null;
  grayscalePercent: number;
  filterColor: string | null;
  filterOpacity: number;
}

export interface StrapiStyledButton {
  typename: string;
  type: "link" | "modal" | "pdf" | "submit";
  text: string;
  href: string;
  icon: string | null;
  textColor: string;
  bgColor: string;
  borderColor: string | null;
  borderWidth: string | null;
  borderRadius: string | null;
}

export interface RichTextParagraph {
  type: string;
  children: RichTextSegment[];
}

type RichTextSegment = {
  type: "text" | "link";
  text?: string;
  url?: string;
  bold?: boolean;
  italic?: boolean;
  children?: RichTextSegment[];
};

export interface StrapiSection {
  typename: string;
  header: string;
  sortOrder: number;
  text: RichTextParagraph[];
  image: StrapiStyledImage;
  caption: string | null;
  bgImage: StrapiStyledImage;
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
  text: RichTextParagraph[];
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
}

export interface StrapiHero {
  typename: string;
  header: string;
  subheader: string;
  buttons: StrapiStyledButton[];
  text: RichTextParagraph[];
  image: StrapiStyledImage;
  bgImageOpacity: number;
  bgFilterOpacity: number;
  bgImage: StrapiStyledImage;
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
}
