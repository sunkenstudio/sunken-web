// @ts-nocheck
'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Feature } from './Feature';

export const FeatureSection = ({ featureData }) => {
  return (
    // Use H-Stack.
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      border="2px"
      borderColor="green"
      borderRadius="15px"
      margin="10px"
      padding="20px"
    >
      {featureData.map((e, i) => {
        // Error message "Missing key prop for element in iterator." Have tried to add the key prop multiple times and the linter is still mad.
        // Error message "i is defined but never used."
        // Forcing this commit for now, this is something for Sunday.
        return (
          <Feature
            key={i}
            type={e.type}
            subHeader={e.subHeader}
            blurb={e.blurb}
          />
        );
      })}
    </Box>
  );
};
