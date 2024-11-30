import React from 'react';
import {
  Box,
  Image as ChakraImage,
  ChakraStyledOptions,
} from '@chakra-ui/react';
import { StrapiStyledImage } from '../../../types';
import { useBrand } from '@/app/contexts/BrandContext';

export type ImageProps = StrapiStyledImage & ChakraStyledOptions;

export const Image = ({
  media = { typename: '', url: '' },
  alt,
  border = { width: '', color: 'dark', radius: '' },
  filter,
  ...rest
}: ImageProps) => {
  const { colors } = useBrand();

  const borderString = border
    ? `${border.width} ${colors[border.color]} solid`
    : '';
  return (
    <Box position={'relative'} height={'100%'} width={'100%'}>
      <ChakraImage
        src={media.url}
        alt={alt}
        border={borderString}
        borderRadius={border?.radius || ''}
        filter={`grayscale(${filter?.grayscale || 0}%)`}
        {...rest}
      />
      <Box
        borderRadius={border?.radius || ''}
        bgColor={filter?.color ? colors[filter.color] : ''}
        opacity={filter?.opacity}
        height={'100%'}
        width={'100%'}
        position={'absolute'}
        top={0}
        bottom={0}
        left={0}
        right={0}
      />
    </Box>
  );
};
