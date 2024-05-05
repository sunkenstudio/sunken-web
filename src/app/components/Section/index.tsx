import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { H3, Paragraph } from '../Typography';
import { RichText } from '../Shared/RichText';
import { SectionBg } from '../Shared/SectionBg';
import { StrapiSection } from '../../types';
import { Image } from '../Shared/Image';
import { useBrand } from '@/app/contexts/BrandContext';

export interface SectionProps {
  section: StrapiSection;
}

export const Section = ({ section }: SectionProps) => {
  const { header, sortOrder, text, image, caption, bgImage, bgColor, variant } =
    section;

  const { colors } = useBrand();

  return (
    <Flex
      id={`section-${sortOrder}`}
      w="100%"
      color={colors.dark}
      position="relative"
      minH={'2xl'}
      justifyContent={'center'}
      alignItems={'center'}
      py={{ base: '2rem', md: '' }}
    >
      <SectionBg bgColor={colors[bgColor]} image={bgImage} />
      <Flex w="100%" h="100%">
        <Box
          justifyContent={'center'}
          alignItems={'center'}
          h="100%"
          gap={'5'}
          zIndex={10}
          w="100%"
        >
          <Flex
            w="100%"
            h="100%"
            direction={{ base: 'column', md: 'row' }}
            justifyContent={'center'}
            alignItems={'center'}
            p={{ base: '.5rem', md: '0rem' }}
          >
            {variant === 'left' ? (
              <Stack
                boxSize={{ base: 'xs', md: 'md' }}
                mb={{ base: '.5rem', md: '0rem' }}
                mr={{ base: '0rem', md: '3rem' }}
              >
                <Image
                  boxSize={{ base: 'xs', md: 'md' }}
                  {...image}
                  objectFit={'cover'}
                />
                <Paragraph>{caption}</Paragraph>
              </Stack>
            ) : null}
            <Box w={{ base: '100%', md: '45%' }} textColor={'#FFF'}>
              <H3 mb={'1.25rem'}>{header}</H3>
              <RichText content={text} />
            </Box>
            {variant === 'right' ? (
              <Stack
                boxSize={{ base: 'xs', md: 'md' }}
                mb={{ base: '.5rem', md: '0rem' }}
                ml={{ base: '0rem', md: '1rem' }}
              >
                <Image
                  boxSize={{ base: 'xs', md: 'md' }}
                  {...image}
                  objectFit={'cover'}
                />
                <Paragraph>{caption}</Paragraph>
              </Stack>
            ) : null}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
