'use client';
import { Box, Flex, HStack, Hide, Stack } from '@chakra-ui/react';
import React from 'react';
import { H1, H3, Paragraph } from '../Typography';
import { Image } from '../Shared/Image';
import { RichText } from '../Shared/RichText';
import { SectionBg } from '../Shared/SectionBg';
import { StrapiHero } from '../../types';
import { Button } from '../Shared/Button';
import { useBrand } from '@/app/contexts/BrandContext';

export interface HeroProps {
  hero: StrapiHero;
}

export const Hero = ({ hero }: HeroProps) => {
  const { colors } = useBrand();
  const { header, subheader, text, buttons, image, bgImage, variant } = hero;

  const renderCenterVariant = () => (
    <Box alignItems={'left'} w={{ base: '90%', md: '50%' }}>
      <Stack gap={3} textAlign={'center'} alignItems={'center'}>
        <Box>
          {image && (
            <Image
              boxSize={'md'}
              {...image}
              objectFit={'cover'}
              height={{ base: '20%', md: '100%' }}
              maxHeight={'20rem'}
              maxWidth={'20rem'}
            />
          )}
        </Box>
        <H1 textShadow={`1px 1px 3px ${colors.dark}`}>{header}</H1>
        <H3 textShadow={`1px 1px 3px ${colors.dark}`}>{subheader}</H3>
        <Paragraph w={{ base: '100%', md: '85%' }}>
          <RichText content={text} />
        </Paragraph>
        <HStack mt={3} gap={3} w="100%">
          {buttons.map((i) => {
            return <Button key={i.typename} {...i} />;
          })}
        </HStack>
      </Stack>
    </Box>
  );

  const renderLeftVariant = () => (
    <>
      <Box alignItems={'left'} w={{ base: '90%', md: '50%' }}>
        <Stack gap={3}>
          <H1 textShadow={`1px 1px 3px ${colors.dark}`}>{header}</H1>
          <H3 textShadow={`1px 1px 3px ${colors.dark}`}>{subheader}</H3>
          <Paragraph w={{ base: '100%', md: '85%' }}>
            <RichText content={text} />
          </Paragraph>
          <HStack mt={3} gap={3} w="100%">
            {buttons.map((i) => {
              return <Button key={i.typename} {...i} />;
            })}
          </HStack>
        </Stack>
      </Box>
      <Hide below="md">
        {image && (
          <Box>
            <Image boxSize={'md'} {...image} objectFit={'cover'} />
          </Box>
        )}
      </Hide>
    </>
  );

  const renderSplitVariant = () => (
    <>
      <Box
        w={'50%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack gap={3} maxW="90%">
          <H1 textShadow={`1px 1px 3px ${colors.dark}`}>{header}</H1>
          <H3 textShadow={`1px 1px 3px ${colors.dark}`}>{subheader}</H3>
          <Paragraph w={{ base: '100%', md: '85%' }}>
            <RichText content={text} />
          </Paragraph>
          <HStack mt={3} gap={3}>
            {buttons.map((i) => {
              return <Button key={i.typename} {...i} />;
            })}
          </HStack>
        </Stack>
      </Box>
      <Hide below="md">
        {image && (
          <Box w={'50%'} h="100%">
            <Image
              boxSize={'md'}
              media={image.media}
              objectFit={'cover'}
              h="100%"
              w="100%"
              border={{ width: '0', radius: '0', color: 'dark' }}
            />
          </Box>
        )}
      </Hide>
    </>
  );

  const renderContent = () => {
    if (variant === 'centerAligned') {
      return renderCenterVariant();
    }
    if (variant === 'split') {
      return renderSplitVariant();
    }
    return renderLeftVariant();
  };
  return (
    <Flex
      id={'hero'}
      w="100%"
      color={colors.light}
      position="relative"
      minH={'2xl'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <SectionBg bgColor={''} image={bgImage} />
      <Flex
        zIndex={10}
        direction={{ base: 'column', md: 'row' }}
        alignItems={'center'}
        justifyContent={'center'}
        w="100%"
        h="2xl"
      >
        {renderContent()}
      </Flex>
    </Flex>
  );
};
