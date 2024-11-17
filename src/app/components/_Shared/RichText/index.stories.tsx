import type { Meta, StoryObj } from '@storybook/react';
import { RichText, RichTextProps } from '.';

const meta = {
  title: '_Shared/RichText',
  component: RichText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RichText>;

type Story = StoryObj<typeof meta>;

const withDefaults = (
  overrides: Partial<RichTextProps> = {}
): RichTextProps => ({
  content: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'Corridor Cocktails provides a portable mini bar, craft cocktails, skilled bartenders and anything you need to make your event amazing! ',
        },
      ],
    },
  ],
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
