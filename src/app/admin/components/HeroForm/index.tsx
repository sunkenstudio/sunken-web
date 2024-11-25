'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  FormControl,
  FormLabel,
  HStack,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Client, StrapiHero } from '@/app/types';
import { RichTextInput } from '../RichTextInput';
import { ImageInput } from '../ImageInput';
import { TextInput } from '../TextInput';
import { Hero } from '@/app/components/Hero';

export interface HeroFormProps {
  hero: StrapiHero;
  values: Client;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const HeroForm = ({ hero, values, onChange }: HeroFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const togglePreview = () => {
    setIsPreview(!isPreview);
  };
  console.log({ hero });

  return (
    <Box width="100%" borderBottom="1px" borderColor="gray.200" p={'1rem'}>
      <HStack gap={'3rem'}>
        <Button onClick={toggleCollapse} mb={4}>
          {isOpen ? 'Close Hero' : `Hero (${hero.sortOrder})`}
        </Button>
        {isOpen ? (
          <Button onClick={togglePreview} mb={4}>
            {isPreview ? 'Close Preview' : `Preview`}
          </Button>
        ) : null}
      </HStack>

      {/* Collapsible content */}
      <Collapse in={isOpen}>
        {isPreview ? (
          <Hero hero={values.hero} />
        ) : (
          <Box>
            <List spacing={3}>
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
                  <FormLabel
                    htmlFor={'hero-form-subheader'}
                    fontWeight={'bold'}
                  >
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
                  <FormLabel
                    htmlFor={'hero-form-subheader'}
                    fontWeight={'bold'}
                  >
                    TEXT
                  </FormLabel>
                  <RichTextInput
                    value={values?.hero?.text}
                    onChange={onChange}
                  />
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
                  />
                </FormControl>
              </ListItem>
            </List>
          </Box>
        )}
      </Collapse>
    </Box>
  );
};
