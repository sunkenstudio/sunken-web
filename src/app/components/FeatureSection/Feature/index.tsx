// @ts-nocheck
'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { H4, Paragraph } from '../../Typography';
import { Icon } from '../../Shared/Icon';
import { useBrand } from '@/app/contexts/BrandContext';

export const Feature = ({ type, subHeader, blurb }) => {
  const { colors } = useBrand();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      width="228px"
      height="264px"
      border="2px"
      borderColor="green"
      borderRadius="15px"
    >
      <Icon type={type} size={64} color={colors.light} />
      <H4>{subHeader}</H4>
      <Paragraph>{blurb}</Paragraph>
    </Box>
  );
};
