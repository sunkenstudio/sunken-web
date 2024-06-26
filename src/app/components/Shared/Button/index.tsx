import { Button as ChakraButton, ChakraStyledOptions } from '@chakra-ui/react';
import React from 'react';
import { scrollToElement } from '@/app/helpers/utils';
import { useBrand } from '@/app/contexts/BrandContext';
import { Color } from '@/app/types';

export type ButtonProps = ChakraStyledOptions;
export const Button = ({
  typename,
  type,
  text,
  href,
  color,
  bgColor,
  border,
  shadow,
  ...rest
}: ButtonProps) => {
  const { colors } = useBrand();
  const commonProps = {
    id: typename,
    textColor: color,
    bgColor: colors?.[bgColor as Color],
    borderColor: colors?.[border?.color as Color],
    borderWidth: border?.width,
    borderRadius: border?.radius,
    fontFamily: 'Arial',
    textShadow: '1px 1px 1px black',
    shadow,
    ...rest,
  };
  if (type === 'link') {
    if (href.includes('#')) {
      return (
        <a onClick={scrollToElement} href={href} style={{ width: '100%' }}>
          <ChakraButton
            {...commonProps}
            w={{ base: '100%', md: '45%' }}
            _hover={{ filter: 'brightness(75%)' }}
          >
            {text}
          </ChakraButton>
        </a>
      );
    }
    return (
      <a href={href} style={{ width: '100%' }}>
        <ChakraButton {...commonProps} _hover={{ filter: 'brightness(75%)' }}>
          {text}
        </ChakraButton>
      </a>
    );
  }
  if (type === 'submit') {
    return (
      <ChakraButton
        type="submit"
        {...commonProps}
        _hover={{ filter: 'brightness(75%)' }}
      >
        {text}
      </ChakraButton>
    );
  }
  return <>MISSING BUTTON IMPLEMENTATION</>;
};
