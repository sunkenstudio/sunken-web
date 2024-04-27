import React from 'react';

import { Preview } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrandProvider } from '@/app/contexts/BrandContext';
import theme from '@/app/styles/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <BrandProvider>
          <Story />
        </BrandProvider>
      </ChakraProvider>
    ),
  ],
};

export default preview;
