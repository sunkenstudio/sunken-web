'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Footer, FooterProps } from '..';
import { FooterFixture } from '@/app/fixtures';
import { Color } from '@/app/types';

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
  it('match snapshot', () => {
    const rendered = renderComponent();
    expect(rendered).toMatchSnapshot();
  });
});
