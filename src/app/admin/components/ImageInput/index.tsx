'use client';
import { Image } from '@/app/components/_Shared/Image';
import { Paragraph } from '@/app/components/Typography';
import { StrapiStyledImage } from '@/app/types';
import { Box, Button, HStack, Stack, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { TextInput } from '../TextInput';

interface ImageInputProps {
  name: string;
  value: StrapiStyledImage | null;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const ImageInput = ({ name, value, onChange }: ImageInputProps) => {
  const [image, setImage] = useState<StrapiStyledImage | null>(null);
  console.log({ value });
  return (
    <HStack gap={'3rem'}>
      <Box w="30%">
        <Image {...value} />
      </Box>
      <Stack>
        <Paragraph>FILTER</Paragraph>
        <HStack>
          <Stack>
            <Paragraph>Color</Paragraph>
            <Select
              name={`${name}.filter.color`}
              value={value?.filter?.color}
              onChange={onChange}
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="accent">Accent</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Select>
          </Stack>
          <Stack>
            <Paragraph>Opacity</Paragraph>
            <Select
              name={`${name}.filter.opacity`}
              value={value?.filter?.opacity}
              onChange={onChange}
            >
              <option value={0.0}>0.0</option>
              <option value={0.2}>0.2</option>
              <option value={0.4}>0.4</option>
              <option value={0.6}>0.6</option>
              <option value={0.8}>0.8</option>
              <option value={1.0}>1.0</option>
            </Select>
          </Stack>
          <Stack>
            <Paragraph>Grayscale</Paragraph>
            <Select
              name={`${name}.filter.grayscale`}
              value={value?.filter?.grayscale}
              onChange={onChange}
            >
              <option value={0}>0%</option>
              <option value={10}>10%</option>
              <option value={20}>20%</option>
              <option value={30}>30%</option>
              <option value={40}>40%</option>
              <option value={50}>50%</option>
              <option value={60}>60%</option>
              <option value={70}>70%</option>
              <option value={80}>80%</option>
              <option value={90}>90%</option>
              <option value={100}>100%</option>
            </Select>
          </Stack>
        </HStack>
        <HStack>
          <Button>CHANGE IMAGE</Button>
          <Button>UPLOAD IMAGE</Button>
        </HStack>
      </Stack>
    </HStack>
  );
};
