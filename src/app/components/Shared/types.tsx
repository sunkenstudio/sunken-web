export interface StrapiImage {
  typename: string;
  url: string;
}

export interface StrapiStyledImage {
  typename: string;
  media: StrapiImage;
  alt: string;
  borderWidth: string;
  borderColor: string;
  borderRadius: string;
  grayscalePercent: number;
  filterColor: string;
  filterOpacity: number;
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
  image: StrapiImage;
  caption: string;
  bgImageOpacity: number;
  bgFilterOpacity: number;
  bgImage: StrapiImage;
}

export interface StrapiBrand {
  typename: string;
  primary: string;
  secondary: string;
  accent: string;
  light: string;
  dark: string;
  font: {
    family: string;
    url: string;
  };
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
  button1: string;
  button2: string;
  text: RichTextParagraph[];
  image: StrapiStyledImage;
  bgImageOpacity: number;
  bgFilterOpacity: number;
  bgImage: StrapiImage;
}

export interface StrapiContact {
  typename: string;
  bgImage: StrapiImage;
  bgImageOpacity: number;
  bgFilterOpacity: number;
}

export interface Client {
  typename: string;
  clientId: string;
  hero: StrapiHero;
  sections: StrapiSection[];
  brand: StrapiBrand;
  footer: StrapiFooter;
  contact: StrapiContact;
}
