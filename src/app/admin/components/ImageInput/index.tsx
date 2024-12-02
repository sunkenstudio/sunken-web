'use client';
import { useMutation } from '@apollo/client';
import { Image } from '@/app/components/_Shared/Image';
import { Paragraph } from '@/app/components/Typography';
import { MediaLibrary, StrapiStyledImage } from '@/app/types';
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

interface ImageInputProps {
  name: string;
  value: StrapiStyledImage | null;
  mediaLibrary: MediaLibrary;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const ImageInput = ({
  name,
  value,
  mediaLibrary,
  onChange,
}: ImageInputProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  const toast = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]); // Select the first file
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }
    console.log({ file });

    try {
      const uploaded = await uploadImage({
        variables: {
          file,
        },
      });
      console.log({ uploaded });
      toast({
        title: 'File Uploaded!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: 'Something went wrong...',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);
  return (
    <HStack gap={'3rem'}>
      {mediaLibrary && (
        <Stack maxW="30%">
          <Select
            name={`${name}.media.id`}
            value={value?.media?.id || ''}
            onChange={(e) => {
              // need to update whole media value for preview to update correctly
              const img = Object.values(mediaLibrary).find(
                (i) => i.id === e.target.value
              );
              onChange({
                target: {
                  name: `${name}.media`,
                  value: {
                    ...img,
                  },
                },
              } as ChangeEvent<any>);
            }}
          >
            {Object.entries(mediaLibrary).map(([k, v]) => (
              <option key={`image-option-${k}`} value={k}>
                {v.id}
              </option>
            ))}
          </Select>

          <Box w="100%">
            {value?.media && (
              <Image {...value} media={mediaLibrary[value.media.id]} />
            )}
          </Box>
        </Stack>
      )}
      <Stack>
        <Paragraph fontWeight={'bold'}>FILTER</Paragraph>
        <HStack border={'1px solid #edf2f7'} p={'1rem'} borderRadius={'.5rem'}>
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
              onChange={(e) => {
                onChange({
                  target: {
                    name: `${name}.filter.opacity`,
                    value: parseFloat(e.target.value),
                  },
                } as ChangeEvent<any>);
              }}
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
              onChange={(e) => {
                onChange({
                  target: {
                    name: `${name}.filter.grayscale`,
                    value: parseInt(e.target.value),
                  },
                } as ChangeEvent<any>);
              }}
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
        <Paragraph fontWeight={'bold'}>BORDER</Paragraph>
        <HStack border={'1px solid #edf2f7'} p={'1rem'} borderRadius={'.5rem'}>
          <Stack>
            <Paragraph>Width</Paragraph>
            <Select
              name={`${name}.border.width`}
              value={value?.border?.width || 0}
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
              name={`${name}.border.color`}
              value={value?.border?.color}
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
              name={`${name}.border.radius`}
              value={value?.border?.radius}
              onChange={onChange}
            >
              <option value="0">Regular</option>
              <option value="1rem">Rounded</option>
              <option value="100%">Circle</option>
            </Select>
          </Stack>
        </HStack>
        <HStack>
          <FormControl>
            <FormLabel htmlFor="image-upload-input">Upload Image</FormLabel>
            <Input
              id="image-upload-input"
              type="file"
              onChange={handleFileChange} // Handle file selection
              color={'black'}
              bgColor="white"
            />
          </FormControl>
        </HStack>
      </Stack>
    </HStack>
  );
};
