import type { Meta, StoryObj } from '@storybook/react';
import { ImageScroll, ImageScrollProps } from '../ImageScroll';
import { ImageFixture } from '@/app/fixtures';

const meta = {
  title: 'components/ImageScroll',
  component: ImageScroll,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageScroll>;

type Story = StoryObj<typeof meta>;

const withDefaults = (
  overrides: Partial<ImageScrollProps> = {}
): ImageScrollProps => ({
  bgColor: 'light',
  images: [ImageFixture(), ImageFixture(), ImageFixture(), ImageFixture()],
  speed: 'normal',
  ...overrides,
});

export const Normal: Story = {
  args: {
    ...withDefaults(),
  },
};

export const Slow: Story = {
  args: {
    ...withDefaults({ speed: 'slow' }),
  },
};

export const Fast: Story = {
  args: {
    ...withDefaults({ speed: 'fast' }),
  },
};

export default meta;
