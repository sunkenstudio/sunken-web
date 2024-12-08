import type { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from '.';
import { Color } from '@/app/types';
import { ImageFixture } from '@/app/fixtures';

const meta = {
  title: '_Shared/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<ImageProps> = {}): ImageProps => ({
  typename: '',
  media: ImageFixture({
    url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/597ee6441f99aff5999e28ce065b563b.jpeg',
  }),
  alt: 'foo',
  border: { width: '', color: 'dark' as Color, radius: '' },
  filter: {
    color: 'light' as Color,
    opacity: 0,
    grayscale: 0,
  },
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
