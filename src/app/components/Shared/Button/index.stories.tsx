import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../Button';

const meta = {
  title: '_Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<ButtonProps> = {}): ButtonProps => ({
  typename: 'foo',
  type: 'link',
  text: 'Hell0',
  href: '',
  color: 'light',
  bgColor: 'dark',
  border: {
    width: '',
    radius: '',
    color: '',
  },
  shadow: '',
  ...overrides,
});
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
