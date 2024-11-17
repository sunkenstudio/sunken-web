import type { Meta, StoryObj } from '@storybook/react';
import { FeatureSection, FeatureSectionProps } from '../FeatureSection';
import { FeatureSectionFixture } from '@/app/fixtures';

const meta = {
  title: 'components/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FeatureSection>;

type Story = StoryObj<typeof meta>;

const withDefaults = (
  overrides: Partial<FeatureSectionProps> = {}
): FeatureSectionProps => ({
  featureSection: FeatureSectionFixture(),
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
