import type { Meta, StoryObj } from '@storybook/react';
import { Map, MapProps } from '../Map';
import { MapFixture } from '@/app/fixtures';

const meta = {
  title: 'components/Map',
  component: Map,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Map>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<MapProps> = {}): MapProps => ({
  mapSection: MapFixture(),
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export const AlternateIcon: Story = {
  args: {
    ...withDefaults({
      mapSection: {
        ...MapFixture({
          markerIcon: 'List',
        }),
      },
    }),
  },
};

export default meta;
