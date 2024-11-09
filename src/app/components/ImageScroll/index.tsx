'use client';
import { StrapiImage } from '@/app/types';
import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export interface ImageScrollProps {
  images: StrapiImage[];
  speed: number; // This controls the speed of the animation
}

export const ImageScroll = ({ images, speed }: ImageScrollProps) => {
  return (
    <Box
      display="flex"
      w="100%"
      maxH="5rem"
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
          animation: `loop ${speed}s linear infinite`,
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
          animation: `loop ${speed}s linear infinite`,
          position: 'absolute',
          width: '100%',
          whiteSpace: 'nowrap',
          transform: 'translateX(100%)', // Start it off-screen
          animationDelay: `${speed / 2}s`, // Delay for second loop to start
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
