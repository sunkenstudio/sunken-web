'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Hero, HeroProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import {
  BrandFixture,
  HeroFixture,
  ImageFixture,
  RichTextFixture,
} from '@/app/fixtures';
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

  it('if given header, should render header', async () => {
    const header = 'Test Header';
    const rendered = renderComponent({ hero: HeroFixture({ header }) });
    expect(rendered.getByText(header)).toBeDefined();
  });

  it('if NOT given header, should NOT render header', async () => {
    const header = '';
    const rendered = renderComponent({ hero: HeroFixture({ header }) });
    expect(rendered.queryByText(HeroFixture().header)).toBeNull();
  });

  it('if given subheader, should render subheader', async () => {
    const subheader = 'Test subheader';
    const rendered = renderComponent({ hero: HeroFixture({ subheader }) });
    expect(rendered.getByText(subheader)).toBeDefined();
  });

  it('if NOT given subheader, should NOT render subheader', async () => {
    const subheader = '';
    const rendered = renderComponent({ hero: HeroFixture({ subheader }) });
    expect(rendered.queryByText(HeroFixture().subheader)).toBeNull();
  });

  it('if given text, should render text', async () => {
    const text = 'Test text';
    const rendered = renderComponent({
      hero: HeroFixture({ text: RichTextFixture({ text }) }),
    });
    expect(rendered.getByText(text)).toBeDefined();
  });

  it('if NOT given text, should NOT render text', async () => {
    const rendered = renderComponent({
      hero: HeroFixture({ text: [] }),
    });
    const defaultText = RichTextFixture()[0].children[0] as {
      type: 'text';
      text: string;
    };
    expect(rendered.queryByText(defaultText?.text)).toBeNull();
  });

  it('if given image, should render image', () => {
    const imageAlt = 'Test Image';
    const image = ImageFixture({ alt: imageAlt });
    const rendered = renderComponent({
      hero: HeroFixture({ image }),
    });
    const expected = rendered.getByAltText(imageAlt);
    expect(expected).toBeDefined();
  });

  it('if NOT given image, should NOT render image', () => {
    const imageAlt = '';
    const image = ImageFixture({ alt: imageAlt });
    const rendered = renderComponent({
      hero: HeroFixture({ image }),
    });
    const expected = rendered.queryByAltText(ImageFixture().alt);
    expect(expected).toBeNull();
  });
});
