'use client';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';

import { Header, HeaderProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import {
  BrandFixture,
  ContactFixture,
  HeroFixture,
  SectionFixture,
} from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import userEvent from '@testing-library/user-event';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/app/styles/theme';
import { StrapiBrand } from '@/app/types';

describe('Header', () => {
  const renderComponent = (
    overrides: Partial<HeaderProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (props: Partial<HeaderProps>): HeaderProps => ({
      hero: HeroFixture(),
      sections: [SectionFixture()],
      contact: ContactFixture(),
      ...props,
    });
    return render(
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture(contextOverrides)}>
          <Header {...defaults(overrides)} />
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

  it('should render companyName', async () => {
    const companyName = 'Test Company';
    const rendered = renderComponent({}, { companyName: 'Test Company' });
    const button = rendered.getByRole('button');
    userEvent.click(button);
    await waitFor(() => {
      expect(rendered.getByText(companyName)).toBeDefined();
    });
  });

  it('should render home button', async () => {
    const rendered = renderComponent();
    const button = rendered.getByRole('button');
    userEvent.click(button);
    await waitFor(() => {
      expect(rendered.getByText('Home')).toBeDefined();
    });
  });

  it('if section, should render section button', async () => {
    const sectionHeader = 'Test Section';
    const rendered = renderComponent({
      sections: [SectionFixture({ header: sectionHeader })],
    });
    const button = rendered.getByRole('button');
    userEvent.click(button);
    await waitFor(() => {
      expect(rendered.getByText(sectionHeader)).toBeDefined();
    });
  });

  it('if NO section, should NOT render section button', async () => {
    const sectionHeader = 'Test Section';
    const rendered = renderComponent({
      sections: [],
    });
    const button = rendered.getByRole('button');
    userEvent.click(button);
    await waitFor(() => {
      expect(rendered.queryByText(sectionHeader)).toBeNull();
    });
  });

  it('if contact form, should render contact button', async () => {
    const rendered = renderComponent({
      contact: ContactFixture(),
    });
    const button = rendered.getByRole('button');
    userEvent.click(button);
    await waitFor(() => {
      expect(rendered.getByText('Contact')).toBeDefined();
    });
  });

  it('if NO contact form, should NOT render contact button', async () => {
    const companyName = 'Test Company';
    const rendered = renderComponent(
      { contact: undefined },
      { companyName: 'Test Company' }
    );

    const button = rendered.getByRole('button');
    userEvent.click(button);
    await waitFor(() => {
      expect(rendered.getByText(companyName)).toBeDefined();
    });
    expect(rendered.queryByText('Contact')).toBeNull();
  });
});
