import { StrapiStyledImage } from '@/app/types';
import { Box, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { H3, H5 } from '../../Typography';
import Link from 'next/link';
import { Image } from '../../Shared/Image';

export interface ImageGridElementProps {
  label: string;
  href: string;
  img: StrapiStyledImage | null;
}

export const ImageGridElement = ({
  label,
  href,
  img,
}: ImageGridElementProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {img && (
        <Image
          {...img}
          border={{ width: '.25rem', color: 'dark', radius: '0' }}
          filter={
            isHovering
              ? { color: 'dark', opacity: 0.3, grayscale: 0 }
              : img.filter
          }
        />
      )}
      {(label || href) && (
        <Stack zIndex={99} position={'absolute'} textAlign={'center'}>
          {label && (
            <H3 color="white" textShadow={'1px 1px 5px black'}>
              {label}
            </H3>
          )}
          {href && (
            <Link href={href}>
              <Box border=".2rem solid white" p={'.75rem'}>
                <H5 color="white" textShadow={'1px 1px 5px black'}>
                  LEARN MORE
                </H5>
              </Box>
            </Link>
          )}
        </Stack>
      )}
    </Box>
  );
};
