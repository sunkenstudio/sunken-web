import type { Meta, StoryObj } from '@storybook/react';
import { Section, SectionProps } from '../Section';
import { SectionFixture } from '@/app/fixtures';

const meta = {
  title: 'components/Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Section>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<SectionProps> = {}): SectionProps => ({
  section: SectionFixture(),
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
