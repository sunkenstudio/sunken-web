'use client';
import { StrapiImage } from '@/app/types';
import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export interface ImageScrollProps {
  images: StrapiImage[];
  speed: number;
}

export const ImageScroll = ({ images, speed }: ImageScrollProps) => {
  const imagesWithLoop = [...images, ...images]; // Duplicate images to create a continuous loop

  return (
    <Box display="flex" w="100%" maxH="5rem" py="1rem" overflow="hidden">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        width="fit-content"
        whiteSpace="nowrap"
        gap="25rem" // Adjust this gap for spacing between images
        sx={{
          animation: `loop ${speed}s linear infinite`, // Use the `speed` prop for dynamic control
          '@keyframes loop': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-50%)', // Scroll half the total width of the images
            },
          },
        }}
      >
        {imagesWithLoop.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            maxH="100%"
          />
        ))}
      </Box>
    </Box>
  );
};
