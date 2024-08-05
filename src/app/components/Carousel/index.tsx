'use client';
import React, { useEffect, useState } from 'react';
import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiCarousel } from '@/app/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, IconButton, Image } from '@chakra-ui/react';

import { Flex } from '@chakra-ui/react';
import { Pause, Play } from '@phosphor-icons/react';

export interface CarouselProps {
  carousel: StrapiCarousel;
}
export const Carousel = ({ carousel }: CarouselProps) => {
  const { colors } = useBrand();
  const { displayArrows, images, transitionTime } = carousel;
  const [imageIndex, setImageIndex] = useState(0);
  const [moving, setMoving] = useState(true);

  useEffect(() => {
    if (moving) {
      const tick = setInterval(
        () => setImageIndex((imageIndex + 1) % images.length),
        transitionTime
      );

      return () => clearInterval(tick);
    }
  }, [images, transitionTime, setImageIndex, imageIndex, moving, setMoving]);

  const handleNext = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const handlePrev = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <Flex
      id={'carousel'}
      w="100%"
      color={colors.dark}
      position="relative"
      minH={'2xl'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        boxSize="4xl"
        position="relative"
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Center width="100%">
          <Image src={images[imageIndex].media.url}></Image>
        </Center>
        {displayArrows && (
          <Center width="100%">
            <IconButton
              aria-label="Show previous image"
              variant="ghost"
              icon={<ChevronLeftIcon />}
              onClick={handleNext}
            />
            <IconButton
              aria-label="Show next image"
              variant="ghost"
              icon={moving ? <Pause /> : <Play />}
              onClick={() => setMoving(!moving)}
            />
            <IconButton
              aria-label="Show next image"
              variant="ghost"
              icon={<ChevronRightIcon />}
              onClick={handlePrev}
            />
          </Center>
        )}
      </Box>
    </Flex>
  );
};
