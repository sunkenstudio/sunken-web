import type { Meta, StoryObj } from '@storybook/react';
import { ProjectSection, ProjectSectionProps } from '../ProjectSection';
import { ProjectSectionFixture } from '@/app/fixtures';

const meta = {
  title: 'components/ProjectSection',
  component: ProjectSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProjectSection>;

type Story = StoryObj<typeof meta>;

const withDefaults = (
  overrides: Partial<ProjectSectionProps> = {}
): ProjectSectionProps => ({
  projectSection: ProjectSectionFixture(),
  ...overrides,
});

export const Primary: Story = {
  args: {
    ...withDefaults(),
  },
};

export default meta;
