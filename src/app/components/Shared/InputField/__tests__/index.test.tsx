'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { InputField, InputFieldProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import { BrandFixture } from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/app/styles/theme';
import { StrapiBrand } from '@/app/types';

describe('InputField', () => {
  const renderComponent = (
    overrides: Partial<InputFieldProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (props: Partial<InputFieldProps>): InputFieldProps => ({
      id: 'test-id',
      field: {
        label: 'Test Field',
        type: 'text',
      },
      value: '',
      onChange: jest.fn(),
      ...props,
    });
    return render(
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture(contextOverrides)}>
          <InputField {...defaults(overrides)} />
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