'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { FeatureSection, FeatureSectionProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import { BrandFixture, FeatureSectionFixture } from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/app/styles/theme';
import { StrapiBrand } from '@/app/types';

describe('FeatureSection', () => {
  const renderComponent = (
    overrides: Partial<FeatureSectionProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (
      props: Partial<FeatureSectionProps>
    ): FeatureSectionProps => ({
      featureSection: FeatureSectionFixture(),
      ...props,
    });
    return render(
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture(contextOverrides)}>
          <FeatureSection {...defaults(overrides)} />
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
