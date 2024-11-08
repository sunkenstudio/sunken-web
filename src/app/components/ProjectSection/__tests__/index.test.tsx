'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { ProjectSection, ProjectSectionProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import {
  BrandFixture,
} from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/app/styles/theme';
import { StrapiBrand } from '@/app/types';

describe('ProjectSection', () => {
  const renderComponent = (
    overrides: Partial<ProjectSectionProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (props: Partial<ProjectSectionProps>): ProjectSectionProps => ({
      ...props,
    });
    return render(
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture(contextOverrides)}>
          <ProjectSection {...defaults(overrides)} />
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

})