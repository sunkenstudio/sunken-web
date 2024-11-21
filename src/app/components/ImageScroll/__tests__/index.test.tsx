'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { ImageScroll, ImageScrollProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import { BrandFixture, ImageFixture } from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/app/styles/theme';
import { StrapiBrand } from '@/app/types';

describe('ImageScroll', () => {
  const renderComponent = (
    overrides: Partial<ImageScrollProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (props: Partial<ImageScrollProps>): ImageScrollProps => ({
      imageScroll: {
        bgColor: 'light',
        images: [
          ImageFixture(),
          ImageFixture(),
          ImageFixture(),
          ImageFixture(),
        ],
        speed: 'normal',
        sortOrder: 1,
        ...props,
      },
    });
    return render(
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture(contextOverrides)}>
          <ImageScroll {...defaults(overrides)} />
        </BrandProvider>
      </ChakraProvider>
    );
  };

  describe('All stories should render successfully', () => {
    testStories(Stories);
  });

  it('match snapshot', () => {
    const rendered = renderComponent();
    expect(rendered).toMatchSnapshot();
  });
});
