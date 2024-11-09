'use client';
import { useBrand } from '@/app/contexts/BrandContext';
import { Color, StrapiImage } from '@/app/types';
import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export interface ImageScrollProps {
  bgColor: Color;
  images: StrapiImage[];
  speed: 'slow' | 'normal' | 'fast'; // This controls the speed of the animation
}

export const ImageScroll = ({ bgColor, images, speed }: ImageScrollProps) => {
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
    <Box
      display="flex"
      w="100%"
      minH="5rem"
      py="1rem"
      overflow="hidden"
      position="relative"
      bgColor={colors[bgColor]}
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
          <Image key={index} src={image.url} alt={`Image ${index}`} h="3rem" />
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
          <Image key={index} src={image.url} alt={`Image ${index}`} h="3rem" />
        ))}
      </Box>
    </Box>
  );
};
