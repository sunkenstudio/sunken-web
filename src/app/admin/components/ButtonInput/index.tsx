'use client';
import { Paragraph } from '@/app/components/Typography';
import { StrapiStyledButton } from '@/app/types';
import { HStack, Stack, Select } from '@chakra-ui/react';
import React from 'react';
import { TextInput } from '../TextInput';

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
  console.log({ value });
  return (
    <Stack border={'1px solid #edf2f7'} p={'1rem'} borderRadius={'.5rem'}>
      <Paragraph fontWeight={'bold'}>Text</Paragraph>
      <TextInput
        name={`${name}[${index}].text`}
        value={value?.[index]?.text || ''}
        onChange={onChange}
      />
      <Paragraph fontWeight={'bold'}>Type</Paragraph>
      <Select
        name={`${name}[${index}].type`}
        value={value?.[index]?.type}
        onChange={onChange}
      >
        <option value="link">Link</option>
        <option value="modal">Modal</option>
        <option value="pdf">PDF</option>
        <option value="submit">Submit</option>
      </Select>
      <Paragraph fontWeight={'bold'}>Href</Paragraph>
      <TextInput
        name={`${name}[${index}].href`}
        value={value?.[index]?.href || ''}
        onChange={onChange}
      />
      <Paragraph fontWeight={'bold'}>Icon</Paragraph>
      <TextInput
        name={`${name}[${index}].icon`}
        value={value?.[index]?.icon || ''}
        onChange={onChange}
      />
      <Paragraph fontWeight={'bold'}>Color</Paragraph>
      <Select
        name={`${name}[${index}].color`}
        value={value?.[index]?.color || ''}
        onChange={onChange}
      >
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="accent">Accent</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </Select>
      <Paragraph fontWeight={'bold'}>Background Color</Paragraph>
      <Select
        name={`${name}[${index}].bgColor`}
        value={value?.[index]?.bgColor || ''}
        onChange={onChange}
      >
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="accent">Accent</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </Select>
      <Paragraph fontWeight={'bold'}>Shadow</Paragraph>
      <TextInput
        name={`${name}[${index}].shadow`}
        value={value?.[index]?.shadow || ''}
        onChange={onChange}
      />
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
    </Stack>
  );
};
