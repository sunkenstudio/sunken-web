'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { FeatureSection } from '..';

describe('FeatureSection', () => {
  const featureData = [
    {
      type: 'headset',
      subHeader: '24 Hour Customer Service',
      blurb: 'Need help? Our team of specialists is ready to make your day!',
    },
  ];
  it('match snapshot', () => {
    const rendered = render(<FeatureSection featureData={featureData} />);
    expect(rendered).toMatchSnapshot();
  });
});
