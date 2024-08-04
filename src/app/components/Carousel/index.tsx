'use client';
import { useBrand } from '@/app/contexts/BrandContext';

import { Flex } from '@chakra-ui/react';

export const Carousel = () => {
  const { colors } = useBrand();
  return (
    <Flex
      id={'carousel'}
      w="100%"
      color={colors.dark}
      position="relative"
      minH={'2xl'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <span>Carousel here</span>
    </Flex>
  );
};
