import { Box } from '@chakra-ui/react';
import React from 'react';
import { StrapiStyledImage } from '../../../types';
import { Image } from '../Image';

export interface SectionBgProps {
  bgColor: string;
  image: StrapiStyledImage | null;
}

export const SectionBg = ({ image, bgColor }: SectionBgProps) => {
  return (
    <Box position={'absolute'} w="100%" height="100%" bgColor={bgColor}>
      {image && (
        <Image
          objectFit="cover"
          height="100%"
          w={'100%'}
          position={'absolute'}
          {...image}
        />
      )}
    </Box>
  );
};
