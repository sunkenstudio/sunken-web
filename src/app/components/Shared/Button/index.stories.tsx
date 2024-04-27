import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { ChakraStyledOptions } from '@chakra-ui/react';

type ButtonProps = ChakraStyledOptions;

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

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
