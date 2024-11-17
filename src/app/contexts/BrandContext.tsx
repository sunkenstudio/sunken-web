import { createContext, useContext, useState } from 'react';
import { StrapiBrand } from '../types';
import { emptyFunction } from '../helpers/utils';

// Define the type for the context value
export type BrandContextType = {
  colors: BrandColors;
  fonts: BrandFonts;
  companyName: string | null;
  loadContent: (brandContent: StrapiBrand) => void;
};

const BrandContext = createContext<BrandContextType>({
  colors: {} as BrandColors,
  fonts: {} as BrandFonts,
  companyName: null,
  loadContent: emptyFunction,
});

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  light: string;
  dark: string;
}

interface BrandFonts {
  headers: {
    typename: string;
    family: string;
    url: string;
  };
  body: {
    typename: string;
    family: string;
    url: string;
  };
}

export const BrandProvider = ({
  brandOverrides = {} as StrapiBrand,
  children,
}: {
  brandOverrides?: StrapiBrand;
  children: React.ReactNode;
}) => {
  const [brand, setBrand] = useState<StrapiBrand>(
    brandOverrides as StrapiBrand
  );

  const loadContent = (brandContent: StrapiBrand) => {
    setBrand(brandContent);
  };

  const getColors = (): BrandColors => ({
    primary: brand.primary,
    secondary: brand.secondary,
    accent: brand.accent,
    light: brand.light,
    dark: brand.dark,
  });

  const getFonts = (): BrandFonts => ({
    headers: brand.fonts?.[0] || 'Arial',
    body: brand.fonts?.[1] || brand.fonts?.[0] || 'Arial',
  });

  return (
    <BrandContext.Provider
      value={{
        colors: getColors(),
        fonts: getFonts(),
        companyName: brand.companyName,
        loadContent,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  return useContext(BrandContext);
};
