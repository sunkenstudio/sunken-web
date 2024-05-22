import React from 'react';
import { ImageGridElement, ImageGridElementProps } from './ImageGridElement';
import { GridItem, SimpleGrid } from '@chakra-ui/react';

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
        <GridItem key={i.img?.alt}>
          <ImageGridElement {...i} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
