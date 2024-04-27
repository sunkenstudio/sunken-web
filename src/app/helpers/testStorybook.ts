// @ts-nocheck
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import preview from '../../../.storybook/preview';

export const testStories = (Stories: any) => {
  const wrapper = preview?.decorators?.[0];
  const testCases = Object.entries(composeStories(Stories));

  test.each(testCases)('Renders %s story', async (_StoryName, Story) => {
    const tree = await render(wrapper(Story, Story));
    expect(tree.baseElement).toMatchSnapshot();
  });
};
