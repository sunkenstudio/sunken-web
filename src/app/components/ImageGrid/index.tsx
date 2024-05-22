import React from 'react';
import { ImageGridElement, ImageGridElementProps } from './ImageGridElement';
import { Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { useBrand } from '@/app/contexts/BrandContext';

export interface ImageGridProps {
  header: string;
  elements: ImageGridElementProps[];
  sortOrder: number;
  columns: number;
}

export const ImageGrid = ({
  header,
  elements,
  sortOrder,
  columns,
}: ImageGridProps) => {
  const { colors } = useBrand();

  return (
    <SimpleGrid minChildWidth={'250px'} spacing={'.5rem'} m="1rem">
      {elements.map((i) => (
        <GridItem>
          <ImageGridElement {...i} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
