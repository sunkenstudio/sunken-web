import { Button, Flex, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { RichText } from '../Shared/RichText';
import { StrapiBorder, StrapiFooter } from '../../types';
import { useBrand } from '@/app/contexts/BrandContext';

const SocialButtonStyle = (sharedProps: {
  bgColor: string;
  border: StrapiBorder;
  shadow: string;
}) => {
  const baseStyle = {
    boxSize: '48px',
    p: 2,
    justifyContent: 'center',
    alignItems: 'center',
    bgColor: '',
    borderRadius: '',
    border: '',
    shadow: '',
  };
  if (sharedProps.bgColor) {
    baseStyle.bgColor = sharedProps.bgColor;
  }
  if (sharedProps.border?.radius) {
    baseStyle.borderRadius = sharedProps.border?.radius;
  }
  if (sharedProps.border?.width && sharedProps.border.color) {
    baseStyle.border = `${sharedProps.border.width} solid ${sharedProps.border.color}`;
  }
  if (sharedProps.shadow) {
    baseStyle.shadow = sharedProps.shadow;
  }
  return baseStyle;
};

export interface FooterProps {
  buttonStyle: {
    textColor: string;
    bgColor: string;
    border: StrapiBorder;
    shadow: string;
  };
  footer: StrapiFooter;
}

export const Footer = ({ buttonStyle, footer }: FooterProps) => {
  const { colors } = useBrand();
  const { instagramUrl, facebookUrl, twitterUrl, text } = footer;
  return (
    <Flex
      bottom={0}
      left={0}
      right={0}
      position={'fixed'}
      justifyContent={'center'}
      w="100%"
      zIndex={999}
    >
      <Stack
        textAlign={'center'}
        color={colors.light}
        textShadow={`1px 1px 0px ${colors.dark}`}
        fontSize={'x-small'}
        w="100%"
      >
        <HStack gap={3} justifyContent={'center'} w="100%">
          {instagramUrl && (
            <Link href={instagramUrl} target="_blank">
              <Button
                as="a"
                {...SocialButtonStyle(buttonStyle)}
                _hover={{ filter: 'brightness(75%)' }}
              >
                <InstagramLogo size={32} color={colors.light} />
              </Button>
            </Link>
          )}
          {facebookUrl && (
            <Link href={facebookUrl} target="_blank">
              <Button
                as="a"
                {...SocialButtonStyle(buttonStyle)}
                _hover={{ filter: 'brightness(75%)' }}
              >
                <FacebookLogo size={32} color={colors.light} />
              </Button>
            </Link>
          )}
          {twitterUrl && (
            <Link href={twitterUrl} target="_blank">
              <Button
                as="a"
                {...SocialButtonStyle(buttonStyle)}
                _hover={{ filter: 'brightness(75%)' }}
              >
                <TwitterLogo size={32} color={colors.light} />
              </Button>
            </Link>
          )}
        </HStack>
        <RichText
          content={text}
          fontFamily={'Arial'}
          textShadow="1px 1px 1px black"
        />
      </Stack>
    </Flex>
  );
};
