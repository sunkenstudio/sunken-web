import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiFeatureSection } from '@/app/types';
import { Box, Grid, Stack } from '@chakra-ui/react';
import React from 'react';
import { H3, H5, Paragraph } from '../Typography';
import { Icon } from '../_Shared/Icon';
import { kebabCase } from 'lodash';

export interface FeatureSectionProps {
  featureSection: StrapiFeatureSection;
}

export const FeatureSection = ({ featureSection }: FeatureSectionProps) => {
  const {
    header,
    description,
    backsplashColor,
    color,
    bgColor,
    iconColor,
    features,
    numColumns,
  } = featureSection;

  const { colors } = useBrand();

  return (
    <Stack
      w="100%"
      display="flex"
      textAlign={'center'}
      bgColor={colors[bgColor]}
      color={colors[color]}
      p="3rem"
    >
      <H3>{header}</H3>
      <Paragraph>{description}</Paragraph>
      <Grid
        w="100%"
        justifyContent={'space-evenly'}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: `repeat(${numColumns}, 1fr)`,
        }}
        mt={'3rem'}
        rowGap={{ base: '1.5rem' }}
        columnGap={'3rem'}
      >
        {features.map((i) => (
          <Stack
            key={`feature-${kebabCase(i.header)}`}
            alignItems={'center'}
            gap="1rem"
          >
            <Box
              bgColor={colors[backsplashColor]}
              padding={'1rem'}
              borderRadius={'99rem'}
            >
              <Icon type={i.icon} size={48} color={colors[iconColor]} />
            </Box>
            <H5>{i.header}</H5>
            <Paragraph fontSize={'sm'}>{i.blurb}</Paragraph>
          </Stack>
        ))}
      </Grid>
    </Stack>
  );
};
