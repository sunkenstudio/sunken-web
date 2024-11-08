import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiProjectSection } from '@/app/types';
import { Box, Button, Flex, HStack, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { H3, H5, Paragraph } from '../Typography';
import { RichText } from '../Shared/RichText';
import { Icon } from '../Shared/Icon';

export interface ProjectSectionProps {
  projectSection: StrapiProjectSection;
}

export const ProjectSection = ({ projectSection }: ProjectSectionProps) => {
  const { header, bgColor, color, articles } = projectSection;
  const { colors } = useBrand();

  return (
    <Flex
      w="100%"
      color={colors.dark}
      position="relative"
      minH={'2xl'}
      justifyContent={'center'}
      alignItems={'center'}
      py={{ base: '2rem', md: '' }}
    >
      <Box w={{ base: '100%', md: '45%' }}>
        <H3 mb={'1.25rem'}>{header}</H3>
        <H5>{articles[0].title}</H5>
        <RichText content={articles[0].description} />
        <Link href={articles[0].link} target="_blank">
          <Icon type="ArrowSquareOut" size={32} color={colors.dark} />
        </Link>
        <HStack>
          <Button>
            <Icon type="CaretLeft" size={64} color={colors.dark} />
          </Button>
          <Image src={articles[0].images[0].url} />
          <Button>
            <Icon type="CaretRight" size={64} color={colors.dark} />
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};
