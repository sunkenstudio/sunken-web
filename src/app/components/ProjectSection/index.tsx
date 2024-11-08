'use client';
import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiProjectSection } from '@/app/types';
import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { H3, H5 } from '../Typography';
import { RichText } from '../Shared/RichText';
import { Icon } from '../Shared/Icon';

export interface ProjectSectionProps {
  projectSection: StrapiProjectSection;
}

export const ProjectSection = ({ projectSection }: ProjectSectionProps) => {
  const { header, articles, bgColor, color } = projectSection;
  const { colors } = useBrand();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
    if (index + 1 < articles.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const decrementIndex = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(articles.length - 1);
    }
  };

  const slideWidth = 100 / articles.length; // Calculate dynamic width for each slide

  const renderDecrementButton = () => {
    if (index === 0) {
      return null;
    }
    return (
      <Button
        data-testid="decrement-btn"
        onClick={decrementIndex}
        zIndex={10}
        bgColor={colors[color]}
        w={{ base: '3rem', md: 'auto' }}
      >
        <Icon type="CaretLeft" size={32} color={colors[bgColor]} />
      </Button>
    );
  };

  const renderIncrementButton = () => {
    if (index === articles.length - 1) {
      return null;
    }
    return (
      <Button
        data-testid="increment-btn"
        onClick={incrementIndex}
        zIndex={10}
        bgColor={colors[color]}
        w={{ base: '3rem', md: 'auto' }}
      >
        <Icon type="CaretRight" size={32} color={colors[bgColor]} />
      </Button>
    );
  };

  const renderArticles = () => {
    return (
      <Box w="100%">
        {/* The container that holds all the slides */}
        <Box
          display="flex"
          transition="transform .5s ease"
          transform={`translateX(-${index * slideWidth}%)`}
          w={`${articles.length * 100}%`}
          mr={'1rem'}
          overflow={'hidden'}
          mt={'2rem'}
        >
          {articles.map((article, i) => (
            <Box
              key={i}
              w="100%" // Each slide takes up 100% of the container width
              display="flex"
              opacity={i !== index ? 0 : 1}
            >
              <Stack flexDir={{ base: 'column', md: 'row' }} w="100%">
                <Image
                  src={article.images[0].url}
                  w={{ base: '100%', md: '60%' }}
                  objectFit={'cover'}
                />
                <Stack
                  w={{ base: '100%', md: '40%' }}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  {/* Content of each article */}
                  <H5>{article.title}</H5>
                  <RichText content={article.description} />
                  <Link href={article.link} target="_blank">
                    <Icon
                      type="ArrowSquareOut"
                      size={32}
                      color={colors[color]}
                    />
                  </Link>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Stack
      w="100%"
      minH={'2xl'}
      bgColor={colors[bgColor]}
      color={colors[color]}
    >
      <H3 textAlign={'center'} mt={'2rem'}>
        {header}
      </H3>

      {isMobile ? (
        <Stack mx={'.5rem'} overflow={'hidden'}>
          {renderArticles()}
          <HStack w="100%" justifyContent={'center'}>
            {renderDecrementButton()}
            {renderIncrementButton()}
          </HStack>
        </Stack>
      ) : (
        <HStack mx={'10rem'} overflow={'hidden'}>
          {renderDecrementButton()}
          {renderArticles()}
          {renderIncrementButton()}
        </HStack>
      )}
    </Stack>
  );
};
