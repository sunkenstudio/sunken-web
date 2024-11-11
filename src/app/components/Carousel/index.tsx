'use client';
import React, { useEffect, useState } from 'react';
import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiCarousel } from '@/app/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AspectRatio, Box, Center, IconButton, Image } from '@chakra-ui/react';

import { Flex } from '@chakra-ui/react';
import { DotOutline } from '@phosphor-icons/react';
import styles from './Carousel.module.css';

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
  const [isMoreThanFive, setIsMoreThanFive] = useState(false);
  const [slideClass, setSlideClass] = useState(styles['image-slide-in']);

  useEffect(() => {
    if (moving) {
      const tick = setInterval(() => {
        setSlideClass(styles['image-slide-out']);
        setTimeout(() => {
          setImageIndex((imageIndex + 1) % images.length);
          setSlideClass(styles['image-slide-in']);
        }, 300);
      }, transitionTime - 300);

      return () => clearInterval(tick);
    }
  }, [images, transitionTime, setImageIndex, imageIndex, moving, setMoving]);

  useEffect(() => {
    setIsMoreThanFive(images.length > 5);
  }, [images]);

  const handleNext = () => {
    setSlideClass(styles['image-slide-out']);
    setTimeout(() => {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
      setSlideClass(styles['image-slide-in']);
    }, 300);
  };

  const handlePrev = () => {
    setSlideClass(styles['image-slide-out-reverse']);
    setTimeout(() => {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
      setSlideClass(styles['image-slide-in-reverse']);
    }, 300);
  };

  const selectNewImage = (index: number) => {
    const isReverse = index < imageIndex ? true : false;
    setSlideClass(styles[`image-slide-out${isReverse ? '-reverse' : ''}`]);
    setTimeout(() => {
      setImageIndex(index);
      setSlideClass(styles[`image-slide-in${isReverse ? '-reverse' : ''}`]);
    }, 300);
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
        className={styles.outerContainer}
      >
        <div className={styles.innerContainer}>
          <AspectRatio
            ratio={aspectRatioWidth / aspectRatioHeight}
            maxW="1000px"
            className={slideClass}
          >
            <Image
              objectFit="contain"
              alt={images[imageIndex].alt}
              src={images[imageIndex].media.url}
            />
          </AspectRatio>
          {displayCounter && (
            <span className={styles.imageCounter}>
              {imageIndex + 1}/{images.length}
            </span>
          )}
        </div>
        <Center width="100%">
          {(displayArrows || isMoreThanFive) && (
            <IconButton
              aria-label="Show previous image"
              variant="ghost"
              icon={<ChevronLeftIcon />}
              onClick={handlePrev}
            />
          )}
          {!isMoreThanFive &&
            images.map((image, index) => (
              <IconButton
                key={`image-${index}`}
                aria-label={`view ${image.alt}`}
                color={index === imageIndex ? colors.accent : 'currentcolor'}
                variant="ghost"
                icon={<DotOutline size={32} />}
                onClick={() => selectNewImage(index)}
              ></IconButton>
            ))}
          {(displayArrows || isMoreThanFive) && (
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
