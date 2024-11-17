import {
  Client,
  Color,
  StrapiArticle,
  StrapiBrand,
  StrapiCarousel,
  StrapiConfig,
  StrapiContact,
  StrapiFeature,
  StrapiFeatureSection,
  StrapiFooter,
  StrapiHero,
  StrapiImage,
  StrapiImageScroll,
  StrapiInputField,
  StrapiProjectSection,
  StrapiSection,
  StrapiStyledButton,
  StrapiStyledImage,
} from '@/app/types';
import { type BlocksContent } from '@strapi/blocks-react-renderer';

export const ButtonFixture = (
  overrides: Partial<StrapiStyledButton> = {}
): StrapiStyledButton => ({
  typename: 'ComponentCommonButton',
  type: 'link',
  text: 'BOOK AN EVENT',
  href: '#contact',
  icon: null,
  color: '#ffffff' as Color,
  bgColor: '#9D121A' as Color,
  border: {
    color: 'light',
    width: null,
    radius: '2rem',
  },
  shadow: '',
  ...overrides,
});

export const RichTextFixture = (
  overrides: { text?: string } = {}
): BlocksContent => [
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        text: 'Corridor Cocktails provides a portable mini bar, craft cocktails, skilled bartenders and anything you need to make your event amazing! ',
        ...overrides,
      },
    ],
  },
];

export const StyledImageFixture = (
  overrides: Partial<StrapiStyledImage> = {}
): StrapiStyledImage => ({
  typename: 'ComponentCommonImage',
  media: {
    typename: 'UploadFile',
    url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/b181fb8a2e37c5523f5f625b11628738.avif',
  },
  alt: 'Craft cocktail with lemon twist',
  border: {
    width: '.25rem',
    color: 'secondary',
    radius: '99rem',
  },
  filter: null,
  ...overrides,
});

export const ImageFixture = (
  overrides: Partial<StrapiImage> = {}
): StrapiImage => ({
  typename: 'UploadFile',
  url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/b8c12199347804e795219ef484f5572e.jpeg',
  ...overrides,
});

export const CarouselFixture = (
  overrides: Partial<StrapiCarousel> = {}
): StrapiCarousel => ({
  typename: 'Carousel',
  displayArrows: true,
  images: [
    StyledImageFixture(),
    StyledImageFixture({
      media: {
        url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/8203015ace4f442ef439488dcd11d914.jpeg',
        typename: 'UploadFile',
      },
      alt: 'Outrigger canoe',
    }),
    StyledImageFixture({
      media: {
        url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/4af0a0e9e19b8dfde009a6b216c9f7bb.JPG',
        typename: 'UploadFile',
      },
      alt: 'Dragon boat',
    }),
  ],
  transitionTime: 1000,
  displayCounter: true,
  aspectRatioWidth: 4,
  aspectRatioHeight: 3,
  ...overrides,
});

export const HeroFixture = (
  overrides: Partial<StrapiHero> = {}
): StrapiHero => ({
  typename: 'Hero',
  header: 'Corridor Cocktails',
  variant: 'leftAligned',
  subheader: 'A one-of-a-kind mobile cocktail bar experience',
  text: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'Corridor Cocktails provides a portable mini bar, craft cocktails, skilled bartenders and anything you need to make your event amazing! ',
        },
      ],
    },
  ],
  image: {
    typename: 'ComponentCommonImage',
    media: {
      typename: 'UploadFile',
      url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/597ee6441f99aff5999e28ce065b563b.jpeg',
    },
    alt: 'Company Logo - Cocktail glass with two cherries',
    border: {
      width: '.25rem',
      color: 'secondary',
      radius: '99rem',
    },
    filter: {
      grayscale: 0,
      color: 'primary',
      opacity: 0,
    },
  },
  bgImageOpacity: 0.8,
  bgFilterOpacity: 0.25,
  bgImage: {
    typename: 'ComponentCommonImage',
    media: {
      typename: 'UploadFile',
      url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/e1b053e4603d44705ac074325111d66b.jpg',
    },
    alt: 'Bg Image - Table with cocktails and cards',
    border: null,
    filter: {
      grayscale: 0,
      color: 'secondary',
      opacity: 0.6,
    },
  },
  buttons: [
    {
      typename: 'ComponentCommonButton',
      type: 'link',
      text: 'BOOK AN EVENT',
      href: '#contact',
      icon: null,
      color: '#ffffff' as Color,
      bgColor: '#9D121A' as Color,
      border: {
        color: 'light',
        width: null,
        radius: '2rem',
      },
      shadow: '',
    },
  ],
  ...overrides,
});

export const SectionFixture = (
  overrides: Partial<StrapiSection> = {}
): StrapiSection => ({
  typename: 'Section',
  header: 'What We Do',
  sortOrder: 1,
  bgColor: 'primary',
  text: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: "Hosting a party? Need a bartender? I'm your girl! We'll create a custom cocktail menu for your event. ",
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: '',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: '',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'From small events in your backyard to corporate parties, gallery openings, weddings, and local community events, let us supply your party with libations that will impress your guests.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: '',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: '',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'Together we will create the perfect menu of cocktails, beer, and wine. Corridor Cocktails will make your bar dreams come true!',
        },
      ],
    },
  ],
  variant: 'left',
  image: {
    typename: 'ComponentCommonImage',
    media: {
      typename: 'UploadFile',
      url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/b181fb8a2e37c5523f5f625b11628738.avif',
    },
    alt: 'Craft cocktail with lemon twist',
    border: {
      width: '.25rem',
      color: 'secondary',
      radius: '99rem',
    },
    filter: null,
  },
  caption: 'caption goes here',
  bgImage: {
    typename: 'ComponentCommonImage',
    media: {
      typename: 'UploadFile',
      url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/368ef30c049d5e73fc77113499547b2f.svg',
    },
    alt: 'Background image - Red fabric',
    border: null,
    filter: {
      grayscale: 0,
      color: 'light',
      opacity: 1,
    },
  },
  ...overrides,
});

