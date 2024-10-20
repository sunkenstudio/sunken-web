import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, CarouselProps } from '../Carousel';
import { CarouselFixture } from '@/app/fixtures';

const meta = {
  title: 'components/<Carousel></Carousel>',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Carousel>;

type Story = StoryObj<typeof meta>;

const withDefaults = (
  overrides: Partial<CarouselProps> = {}
): CarouselProps => ({
  carousel: CarouselFixture(),
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
