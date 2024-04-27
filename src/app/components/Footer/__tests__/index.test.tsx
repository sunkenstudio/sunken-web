'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

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
    it('if given facebook url, should render facebook icon', () => {
      const rendered = renderComponent({
        footer: FooterFixture({ facebookUrl: 'http://facebook.com' }),
      });
      const icon = rendered.getByTitle('Facebook Logo');
      expect(icon).toBeDefined();
    });

    it('if NOT given facebook url, should NOT render facebook icon', () => {
      const rendered = renderComponent({
        footer: FooterFixture({ facebookUrl: '' }),
      });
      const icon = rendered.queryByTitle('Facebook Logo');
      expect(icon).toBeNull();
    });

    it('if given twitter url, should render twitter icon', () => {
      const rendered = renderComponent({
        footer: FooterFixture({ twitterUrl: 'http://twitter.com' }),
      });
      const icon = rendered.getByTitle('Twitter Logo');
      expect(icon).toBeDefined();
    });

    it('if NOT given twitter url, should NOT render twitter icon', () => {
      const rendered = renderComponent({
        footer: FooterFixture({ twitterUrl: '' }),
      });
      const icon = rendered.queryByTitle('Twitter Logo');
      expect(icon).toBeNull();
    });

    it('if given instagram url, should render instagram icon', () => {
      const rendered = renderComponent({
        footer: FooterFixture({ instagramUrl: 'http://instagram.com' }),
      });
      const icon = rendered.getByTitle('Instagram Logo');
      expect(icon).toBeDefined();
    });

    it('if NOT given instagram url, should NOT render instagram icon', () => {
      const rendered = renderComponent({
        footer: FooterFixture({ instagramUrl: '' }),
      });
      const icon = rendered.queryByTitle('Instagram Logo');
      expect(icon).toBeNull();
    });
  });
});
