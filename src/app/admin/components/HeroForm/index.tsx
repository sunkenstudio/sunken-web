'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Client, MediaLibrary } from '@/app/types';
import { RichTextInput } from '../RichTextInput';
import { ImageInput } from '../ImageInput';
import { TextInput } from '../TextInput';
import { Hero } from '@/app/components/Hero';
import { SelectInput } from '../SelectInput';

export interface HeroFormProps {
  values: Client;
  mediaLibrary: MediaLibrary;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const HeroForm = ({ values, mediaLibrary, onChange }: HeroFormProps) => {
  const [isPreview, setIsPreview] = useState(false);

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <Box width="100%" p={'1rem'}>
      <HStack gap={'1rem'}>
        <Button onClick={togglePreview} mb={4}>
          {isPreview ? 'Close Preview' : `Preview`}
        </Button>
        <Button type="submit" mb={4}>
          Save Changes
        </Button>
      </HStack>

      {/* Collapsible content */}
      {isPreview ? (
        <Hero hero={values.hero} />
      ) : (
        <Box>
          <List spacing={3}>
            <ListItem>
              <FormControl>
                <FormLabel htmlFor={'hero-form-variant'} fontWeight={'bold'}>
                  VARIANT
                </FormLabel>
                <SelectInput
                  name={'hero.variant'}
                  value={values?.hero?.variant}
                  options={[
                    { key: 'split', val: 'split', display: 'Split' },
                    {
                      key: 'leftAligned',
                      val: 'leftAligned',
                      display: 'Left-Aligned',
                    },
                    {
                      key: 'centerAligned',
                      val: 'centerAligned',
                      display: 'Center Aligned',
                    },
                  ]}
                  onChange={onChange}
                />
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl>
                <FormLabel htmlFor={'hero-form-header'} fontWeight={'bold'}>
                  HEADER
                </FormLabel>
                <TextInput
                  name={'hero.header'}
                  value={values?.hero?.header}
                  onChange={onChange}
                />
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl>
                <FormLabel htmlFor={'hero-form-subheader'} fontWeight={'bold'}>
                  SUB-HEADER
                </FormLabel>
                <TextInput
                  name={'hero.subheader'}
                  value={values?.hero?.subheader}
                  onChange={onChange}
                />
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl>
                <FormLabel htmlFor={'hero-form-subheader'} fontWeight={'bold'}>
                  TEXT
                </FormLabel>
                <RichTextInput value={values?.hero?.text} onChange={onChange} />
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl>
                <FormLabel htmlFor={'hero-form-image'} fontWeight={'bold'}>
                  IMAGE
                </FormLabel>
                <ImageInput
                  name="hero.image"
                  value={values?.hero?.image}
                  onChange={onChange}
                  mediaLibrary={mediaLibrary}
                />
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl>
                <FormLabel htmlFor={'hero-form-bgImage'} fontWeight={'bold'}>
                  BACKGROUND IMAGE
                </FormLabel>
                <ImageInput
                  name="hero.bgImage"
                  value={values?.hero?.bgImage}
                  onChange={onChange}
                  mediaLibrary={mediaLibrary}
                />
              </FormControl>
            </ListItem>
          </List>
        </Box>
      )}

      <HStack gap={'1rem'} mt={'1rem'}>
        <Button onClick={togglePreview} mb={4}>
          {isPreview ? 'Close Preview' : `Preview`}
        </Button>
        <Button type="submit" mb={4}>
          Save Changes
        </Button>
      </HStack>
    </Box>
  );
};
