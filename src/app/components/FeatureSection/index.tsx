// @ts-nocheck
'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Feature } from './Feature';

export const FeatureSection = () => {
  const featureData = [
    {
      type: 'headset',
      subHeader: '24 Hour Customer Service',
      blurb: 'Need help? Our team of specialists is ready to make your day!',
    },
    {
      type: 'gift',
      subHeader: 'Send a Gift!',
      blurb: 'Shopping for someone else? No problem!',
    },
    {
      type: 'student',
      subHeader: 'Academic Portal',
      blurb: 'Browse student resources and office hours.',
    },
    {
      type: 'coffee',
      subHeader: 'Buy us a Cup of Coffee!',
      blurb: 'Support our work and keep us awake!',
    },
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
      {featureData.map((e, i) => {
        // Error message "Missing key prop for element in iterator." Have tried to add the key prop multiple times and the linter is still mad.
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
