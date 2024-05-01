// @ts-nocheck
'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { H2, Paragraph } from '../../Typography';

export const Feature = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      border="2px"
      borderColor="green"
      borderRadius="15px"
      margin="10px"
      padding="20px"
    >
      <H2>Feature</H2>
      <Paragraph>Here is some information about the Feature</Paragraph>
    </Box>
  );
};
