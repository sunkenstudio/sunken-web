import { Button, Flex, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { RichText } from '../_Shared/RichText';
import { StrapiBorder, StrapiFooter } from '../../types';
import { useBrand } from '@/app/contexts/BrandContext';
import { Icon } from '../_Shared/Icon';
import { ICONS, IconType } from '@/app/constants';

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

  const socialIcons: { type: IconType; href: string }[] = [
    { type: ICONS.InstagramLogo, href: instagramUrl },
    { type: ICONS.FacebookLogo, href: facebookUrl },
    { type: ICONS.TwitterLogo, href: twitterUrl },
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
                  boxSize={'48px'}
                  p={2}
                  justifyContent={'center'}
                  alignItems={'center'}
                  bgColor={buttonStyle.bgColor}
                  borderRadius={buttonStyle?.border?.radius || ''}
                  border={
                    buttonStyle.border?.width && buttonStyle.border.color
                      ? `${buttonStyle.border.width} solid ${colors[buttonStyle.border.color]}`
                      : ''
                  }
                  shadow={buttonStyle?.shadow || ''}
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
