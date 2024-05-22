import type { Meta, StoryObj } from '@storybook/react';
import { ImageGrid, ImageGridProps } from '../ImageGrid';
import { HeroFixture } from '@/app/fixtures';

const meta = {
  title: 'components/ImageGrid',
  component: ImageGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageGrid>;

type Story = StoryObj<typeof meta>;

const withDefaults = (
  overrides: Partial<ImageGridProps> = {}
): ImageGridProps => ({
  header: 'PROJECTS',
  sortOrder: 0,
  columns: 2,
  elements: [
    {
      label: 'Title',
      href: 'https://google.com',
      img: HeroFixture().image,
      ...overrides,
    },
    {
      label: 'Title',
      href: 'https://google.com',
      img: HeroFixture().image,
      ...overrides,
    },
    {
      label: 'Title',
      href: 'https://google.com',
      img: HeroFixture().image,
      ...overrides,
    },
    {
      label: 'Title',
      href: 'https://google.com',
      img: HeroFixture().image,
      ...overrides,
    },
    {
      label: 'Title',
      href: 'https://google.com',
      img: HeroFixture().image,
      ...overrides,
    },
    {
      label: 'Title',
      href: 'https://google.com',
      img: HeroFixture().image,
      ...overrides,
    },
  ],
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
