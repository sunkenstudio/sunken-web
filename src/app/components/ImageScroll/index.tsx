'use client';
import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiImageScroll } from '@/app/types';
import { Box, Image, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { H4 } from '../Typography';

export interface ImageScrollProps {
  imageScroll: StrapiImageScroll;
}

export const ImageScroll = ({ imageScroll }: ImageScrollProps) => {
  const { colors } = useBrand();

  const {
    images,
    speed,
    header,
    bgColor = 'light',
    color = 'dark',
  } = imageScroll;

  const [isFirstIteration, setIsFirstIteration] = useState(true);

  const getCalculatedSpeed = () => {
    if (speed === 'slow') {
      return 50;
    }
    if (speed === 'fast') {
      return 10;
    }
    return (images.length / 3) * 15;
  };

  const handleAnimationIteration = () => {
    setIsFirstIteration(false); // After the first iteration, set this to false
  };

  if (!images) {
    return null;
  }

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
          position="absolute"
          width={`${(images.length / 3) * 100}%`}
          whiteSpace="nowrap"
          sx={{
            animation: `loop_1 ${calculatedSpeed}s linear infinite`,
            '@keyframes loop_1': {
              '0%': {
                transform: isFirstIteration
                  ? 'translateX(40%)'
                  : 'translateX(100%)',
              },
              '100%': {
                transform: 'translateX(-100%)',
              },
            },
          }}
          onAnimationIteration={handleAnimationIteration}
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
          position="absolute"
          width={`${(images.length / 3) * 100}%`}
          whiteSpace="nowrap"
          sx={{
            animation: `loop_2 ${calculatedSpeed}s linear infinite`,
            transform: 'translateX(100%)', // Start it off-screen
            animationDelay: `${calculatedSpeed / 2}s`, // Delay for second loop to start
            '@keyframes loop_2': {
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
