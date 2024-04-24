import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm, ContactFormProps } from '../ContactForm';
import { ContactFixture, HeroFixture, SectionFixture } from '@/app/fixtures';

const meta = {
  title: 'components/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ContactForm>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<ContactFormProps> = {}) => ({
  hero: HeroFixture(),
  sections: [SectionFixture()],
  contact: ContactFixture(),
  ...overrides,
});
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
