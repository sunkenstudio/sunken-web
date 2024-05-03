'use client';
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { H3, H4 } from '../Typography';
import { scrollToElement } from '@/app/helpers/utils';
import { Color, StrapiContact, StrapiHero, StrapiSection } from '../../types';
import { useBrand } from '@/app/contexts/BrandContext';
import { Icon } from '../Shared/Icon';

export interface HeaderProps {
  hero: StrapiHero;
  sections: StrapiSection[];
  contact: StrapiContact;
}

export const Header = ({ hero, sections, contact }: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colors, fonts, companyName } = useBrand();
  console.log({ contact });
  const sharedProps = {
    color: colors[hero.buttons[0].color as Color],
    bgColor: colors[hero.buttons[0].bgColor as Color],
    borderRadius: hero.buttons[0].border?.radius || '',
    shadow: hero.buttons[0].shadow,
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClose();
    scrollToElement(e);
  };

  return (
    <Box position="fixed" top="0px" w="100%" zIndex={999}>
      <Flex>
        <Box />
        <Spacer />
        <Button
          m={4}
          onClick={onOpen}
          boxSize={'48px'}
          p={2}
          justifyContent={'center'}
          alignItems={'center'}
          _hover={{ filter: 'brightness(75%)' }}
          {...sharedProps}
        >
          <Icon type={'list'} size={32} color={colors.light} />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bgColor={colors.secondary}
          fontFamily={fonts.headers.family}
        >
          <DrawerCloseButton color={colors.light} />
          <Stack mt={'3rem'} alignItems={'center'} p={3} gap={'2rem'}>
            <H3 color={colors.light} textAlign={'center'}>
              {companyName}
            </H3>
            <Divider orientation="horizontal" />
            <a
              onClick={handleScroll}
              href={`#hero`}
              style={{ minWidth: '70%' }}
            >
              <Button
                color={colors.light}
                colorScheme={'tansparent'}
                borderRadius={'.5rem'}
                p={2}
                _hover={{ border: `2px solid ${colors.light}` }}
                w="100%"
              >
                <H4>Home</H4>
              </Button>
            </a>
            {sections.map((i) => (
              <a
                key={`modal-link-${i.sortOrder}`}
                onClick={handleScroll}
                href={`#section-${i.sortOrder}`}
                style={{ minWidth: '70%' }}
              >
                <Button
                  color={colors.light}
                  colorScheme={'tansparent'}
                  borderRadius={'.5rem'}
                  p={2}
                  w="100%"
                  _hover={{ border: `2px solid ${colors.light}` }}
                >
                  <H4>{i.header}</H4>
                </Button>
              </a>
            ))}
            {contact && (
              <a
                onClick={handleScroll}
                href={`#contact`}
                style={{ minWidth: '70%' }}
              >
                <Button
                  as="a"
                  color={colors.light}
                  colorScheme={'tansparent'}
                  borderRadius={'.5rem'}
                  _hover={{ border: `2px solid ${colors.light}` }}
                  p={2}
                  w="100%"
                >
                  <H4>{contact.header}</H4>
                </Button>
              </a>
            )}
          </Stack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
