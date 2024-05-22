import React from 'react';
import { ImageGridElement, ImageGridElementProps } from './ImageGridElement';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import { useBrand } from '@/app/contexts/BrandContext';

export interface ImageGridProps {
  header: string;
  elements: ImageGridElementProps[];
  sortOrder: number;
  columns: number;
}

export const ImageGrid = ({ elements }: ImageGridProps) => {
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
