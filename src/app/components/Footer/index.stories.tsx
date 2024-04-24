import type { Meta, StoryObj } from '@storybook/react';
import { Footer, FooterProps } from '../Footer';
import { FooterFixture, HeroFixture } from '@/app/fixtures';

const meta = {
  title: 'components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<FooterProps> = {}): FooterProps => ({
  hero: HeroFixture(),
  footer: FooterFixture(),
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
