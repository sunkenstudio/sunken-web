'use client';
import { useMutation } from '@apollo/client';
import { Image } from '@/app/components/_Shared/Image';
import { Paragraph } from '@/app/components/Typography';
import {
  MediaLibrary,
  StrapiStyledButton,
  StrapiStyledImage,
} from '@/app/types';
import {
  Box,
  HStack,
  Stack,
  Select,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { UPLOAD_IMAGE } from '@/app/graphql';

interface ButtonInputProps {
  name: string;
  index: number;
  value: StrapiStyledButton[] | null;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const ButtonInput = ({
  name,
  index,
  value,
  onChange,
}: ButtonInputProps) => {
  return (
    <HStack gap={'3rem'}>
      <Paragraph fontWeight={'bold'}>BORDER</Paragraph>
      <HStack border={'1px solid #edf2f7'} p={'1rem'} borderRadius={'.5rem'}>
        <Stack>
          <Paragraph>Width</Paragraph>
          <Select
            name={`${name}[${index}].border.width`}
            value={value?.[index]?.border?.width || 0}
            onChange={onChange}
          >
            <option value={'0px'}>0px</option>
            <option value={'1px'}>1px</option>
            <option value={'2px'}>2px</option>
            <option value={'3px'}>3px</option>
            <option value={'4px'}>4px</option>
          </Select>
        </Stack>
        <Stack>
          <Paragraph>Color</Paragraph>
          <Select
            name={`${name}[${index}].border.color`}
            value={value?.[index]?.border?.color}
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
          <Paragraph>Radius</Paragraph>
          <Select
            name={`${name}[${index}].border.radius`}
            value={value?.[index]?.border?.radius || ''}
            onChange={onChange}
          >
            <option value="0">Regular</option>
            <option value="1rem">Rounded</option>
            <option value="100%">Circle</option>
          </Select>
        </Stack>
      </HStack>
    </HStack>
  );
};
