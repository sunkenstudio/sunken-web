import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from '../Header';
import { ContactFixture, HeroFixture, SectionFixture } from '@/app/fixtures';

const meta = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<HeaderProps> = {}) => ({
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
