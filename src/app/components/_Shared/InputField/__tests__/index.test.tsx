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
          <form>
            <InputField {...defaults(overrides)} />
          </form>
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

  describe('text input', () => {
    it('should render if type text', () => {
      const id = 'test-id';
      const rendered = renderComponent({
        id,
        field: { label: 'Test Field', type: 'text' },
      });
      const testId = `input-${id}`;
      expect(rendered.getByTestId(testId)).toBeDefined();
    });

    it('should render label', () => {
      const label = 'Test Field';
      const rendered = renderComponent({
        field: { label, type: 'text' },
      });
      expect(rendered.getByText(label.toUpperCase())).toBeDefined();
    });
  });

  describe('email input', () => {
    it('should render if type email', () => {
      const id = 'test-id';
      const rendered = renderComponent({
        id,
        field: { label: 'Test Field', type: 'email' },
      });
      const testId = `input-${id}`;
      expect(rendered.getByTestId(testId)).toBeDefined();
    });

    it('should render label', () => {
      const label = 'Test Field';
      const rendered = renderComponent({
        field: { label, type: 'email' },
      });
      expect(rendered.getByText(label.toUpperCase())).toBeDefined();
    });
  });

  describe('date input', () => {
    it('should render if type date', () => {
      const id = 'test-id';
      const rendered = renderComponent({
        id,
        field: { label: 'Test Field', type: 'date' },
      });
      const testId = `input-${id}`;
      expect(rendered.getByTestId(testId)).toBeDefined();
    });

    it('should render label', () => {
      const label = 'Test Field';
      const rendered = renderComponent({
        field: { label, type: 'date' },
      });
      expect(rendered.getByText(label.toUpperCase())).toBeDefined();
    });
  });

  describe('time input', () => {
    it('should render if type time', () => {
      const id = 'test-id';
      const rendered = renderComponent({
        id,
        field: { label: 'Test Field', type: 'time' },
      });
      const testId = `input-${id}`;
      expect(rendered.getByTestId(testId)).toBeDefined();
    });

    it('should render label', () => {
      const label = 'Test Field';
      const rendered = renderComponent({
        field: { label, type: 'time' },
      });
      expect(rendered.getByText(label.toUpperCase())).toBeDefined();
    });
  });

  describe('number input', () => {
    it('should render if type number', () => {
      const id = 'test-id';
      const rendered = renderComponent({
        id,
        field: { label: 'Test Field', type: 'number' },
      });
      const testId = `input-${id}`;
      expect(rendered.getByTestId(testId)).toBeDefined();
    });

    it('should render label', () => {
      const label = 'Test Field';
      const rendered = renderComponent({
        field: { label, type: 'number' },
      });
      expect(rendered.getByText(label.toUpperCase())).toBeDefined();
    });
  });

  describe('tel input', () => {
    it('should render if type tel', () => {
      const id = 'test-id';
      const rendered = renderComponent({
        id,
        field: { label: 'Test Field', type: 'tel' },
      });
      const testId = `input-${id}`;
      expect(rendered.getByTestId(testId)).toBeDefined();
    });

    it('should render label', () => {
      const label = 'Test Field';
      const rendered = renderComponent({
        field: { label, type: 'tel' },
      });
      expect(rendered.getByText(label.toUpperCase())).toBeDefined();
    });
  });

  describe('money input', () => {
    it('should render if type money', () => {
      const id = 'test-id';
      const rendered = renderComponent({
        id,
        field: { label: 'Test Field', type: 'money' },
      });
      const testId = `input-${id}`;
      expect(rendered.getByTestId(testId)).toBeDefined();
    });

    it('should render label', () => {
      const label = 'Test Field';
      const rendered = renderComponent({
        field: { label, type: 'money' },
      });
      expect(rendered.getByText(label.toUpperCase())).toBeDefined();
    });
  });

  describe('dropdown input', () => {
    it('should render if type dropdown', () => {
      const id = 'test-id';
      const rendered = renderComponent({
        id,
        field: { label: 'Test Field', type: 'dropdown' },
      });
      const testId = `input-${id}`;
      expect(rendered.getByTestId(testId)).toBeDefined();
    });

    it('should render label', () => {
      const label = 'Test Field';
      const rendered = renderComponent({
        field: { label, type: 'dropdown' },
      });
      expect(rendered.getByText(label.toUpperCase())).toBeDefined();
    });
  });

  describe('textarea input', () => {
    it('should render if type textarea', () => {
      const id = 'test-id';
      const rendered = renderComponent({
        id,
        field: { label: 'Test Field', type: 'textarea' },
      });
      const testId = `input-${id}`;
      expect(rendered.getByTestId(testId)).toBeDefined();
    });

    it('should render label', () => {
      const label = 'Test Field';
      const rendered = renderComponent({
        field: { label, type: 'textarea' },
      });
      expect(rendered.getByText(label.toUpperCase())).toBeDefined();
    });
  });
});
