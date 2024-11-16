'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Section, SectionProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import {
  BrandFixture,
  SectionFixture,
  StyledImageFixture,
  RichTextFixture,
} from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/app/styles/theme';
import { StrapiBrand } from '@/app/types';

describe('Section', () => {
  const renderComponent = (
    overrides: Partial<SectionProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (props: Partial<SectionProps>): SectionProps => ({
      section: SectionFixture(),
      ...props,
    });
    return render(
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture(contextOverrides)}>
          <Section {...defaults(overrides)} />
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

  describe('left variant', () => {
    it('if given header, should render header', async () => {
      const header = 'Test Header';
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'left', header }),
      });
      expect(rendered.getByText(header)).toBeDefined();
    });

    it('if NOT given header, should NOT render header', async () => {
      const header = '';
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'left', header }),
      });
      expect(rendered.queryByText(SectionFixture().header)).toBeNull();
    });

    it('if given caption, should render caption', async () => {
      const caption = 'Test caption';
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'left', caption }),
      });
      expect(rendered.getByText(caption)).toBeDefined();
    });

    it('if NOT given caption, should NOT render caption', async () => {
      const caption = '';
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'left', caption }),
      });
      expect(
        rendered.queryByText(SectionFixture().caption as string)
      ).toBeNull();
    });

    it('if given text, should render text', async () => {
      const text = 'Test text';
      const rendered = renderComponent({
        section: SectionFixture({
          variant: 'left',
          text: RichTextFixture({ text }),
        }),
      });
      expect(rendered.getByText(text)).toBeDefined();
    });

    it('if NOT given text, should NOT render text', async () => {
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'left', text: [] }),
      });
      const defaultText = RichTextFixture()[0].children[0] as {
        type: 'text';
        text: string;
      };
      expect(rendered.queryByText(defaultText?.text)).toBeNull();
    });

    it('if given image, should render image', () => {
      const imageAlt = 'Test Image';
      const image = StyledImageFixture({ alt: imageAlt });
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'left', image }),
      });
      const expected = rendered.getByAltText(imageAlt);
      expect(expected).toBeDefined();
    });

    it('if NOT given image, should NOT render image', () => {
      const imageAlt = '';
      const image = StyledImageFixture({ alt: imageAlt });
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'left', image }),
      });
      const expected = rendered.queryByAltText(StyledImageFixture().alt);
      expect(expected).toBeNull();
    });
  });

  describe('right variant', () => {
    it('if given header, should render header', async () => {
      const header = 'Test Header';
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'right', header }),
      });
      expect(rendered.getByText(header)).toBeDefined();
    });

    it('if NOT given header, should NOT render header', async () => {
      const header = '';
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'right', header }),
      });
      expect(rendered.queryByText(SectionFixture().header)).toBeNull();
    });

    it('if given caption, should render caption', async () => {
      const caption = 'Test caption';
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'right', caption }),
      });
      expect(rendered.getByText(caption)).toBeDefined();
    });

    it('if NOT given caption, should NOT render caption', async () => {
      const caption = '';
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'right', caption }),
      });
      expect(
        rendered.queryByText(SectionFixture().caption as string)
      ).toBeNull();
    });

    it('if given text, should render text', async () => {
      const text = 'Test text';
      const rendered = renderComponent({
        section: SectionFixture({
          variant: 'right',
          text: RichTextFixture({ text }),
        }),
      });
      expect(rendered.getByText(text)).toBeDefined();
    });

    it('if NOT given text, should NOT render text', async () => {
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'right', text: [] }),
      });
      const defaultText = RichTextFixture()[0].children[0] as {
        type: 'text';
        text: string;
      };
      expect(rendered.queryByText(defaultText?.text)).toBeNull();
    });

    it('if given image, should render image', () => {
      const imageAlt = 'Test Image';
      const image = StyledImageFixture({ alt: imageAlt });
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'right', image }),
      });
      const expected = rendered.getByAltText(imageAlt);
      expect(expected).toBeDefined();
    });

    it('if NOT given image, should NOT render image', () => {
      const imageAlt = '';
      const image = StyledImageFixture({ alt: imageAlt });
      const rendered = renderComponent({
        section: SectionFixture({ variant: 'right', image }),
      });
      const expected = rendered.queryByAltText(StyledImageFixture().alt);
      expect(expected).toBeNull();
    });
  });
});
