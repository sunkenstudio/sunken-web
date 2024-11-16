'use client';
import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiProjectSection } from '@/app/types';
import { Box, Button, HStack, Image, Link, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { H3, H4 } from '../Typography';
import { RichText } from '../Shared/RichText';
import { Icon } from '../Shared/Icon';

export interface ProjectSectionProps {
  projectSection: StrapiProjectSection;
}

export const ProjectSection = ({ projectSection }: ProjectSectionProps) => {
  const { header, articles, bgColor, color } = projectSection;
  const { colors } = useBrand();
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

  const renderDecrementButton = (idx: number) => {
    if (index === 0) {
      return null;
    }
    return (
      <Button
        data-testid={`decrement-btn-${idx}`}
        onClick={decrementIndex}
        zIndex={10}
        bgColor={colors[color]}
        w={{ base: '3rem', md: 'auto' }}
      >
        <Icon type="CaretLeft" size={32} color={colors[bgColor]} />
      </Button>
    );
  };

  const renderIncrementButton = (idx: number) => {
    if (index === articles.length - 1) {
      return null;
    }
    return (
      <Button
        data-testid={`increment-btn-${idx}`}
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
              <Stack
                flexDir={{ base: 'column', md: 'row' }}
                w="100%"
                alignItems={'center'}
              >
                <Image
                  src={article.images[0].url}
                  w={{ base: '100%', md: '60%' }}
                  objectFit={'contain'}
                  mx={{ base: 0, md: '1rem' }}
                  maxH={'360px'}
                />
                <Stack
                  w={{ base: '100%', md: '40%' }}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  {/* Content of each article */}
                  <HStack>
                    <H4>{article.title} </H4>
                    <Link href={article.link} target="_blank">
                      <Icon
                        type="ArrowSquareOut"
                        size={32}
                        color={colors[color]}
                      />
                    </Link>
                  </HStack>
                  <RichText content={article.description} />
                  <HStack>
                    {renderDecrementButton(i)}
                    {renderIncrementButton(i)}
                  </HStack>
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
      maxH={{ md: '2xl' }}
      bgColor={colors[bgColor]}
      color={colors[color]}
    >
      <H3 textAlign={'center'} mt={'4rem'}>
        {header}
      </H3>
      <Stack mx={{ base: '.5rem', md: '10rem' }} overflow={'hidden'}>
        {renderArticles()}
      </Stack>
    </Stack>
  );
};
