'use client';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';

import { Icon, IconProps } from '..';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import { IconType } from '@/app/constants';

describe('Icon', () => {
  const renderComponent = (overrides: Partial<IconProps> = {}) => {
    const defaults = (props: Partial<IconProps>): IconProps => ({
      type: 'FacebookLogo',
      size: 32,
      color: 'black',
      ...props,
    });
    return render(<Icon {...defaults(overrides)} />);
  };

  describe('All stories should render successfully', () => {
    testStories(Stories);
  });

  it('match snapshot', () => {
    const rendered = renderComponent();
    expect(rendered).toMatchSnapshot();
  });

  it('should render InstagramLogo', async () => {
    const rendered = renderComponent({ type: 'InstagramLogo' });
    await waitFor(() => {
      expect(rendered.getByTitle('InstagramLogo icon')).toBeDefined();
    });
  });

  it('should render BrokenImage when given an incorrect type', async () => {
    const rendered = renderComponent({ type: 'foo' as IconType });
    await waitFor(() => {
      expect(rendered.getByTitle('Image Broken')).toBeDefined();
    });
  });
});
