import React from 'react';

import { Preview } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrandProvider } from '@/app/contexts/BrandContext';
import theme from '@/app/styles/theme';
import { BrandFixture } from '@/app/fixtures';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture()}>
          <Story />
        </BrandProvider>
      </ChakraProvider>
    ),
  ],
};

export default preview;
