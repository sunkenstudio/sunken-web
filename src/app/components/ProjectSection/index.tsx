'use client';
import { useBrand } from '@/app/contexts/BrandContext';
import { StrapiProjectSection } from '@/app/types';
import { Box, Button, HStack, Image, Link, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { H3, H5 } from '../Typography';
import { RichText } from '../Shared/RichText';
import { Icon } from '../Shared/Icon';

export interface ProjectSectionProps {
  projectSection: StrapiProjectSection;
}

export const ProjectSection = ({ projectSection }: ProjectSectionProps) => {
  const { header, articles, bgColor, color } = projectSection;
  console.log({ projectSection });
  const { colors } = useBrand();
  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
    if (index + 1 < articles.length) {
      setIndex(index + 1); // Go to the next slide
    } else {
      setIndex(0); // Loop back to the first slide
    }
  };

  const decrementIndex = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1); // Go to the previous slide
    } else {
      setIndex(articles.length - 1); // Loop back to the last slide
    }
  };

  const slideWidth = 100 / articles.length; // Calculate dynamic width for each slide

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
      <HStack mx="10rem" overflow={'hidden'}>
        {/* Decrement Button */}
        {index === 0 ? null : (
          <Button
            onClick={decrementIndex}
            disabled={articles.length <= 1}
            zIndex={10}
            bgColor={colors[color]}
          >
            <Icon type="CaretLeft" size={32} color={colors[bgColor]} />
          </Button>
        )}

        {/* Slider Container */}
        <Box w="100%">
          {/* The container that holds all the slides */}
          <Box
            display="flex"
            transition="transform .5s ease"
            transform={`translateX(-${index * slideWidth}%)`} // Dynamically shift the content by the width of one slide
            w={`${articles.length * 100}%`} // The container's width is 100% per article, multiplied by the number of articles
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
                <HStack w="100%">
                  <Image src={article.images[0].url} w="60%" />
                  <Stack w="40%">
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
                </HStack>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Increment Button */}
        {index === articles.length - 1 ? null : (
          <Button
            onClick={incrementIndex}
            disabled={articles.length <= 1}
            zIndex={10}
            bgColor={colors[color]}
          >
            <Icon type="CaretRight" size={32} color={colors[bgColor]} />
          </Button>
        )}
      </HStack>
    </Stack>
  );
};
