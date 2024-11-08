'use client';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';

import { ProjectSection, ProjectSectionProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import { ArticleFixture, BrandFixture } from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/app/styles/theme';
import { StrapiBrand } from '@/app/types';
import { ProjectSectionFixture } from '@/app/fixtures';
import userEvent from '@testing-library/user-event';

describe('ProjectSection', () => {
  const renderComponent = (
    overrides: Partial<ProjectSectionProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (
      props: Partial<ProjectSectionProps>
    ): ProjectSectionProps => ({
      projectSection: ProjectSectionFixture(),
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

  it('should display no arrows if only one index', () => {
    const rendered = renderComponent();
    expect(rendered.queryByTestId('increment-btn')).toBeNull();
    expect(rendered.queryByTestId('decrement-btn')).toBeNull();
  });

  it('should display right arrow only if first index', () => {
    const rendered = renderComponent({
      projectSection: {
        ...ProjectSectionFixture(),
        articles: [ArticleFixture(), ArticleFixture(), ArticleFixture()],
      },
    });
    expect(rendered.getByTestId('increment-btn')).toBeDefined();
    expect(rendered.queryByTestId('decrement-btn')).toBeNull();
  });

  it('should display left arrow only if last index', async () => {
    const rendered = renderComponent({
      projectSection: {
        ...ProjectSectionFixture(),
        articles: [ArticleFixture(), ArticleFixture(), ArticleFixture()],
      },
    });
    const incrementBtn = rendered.getByTestId('increment-btn');
    userEvent.click(incrementBtn);
    userEvent.click(incrementBtn);
    await waitFor(() => {
      expect(rendered.getByTestId('decrement-btn')).toBeDefined();
      expect(rendered.queryByTestId('increment-btn')).toBeNull();
    });
  });

  it('should display both arrows if middle index', async () => {
    const rendered = renderComponent({
      projectSection: {
        ...ProjectSectionFixture(),
        articles: [ArticleFixture(), ArticleFixture(), ArticleFixture()],
      },
    });
    const incrementBtn = rendered.getByTestId('increment-btn');
    userEvent.click(incrementBtn);
    await waitFor(() => {
      expect(rendered.getByTestId('increment-btn')).toBeDefined();
      expect(rendered.getByTestId('decrement-btn')).toBeDefined();
    });
  });
});
