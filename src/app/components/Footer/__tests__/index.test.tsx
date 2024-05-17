'use client';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';

import { Footer, FooterProps } from '..';
import { FooterFixture } from '@/app/fixtures';
import { Color } from '@/app/types';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';

describe('Footer', () => {
  const renderComponent = (overrides: Partial<FooterProps> = {}) => {
    const defaults = (props: Partial<FooterProps>): FooterProps => ({
      buttonStyle: {
        textColor: 'black',
        bgColor: 'white',
        border: {
          width: '0px',
          color: 'dark' as Color,
          radius: '0px',
        },
        shadow: '',
      },
      footer: FooterFixture(),
      ...props,
    });
    return render(<Footer {...defaults(overrides)} />);
  };

  describe('All stories should render successfully', () => {
    testStories(Stories);
  });

  it('match snapshot', () => {
    const rendered = renderComponent();
    expect(rendered).toMatchSnapshot();
  });

  describe('social icons', () => {
    it('if given facebook url, should render facebook icon', async () => {
      const rendered = renderComponent({
        footer: FooterFixture({ facebookUrl: 'http://facebook.com' }),
      });
      await waitFor(() => {
        const icon = rendered.getByTitle('FacebookLogo icon');
        expect(icon).toBeDefined();
      });
    });

    it('if NOT given facebook url, should NOT render facebook icon', async () => {
      const rendered = renderComponent({
        footer: FooterFixture({ facebookUrl: '' }),
      });
      await waitFor(() => {
        const icon = rendered.queryByTitle('FacebookLogo icon');
        expect(icon).toBeNull();
      });
    });

    it('if given twitter url, should render twitter icon', async () => {
      const rendered = renderComponent({
        footer: FooterFixture({ twitterUrl: 'http://twitter.com' }),
      });
      await waitFor(() => {
        const icon = rendered.getByTitle('TwitterLogo icon');
        expect(icon).toBeDefined();
      });
    });

    it('if NOT given twitter url, should NOT render twitter icon', async () => {
      const rendered = renderComponent({
        footer: FooterFixture({ twitterUrl: '' }),
      });
      await waitFor(() => {
        const icon = rendered.queryByTitle('TwitterLogo icon');
        expect(icon).toBeNull();
      });
    });

    it('if given instagram url, should render instagram icon', async () => {
      const rendered = renderComponent({
        footer: FooterFixture({ instagramUrl: 'http://instagram.com' }),
      });
      await waitFor(() => {
        const icon = rendered.getByTitle('InstagramLogo icon');
        expect(icon).toBeDefined();
      });
    });

    it('if NOT given instagram url, should NOT render instagram icon', async () => {
      const rendered = renderComponent({
        footer: FooterFixture({ instagramUrl: '' }),
      });
      await waitFor(() => {
        const icon = rendered.queryByTitle('InstagramLogo icon');
        expect(icon).toBeNull();
      });
    });
  });
});
