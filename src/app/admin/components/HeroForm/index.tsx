'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Client, StrapiHero } from '@/app/types';

export interface HeroFormProps {
  hero: StrapiHero;
  values: Client;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const HeroForm = ({ hero, values, onChange }: HeroFormProps) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage collapse toggle

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box width="100%" borderBottom="1px" borderColor="gray.200" p={'1rem'}>
      {/* Button to toggle collapse */}
      <Button onClick={toggleCollapse} mb={4}>
        {isOpen ? 'Close Hero' : `Hero (Order ${hero.sortOrder})`}
      </Button>

      {/* Collapsible content */}
      <Collapse in={isOpen}>
        <Box>
          <List spacing={3}>
            <ListItem>
              <FormControl isRequired>
                <FormLabel htmlFor={'hero-form-header'}>HEADER</FormLabel>
                <Input
                  id={'hero-form-header'}
                  name={'hero.header'}
                  type={'text'}
                  value={values?.hero?.header}
                  onChange={onChange}
                  color={'black'}
                  bgColor="white"
                />
              </FormControl>
            </ListItem>
          </List>
        </Box>
      </Collapse>
    </Box>
  );
};
