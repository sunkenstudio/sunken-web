import React from 'react';

import { Preview } from '@storybook/react';
import { Providers } from '../src/app/providers';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
};

export default preview;