export const BrandFixture = (
  overrides: Partial<StrapiBrand> = {}
): StrapiBrand => ({
  typename: 'Brand',
  primary: '#9D121A',
  secondary: '#320808',
  accent: '#F7DFDB',
  light: '#FFF',
  dark: '#210709',
  fonts: [
    {
      typename: 'ComponentCommonFont',
      url: 'https://fonts.googleapis.com/css2?family=Poiret+One&display=swap',
      family: 'Poiret One',
    },
    {
      typename: 'ComponentCommonFont',
      url: 'https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap',
      family: 'Antic Slab',
    },
  ],
  companyName: 'Corridor Cocktails',
  ...overrides,
});

export const FooterFixture = (
  overrides: Partial<StrapiFooter> = {}
): StrapiFooter => ({
  typename: 'Footer',
  text: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'Made with <3 in Detroit, MI',
        },
      ],
    },
  ],
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  twitterUrl: 'https://twitter.com',
  ...overrides,
});

export const ContactFixture = (
  overrides: Partial<StrapiContact> = {}
): StrapiContact => ({
  typename: 'Contact',
  header: 'Contact',
  fields: [
    TextInputFixture(),
    TimeInputFixture(),
    DateInputFixture(),
    DropdownInputFixture(),
    TextareaInputFixture(),
  ],
  sendTo: 'dan@sunkenstudio.com',
  bgColor: 'dark',
  bgImage: {
    typename: 'ComponentCommonImage',
    media: {
      typename: 'UploadFile',
      url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/b8c12199347804e795219ef484f5572e.jpeg',
    },
    alt: 'Bg image - logo',
    border: null,
    filter: {
      grayscale: 0,
      color: 'secondary',
      opacity: 0.75,
    },
  },
  ...overrides,
});

export const TextInputFixture = (
  overrides: Partial<StrapiInputField> = {}
): StrapiInputField => ({
  label: 'Name',
  type: 'text',
  ...overrides,
});

export const TimeInputFixture = (
  overrides: Partial<StrapiInputField> = {}
): StrapiInputField => ({
  label: 'StartTime',
  type: 'time',
  ...overrides,
});

export const DateInputFixture = (
  overrides: Partial<StrapiInputField> = {}
): StrapiInputField => ({
  label: 'Date',
  type: 'time',
  ...overrides,
});

export const DropdownInputFixture = (
  overrides: Partial<StrapiInputField> = {}
): StrapiInputField => ({
  label: 'Dropdown',
  type: 'dropdown',
  options: ['Option 1', 'Option 2'],
  ...overrides,
});

export const TextareaInputFixture = (
  overrides: Partial<StrapiInputField> = {}
): StrapiInputField => ({
  label: 'Message',
  type: 'textarea',
  ...overrides,
});

export const ConfigFixture = (
  overrides: Partial<StrapiConfig> = {}
): StrapiConfig => ({
  typename: 'Config',
  isUnderConstruction: false,
  isMaintenanceMode: false,
  ...overrides,
});

export const ImageScrollFixture = (
  overrides: Partial<StrapiImageScroll> = {}
): StrapiImageScroll => ({
  color: 'light',
  bgColor: 'dark',
  header: 'Featured In',
  images: [ImageFixture(), ImageFixture(), ImageFixture(), ImageFixture()],
  speed: 'normal',
  ...overrides,
});

export const ProjectSectionFixture = (
  overrides: Partial<StrapiProjectSection> = {}
): StrapiProjectSection => ({
  typename: 'ProjectSection',
  header: 'Projects',
  bgColor: 'dark',
  color: 'light',
  articles: [ArticleFixture()],
  ...overrides,
});

export const ArticleFixture = (
  overrides: Partial<StrapiArticle> = {}
): StrapiArticle => ({
  typename: 'ComponentCommonArticle',
  title: 'Corridor Cocktails',
  description: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'A website for a local vendor providing a pop-up cocktail bar service.',
        },
      ],
    },
  ],
  images: [
    {
      typename: 'UploadFile',
      url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/881d819e76d4feed9921f05433647f6f.png',
    },
  ],
  link: 'https://corridorcocktails.org',
  ...overrides,
});

export const FeatureFixture = (
  overrides: Partial<StrapiFeature> = {}
): StrapiFeature => ({
  typename: 'ComponentCommonFeature',
  header: 'Contract Grade Office Furniture',
  blurb:
    'Branch includes desks, chairs, tables and more that inspire and support your team',
  icon: 'UserCircleGear',
  ...overrides,
});

export const FeatureSectionFixture = (
  overrides: Partial<StrapiFeatureSection> = {}
): StrapiFeatureSection => ({
  typename: 'FeatureSection',
  header: 'The Branch Difference',
  description: 'some text goes here',
  backsplashColor: 'primary',
  color: 'dark',
  bgColor: 'light',
  iconColor: 'light',
  numColumns: 3,
  features: [FeatureFixture(), FeatureFixture(), FeatureFixture()],
  ...overrides,
});

export const ClientFixture = (overrides: Partial<Client> = {}): Client => ({
  typename: 'Site',
  clientId: 'demo',
  hero: HeroFixture(),
  sections: [SectionFixture()],
  brand: BrandFixture(),
  footer: FooterFixture(),
  contact: ContactFixture(),
  config: ConfigFixture(),
  imageScroll: ImageScrollFixture(),
  projectSection: ProjectSectionFixture(),
  featureSection: FeatureSectionFixture(),
  carousel: CarouselFixture(),
  ...overrides,
});
