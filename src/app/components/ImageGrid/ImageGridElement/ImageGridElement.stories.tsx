import type { Meta, StoryObj } from '@storybook/react';
import { ImageGridElement, ImageGridElementProps } from '../ImageGridElement';
import { HeroFixture } from '@/app/fixtures';

const meta = {
  title: 'components/ImageGridElement',
  component: ImageGridElement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageGridElement>;

type Story = StoryObj<typeof meta>;

const withDefaults = (
  overrides: Partial<ImageGridElementProps> = {}
): ImageGridElementProps => ({
  label: 'Title',
  href: 'https://google.com',
  img: HeroFixture().image,
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
