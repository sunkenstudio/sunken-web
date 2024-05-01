// @ts-nocheck
'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { H1 } from '../Typography';
// import { StrapiHero } from '../../types';

// export interface HeroProps {
//   hero: StrapiHero;
// }

export const FeatureSection = ({ ...props }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="2px"
      borderColor="green"
      borderRadius="15px"
      margin="10px"
      padding="20px"
    >
      <div>
        <H1>Box 1</H1>
      </div>
      <div>
        <H1>Box 2</H1>
      </div>
      <div>
        <H1>Box 3</H1>
      </div>
      <div>
        <H1>Box 4</H1>
      </div>
    </Box>
  );
};
