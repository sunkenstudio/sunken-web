// @ts-nocheck
'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Feature } from './Feature';

export const FeatureSection = () => {
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
        <Feature />
      </div>
    </Box>
  );
};
