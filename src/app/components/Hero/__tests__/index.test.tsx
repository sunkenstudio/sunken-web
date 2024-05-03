'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Hero, HeroProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import { BrandFixture, HeroFixture, RichTextFixture } from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/app/styles/theme';
import { StrapiBrand } from '@/app/types';

describe('Hero', () => {
  const renderComponent = (
    overrides: Partial<HeroProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (props: Partial<HeroProps>): HeroProps => ({
      hero: HeroFixture(),
      ...props,
    });
    return render(
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture(contextOverrides)}>
          <Hero {...defaults(overrides)} />
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

  it('should render header', async () => {
    const header = 'Test Header';
    const rendered = renderComponent({ hero: HeroFixture({ header }) });
    expect(rendered.getByText(header)).toBeDefined();
  });

  it('should render subheader', async () => {
    const subheader = 'Test subheader';
    const rendered = renderComponent({ hero: HeroFixture({ subheader }) });
    expect(rendered.getByText(subheader)).toBeDefined();
  });

  it('should render text', async () => {
    const text = 'Test text';
    const rendered = renderComponent({
      hero: HeroFixture({ text: RichTextFixture({ text }) }),
    });
    expect(rendered.getByText(text)).toBeDefined();
  });
});
