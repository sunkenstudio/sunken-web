'use client';
import { useBrand } from '@/app/contexts/BrandContext';
import { Color, StrapiImage } from '@/app/types';
import { Box, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { H4 } from '../Typography';

export interface ImageScrollProps {
  images: StrapiImage[];
  speed: 'slow' | 'normal' | 'fast'; // This controls the speed of the animation
  header?: string;
  bgColor?: Color;
  color?: Color;
}

export const ImageScroll = ({
  images,
  speed,
  header,
  bgColor = 'light',
  color = 'dark',
}: ImageScrollProps) => {
  const { colors } = useBrand();

  const getCalculatedSpeed = () => {
    if (speed === 'slow') {
      return 50;
    }
    if (speed === 'fast') {
      return 10;
    }
    return 25;
  };

  const calculatedSpeed = getCalculatedSpeed();

  return (
    <Stack
      w="100%"
      minH="5rem"
      display="flex"
      textAlign={'center'}
      bgColor={colors[bgColor]}
      color={colors[color]}
      py={header ? '1rem' : 0}
    >
      {header && <H4 mb="1rem">{header}</H4>}

      <Box
        display="flex"
        w="100%"
        minH="5rem"
        py="1rem"
        overflow="hidden"
        position="relative"
      >
        {/* Scroll container 1 */}
        <Box
          className="scroll"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          sx={{
            animation: `loop ${calculatedSpeed}s linear infinite`,
            position: 'absolute',
            width: '100%',
            whiteSpace: 'nowrap',
            '@keyframes loop': {
              '0%': {
                transform: 'translateX(100%)',
              },
              '100%': {
                transform: 'translateX(-100%)',
              },
            },
          }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              alt={`Image ${index}`}
              h="3rem"
            />
          ))}
        </Box>

        {/* Scroll container 2 (delayed start) */}
        <Box
          className="scroll"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          sx={{
            animation: `loop ${calculatedSpeed}s linear infinite`,
            position: 'absolute',
            width: '100%',
            whiteSpace: 'nowrap',
            transform: 'translateX(100%)', // Start it off-screen
            animationDelay: `${calculatedSpeed / 2}s`, // Delay for second loop to start
            '@keyframes loop': {
              '0%': {
                transform: 'translateX(100%)',
              },
              '100%': {
                transform: 'translateX(-100%)',
              },
            },
          }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              alt={`Image ${index}`}
              h="3rem"
            />
          ))}
        </Box>
      </Box>
    </Stack>
  );
};
