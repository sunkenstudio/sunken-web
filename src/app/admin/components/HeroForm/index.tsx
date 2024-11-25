'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  FormControl,
  FormLabel,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Client, StrapiHero } from '@/app/types';
import { RichTextInput } from '../RichTextInput';
import { ImageInput } from '../ImageInput';
import { TextInput } from '../TextInput';

export interface HeroFormProps {
  hero: StrapiHero;
  values: Client;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const HeroForm = ({ hero, values, onChange }: HeroFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  console.log({ hero });
  return (
    <Box width="100%" borderBottom="1px" borderColor="gray.200" p={'1rem'}>
      <Button onClick={toggleCollapse} mb={4}>
        {isOpen ? 'Close Hero' : `Hero (${hero.sortOrder})`}
      </Button>

      {/* Collapsible content */}
      <Collapse in={isOpen}>
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
      </Collapse>
    </Box>
  );
};
