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

export const Left: Story = {
  args: {
    ...withDefaults({ section: SectionFixture({ variant: 'left' }) }),
  },
};

export const Right: Story = {
  args: {
    ...withDefaults({ section: SectionFixture({ variant: 'right' }) }),
  },
};

export const SplitLeft: Story = {
  args: {
    ...withDefaults({ section: SectionFixture({ variant: 'splitLeft' }) }),
  },
};
export const SplitRight: Story = {
  args: {
    ...withDefaults({ section: SectionFixture({ variant: 'splitRight' }) }),
  },
};
export default meta;
