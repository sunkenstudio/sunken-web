// @ts-nocheck
'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Feature } from './Feature';

export const FeatureSection = () => {
  const featureData = [
    { type: 'headset' },
    { type: 'gift' },
    { type: 'student' },
    { type: 'coffee' },
  ];

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
      {featureData.map((e) => {
        return <Feature type={e.type} />;
      })}
    </Box>
  );
};
