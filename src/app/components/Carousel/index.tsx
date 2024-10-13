'use client';
import React, { useEffect, useState } from 'react';
import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiCarousel } from '@/app/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Center,
  IconButton,
  Image,
  SlideFade,
} from '@chakra-ui/react';

import { Flex } from '@chakra-ui/react';
import { DotOutline } from '@phosphor-icons/react';
import './styles.css';

export interface CarouselProps {
  carousel: StrapiCarousel;
}
export const Carousel = ({ carousel }: CarouselProps) => {
  const { colors } = useBrand();
  const {
    displayArrows,
    images,
    transitionTime,
    displayCounter,
    aspectRatioWidth,
    aspectRatioHeight,
  } = carousel;
  const [imageIndex, setImageIndex] = useState(0);
  const [moving, setMoving] = useState(transitionTime > 0);
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    if (moving) {
      const tick = setInterval(() => {
        setIsShowing(false);
        setTimeout(() => {
          setImageIndex((imageIndex + 1) % images.length);
          setIsShowing(true);
        }, 500);
      }, transitionTime - 500);

      return () => clearInterval(tick);
    }
  }, [images, transitionTime, setImageIndex, imageIndex, moving, setMoving]);

  const handleNext = () => {
    setIsShowing(false);
    setTimeout(() => {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
      setIsShowing(true);
    }, 500);
  };

  const handlePrev = () => {
    setIsShowing(false);
    setTimeout(() => {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
      setIsShowing(true);
    }, 500);
  };

  const selectNewImage = (index: number) => {
    setIsShowing(false);
    setTimeout(() => {
      setImageIndex(index);
      setIsShowing(true);
    }, 500);
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
        className="outerContainer"
      >
        <div className="innerContainer">
          <SlideFade in={isShowing} offsetX={isShowing ? '300px' : '-300px'}>
            <AspectRatio
              ratio={aspectRatioWidth / aspectRatioHeight}
              maxW="1000px"
            >
              <Image
                objectFit="contain"
                alt={images[imageIndex].alt}
                src={images[imageIndex].media.url}
              />
            </AspectRatio>
          </SlideFade>
          {displayCounter && (
            <span className="imageCounter">
              {imageIndex + 1}/{images.length}
            </span>
          )}
        </div>
        <Center width="100%">
          {displayArrows && (
            <IconButton
              aria-label="Show previous image"
              variant="ghost"
              icon={<ChevronLeftIcon />}
              onClick={handlePrev}
            />
          )}
          {images.map((image, index) => (
            <IconButton
              key={`image-${index}`}
              aria-label={`view ${image.alt}`}
              color={index === imageIndex ? colors.accent : 'currentcolor'}
              variant="ghost"
              icon={<DotOutline size={32} />}
              onClick={() => selectNewImage(index)}
            ></IconButton>
          ))}
          {displayArrows && (
            <IconButton
              aria-label="Show next image"
              variant="ghost"
              icon={<ChevronRightIcon />}
              onClick={handleNext}
            />
          )}
        </Center>
      </Box>
    </Flex>
  );
};
