import type { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from '../Image';
import { Color } from '@/app/types';

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
  media: {
    typename: '',
    url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/597ee6441f99aff5999e28ce065b563b.jpeg',
  },
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
