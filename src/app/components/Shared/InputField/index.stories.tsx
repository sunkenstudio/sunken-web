import type { Meta, StoryObj } from '@storybook/react';
import { InputField, InputFieldProps } from '../InputField';
import { TextInputFixture } from '@/app/fixtures';
import { fn } from '@storybook/test';

const meta = {
  title: '_Shared/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputField>;

type Story = StoryObj<typeof meta>;

const withDefaults = (overrides: Partial<InputFieldProps> = {}) => ({
  id: 'name',
  value: 'value',
  field: TextInputFixture(),
  onChange: fn(),
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
