import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiFeatureSection } from '@/app/types';
import { Stack } from '@chakra-ui/react';
import React from 'react';

export interface FeatureSectionProps {
  featureSection: StrapiFeatureSection;
}

export const FeatureSection = ({ featureSection }: FeatureSectionProps) => {
  const { header, description, backsplashColor, color, features } =
    featureSection;
  const { colors } = useBrand();

  return (
    <Stack
      w="100%"
      minH="5rem"
      display="flex"
      textAlign={'center'}
      bgColor={colors[bgColor]}
      color={colors[color]}
      py={header ? '1rem' : 0}
    ></Stack>
  );
};
