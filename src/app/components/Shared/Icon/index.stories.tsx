import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProps } from '../Icon';

const meta = {
  title: '_Shared/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   type: {
  //     control: 'select',
  //     options: Object.keys(iconMap({ size: 32, color: 'black' })).sort(),
  //   },
  // },
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<IconProps> = {}): IconProps => ({
  type: 'InstagramLogo',
  color: 'black',
  size: 32,
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
