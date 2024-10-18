'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Carousel, CarouselProps } from '..';
import { StrapiBrand } from '@/app/types';
import { ChakraProvider } from '@chakra-ui/react';
import { BrandFixture, CarouselFixture } from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import theme from '@/app/styles/theme';

describe('Carousel', () => {
  const renderComponent = (
    overrides: Partial<CarouselProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (props: Partial<CarouselProps>): CarouselProps => ({
      carousel: CarouselFixture(),
      ...props,
    });
    return render(
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture(contextOverrides)}>
          <Carousel {...defaults(overrides)} />
        </BrandProvider>
      </ChakraProvider>
    );
  };
});
