// @ts-nocheck
'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { H2, Paragraph } from '../../Typography';
import { Icon } from '../../Shared/Icon';
import { useBrand } from '@/app/contexts/BrandContext';

export const Feature = ({ type }) => {
  const { colors } = useBrand();
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
      <Icon type={type} size={32} color={colors.light} />
      <H2>Feature</H2>
      <Paragraph>Here is some information about the Feature</Paragraph>
    </Box>
  );
};
