import { Button, Flex, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { RichText } from '../Shared/RichText';
import { StrapiBorder, StrapiFooter } from '../../types';
import { useBrand } from '@/app/contexts/BrandContext';
import { Icon, IconTypes } from '../Shared/Icon';

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

  const socialIcons: { type: IconTypes; href: string }[] = [
    { type: 'instagram', href: instagramUrl },
    { type: 'facebook', href: facebookUrl },
    { type: 'twitter', href: twitterUrl },
  ];
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
          {socialIcons.map((i) =>
            i.href ? (
              <Link key={`social-icon-${i.type}`} href={i.href} target="_blank">
                <Button
                  as="a"
                  {...SocialButtonStyle(buttonStyle)}
                  _hover={{ filter: 'brightness(75%)' }}
                >
                  <Icon type={i.type} size={32} color={colors.light} />
                </Button>
              </Link>
            ) : null
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
