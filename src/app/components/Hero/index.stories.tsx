import type { Meta, StoryObj } from '@storybook/react';
import { Hero, HeroProps } from '../Hero';
import { HeroFixture } from '@/app/fixtures';

const meta = {
  title: 'components/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Hero>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<HeroProps> = {}): HeroProps => ({
  hero: HeroFixture(),
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export const Split: Story = {
  args: {
    ...withDefaults({ hero: HeroFixture({ variant: 'split' }) }),
  },
};

export default meta;
