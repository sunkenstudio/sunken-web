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

const ContentContainer = ({ children }: { children: React.ReactNode }) => (
  <Flex
    zIndex={10}
    direction={{ base: 'column', md: 'row' }}
    alignItems={'center'}
    justifyContent={'center'}
    w="100%"
    minH="2xl"
  >
    {children}
  </Flex>
);

export const Section = ({ section }: SectionProps) => {
  const { header, sortOrder, text, image, caption, bgImage, bgColor, variant } =
    section;

  const { colors } = useBrand();

  const renderContent = () => {
    if (variant === 'right') {
      return renderRight();
    }
    if (variant === 'splitRight') {
      return renderSplitRight();
    }
    if (variant === 'splitLeft') {
      return renderSplitLeft();
    }
    return renderLeft();
  };

  const renderLeft = () => (
    <ContentContainer>
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
      <Box
        w={{ base: '100%', md: '45%' }}
        textColor={'#FFF'}
        pl={{ base: 0, md: '5rem' }}
      >
        <H3 mb={'1.25rem'}>{header}</H3>
        <RichText content={text} />
      </Box>
    </ContentContainer>
  );

  const renderRight = () => (
    <ContentContainer>
      <Box
        w={{ base: '100%', md: '45%' }}
        textColor={'#FFF'}
        pr={{ base: 0, md: '5rem' }}
      >
        <H3 mb={'1.25rem'}>{header}</H3>
        <RichText content={text} />
      </Box>
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
    </ContentContainer>
  );

  const renderSplitLeft = () => (
    <>
      <Box w={{ base: '100%', md: '50%' }} h="100%">
        <Image
          {...image}
          objectFit={'cover'}
          h="100%"
          w="100%"
          border={{ width: '0', radius: '0', color: 'dark' }}
          py={{ base: '2rem', md: 0 }}
        />
      </Box>
      <Box
        w={{ base: '100%', md: '50%' }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        textColor={'#FFF'}
      >
        <Box w="90%">
          <H3 mb={'1.25rem'}>{header}</H3>
          <RichText content={text} />
        </Box>
      </Box>
    </>
  );

  const renderSplitRight = () => (
    <>
      <Box
        w={{ base: '100%', md: '50%' }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        textColor={'#FFF'}
        py={{ base: '2rem', md: 0 }}
      >
        <Box w="90%">
          <H3 mb={'1.25rem'}>{header}</H3>
          <RichText content={text} />
        </Box>
      </Box>
      <Box w={{ base: '100%', md: '50%' }} h="100%">
        <Image
          {...image}
          objectFit={'cover'}
          h="100%"
          w="100%"
          border={{ width: '0', radius: '0', color: 'dark' }}
        />
      </Box>
    </>
  );

  return (
    <Flex
      id={`section-${sortOrder}`}
      w="100%"
      color={colors.dark}
      position="relative"
      minH={'2xl'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <SectionBg bgColor={colors[bgColor]} image={bgImage} />
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
