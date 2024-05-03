'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Hero, HeroProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import {
  BrandFixture,
  ButtonFixture,
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

  describe('leftAligned variant', () => {
    it('if given header, should render header', async () => {
      const header = 'Test Header';
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'leftAligned', header }),
      });
      expect(rendered.getByText(header)).toBeDefined();
    });

    it('if NOT given header, should NOT render header', async () => {
      const header = '';
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'leftAligned', header }),
      });
      expect(rendered.queryByText(HeroFixture().header)).toBeNull();
    });

    it('if given subheader, should render subheader', async () => {
      const subheader = 'Test subheader';
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'leftAligned', subheader }),
      });
      expect(rendered.getByText(subheader)).toBeDefined();
    });

    it('if NOT given subheader, should NOT render subheader', async () => {
      const subheader = '';
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'leftAligned', subheader }),
      });
      expect(rendered.queryByText(HeroFixture().subheader)).toBeNull();
    });

    it('if given text, should render text', async () => {
      const text = 'Test text';
      const rendered = renderComponent({
        hero: HeroFixture({
          variant: 'leftAligned',
          text: RichTextFixture({ text }),
        }),
      });
      expect(rendered.getByText(text)).toBeDefined();
    });

    it('if NOT given text, should NOT render text', async () => {
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'leftAligned', text: [] }),
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
        hero: HeroFixture({ variant: 'leftAligned', image }),
      });
      const expected = rendered.getByAltText(imageAlt);
      expect(expected).toBeDefined();
    });

    it('if NOT given image, should NOT render image', () => {
      const imageAlt = '';
      const image = ImageFixture({ alt: imageAlt });
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'leftAligned', image }),
      });
      const expected = rendered.queryByAltText(ImageFixture().alt);
      expect(expected).toBeNull();
    });

    it('if given button, should render button', () => {
      const text = 'Test button text';
      const rendered = renderComponent({
        hero: HeroFixture({
          variant: 'leftAligned',
          buttons: [ButtonFixture({ text })],
        }),
      });
      expect(rendered.getByText(text)).toBeDefined();
    });

    it('if NOT given button, should NOT render button', () => {
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'leftAligned', buttons: [] }),
      });
      expect(rendered.queryByText(HeroFixture().buttons[0].text)).toBeNull();
    });
  });

  describe('centerAligned variant', () => {
    it('if given header, should render header', async () => {
      const header = 'Test Header';
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'centerAligned', header }),
      });
      expect(rendered.getByText(header)).toBeDefined();
    });

    it('if NOT given header, should NOT render header', async () => {
      const header = '';
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'centerAligned', header }),
      });
      expect(rendered.queryByText(HeroFixture().header)).toBeNull();
    });

    it('if given subheader, should render subheader', async () => {
      const subheader = 'Test subheader';
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'centerAligned', subheader }),
      });
      expect(rendered.getByText(subheader)).toBeDefined();
    });

    it('if NOT given subheader, should NOT render subheader', async () => {
      const subheader = '';
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'centerAligned', subheader }),
      });
      expect(rendered.queryByText(HeroFixture().subheader)).toBeNull();
    });

    it('if given text, should render text', async () => {
      const text = 'Test text';
      const rendered = renderComponent({
        hero: HeroFixture({
          variant: 'centerAligned',
          text: RichTextFixture({ text }),
        }),
      });
      expect(rendered.getByText(text)).toBeDefined();
    });

    it('if NOT given text, should NOT render text', async () => {
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'centerAligned', text: [] }),
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
        hero: HeroFixture({ variant: 'centerAligned', image }),
      });
      const expected = rendered.getByAltText(imageAlt);
      expect(expected).toBeDefined();
    });

    it('if NOT given image, should NOT render image', () => {
      const imageAlt = '';
      const image = ImageFixture({ alt: imageAlt });
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'centerAligned', image }),
      });
      const expected = rendered.queryByAltText(ImageFixture().alt);
      expect(expected).toBeNull();
    });

    it('if given button, should render button', () => {
      const text = 'Test button text';
      const rendered = renderComponent({
        hero: HeroFixture({
          variant: 'centerAligned',
          buttons: [ButtonFixture({ text })],
        }),
      });
      expect(rendered.getByText(text)).toBeDefined();
    });

    it('if NOT given button, should NOT render button', () => {
      const rendered = renderComponent({
        hero: HeroFixture({ variant: 'centerAligned', buttons: [] }),
      });
      expect(rendered.queryByText(HeroFixture().buttons[0].text)).toBeNull();
    });
  });
});
