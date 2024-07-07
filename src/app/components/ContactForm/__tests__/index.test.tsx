'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { ContactForm, ContactFormProps } from '..';
import {
  ContactFixture,
  DateInputFixture,
  DropdownInputFixture,
  HeroFixture,
  SectionFixture,
  TextInputFixture,
  TextareaInputFixture,
  TimeInputFixture,
} from '@/app/fixtures';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
console.log('trigger action');
describe('ContactForm', () => {
  const renderComponent = (overrides: Partial<ContactFormProps> = {}) => {
    const defaults = (props: Partial<ContactFormProps>): ContactFormProps => ({
      hero: HeroFixture(),
      sections: [SectionFixture()],
      contact: ContactFixture(),
      ...props,
    });
    return render(<ContactForm {...defaults(overrides)} />);
  };

  describe('All stories should render successfully', () => {
    testStories(Stories);
  });

  it('match snapshot', () => {
    const rendered = renderComponent();
    expect(rendered).toMatchSnapshot();
  });

  describe('text input', () => {
    it('should render text input', () => {
      const rendered = renderComponent({
        contact: ContactFixture({
          fields: [TextInputFixture({ label: 'Test Label' })],
        }),
      });
      expect(rendered.getByText('TEST LABEL'));
    });
  });

  describe('time input', () => {
    it('should render time input', () => {
      const rendered = renderComponent({
        contact: ContactFixture({
          fields: [TimeInputFixture({ label: 'Test Label' })],
        }),
      });
      expect(rendered.getByText('TEST LABEL'));
    });
  });

  describe('date input', () => {
    it('should render date input', () => {
      const rendered = renderComponent({
        contact: ContactFixture({
          fields: [DateInputFixture({ label: 'Test Label' })],
        }),
      });
      expect(rendered.getByText('TEST LABEL'));
    });
  });

  describe('dropdown input', () => {
    it('should render dropdown input', () => {
      const rendered = renderComponent({
        contact: ContactFixture({
          fields: [DropdownInputFixture({ label: 'Test Label' })],
        }),
      });
      expect(rendered.getByText('TEST LABEL'));
    });
  });

  describe('textarea input', () => {
    it('should render textarea input', () => {
      const rendered = renderComponent({
        contact: ContactFixture({
          fields: [TextareaInputFixture({ label: 'Test Label' })],
        }),
      });
      expect(rendered.getByText('TEST LABEL'));
    });
  });
});
