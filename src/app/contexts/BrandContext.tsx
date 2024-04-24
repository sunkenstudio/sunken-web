import { createContext, useContext, useState } from 'react';
import { StrapiBrand } from '../types';
import { emptyFunction } from '../helpers/utils';

// Define the type for the context value
type BrandContextType = {
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

interface BrandColors {
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

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  const [brand, setBrand] = useState<StrapiBrand>({} as StrapiBrand);

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
