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
  images: [ImageFixture(), ImageFixture(), ImageFixture(), ImageFixture()],
  speed: 1,
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
