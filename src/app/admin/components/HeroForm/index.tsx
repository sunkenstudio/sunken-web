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
import { RichTextInput } from '../RichTextInput';
import { EditorState } from 'draft-js';
import {
  convertBlocksToEditorState,
  convertEditorStateToBlocks,
} from '@/app/helpers/utils';

export interface HeroFormProps {
  hero: StrapiHero;
  values: Client;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const HeroForm = ({ hero, values, onChange }: HeroFormProps) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage collapse toggle
  const [text, setText] = useState<EditorState>(
    hero.text
      ? convertBlocksToEditorState(hero.text)
      : EditorState.createEmpty()
  ); // Initialize with empty EditorState if not available
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleRichTextChange = (newText: EditorState) => {
    setText(newText); // Update local text state with new BlocksContent
    onChange({
      target: { name: 'hero.text', value: convertEditorStateToBlocks(newText) },
    }); // Propagate change to parent form state
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
              <FormControl>
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
            <ListItem>
              <FormControl>
                <FormLabel htmlFor={'hero-form-subheader'}>
                  SUB-HEADER
                </FormLabel>
                <Input
                  id={'hero-form-subheader'}
                  name={'hero.subheader'}
                  type={'text'}
                  value={values?.hero?.subheader || ''}
                  onChange={onChange}
                  color={'black'}
                  bgColor="white"
                />
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl>
                <FormLabel htmlFor={'hero-form-subheader'}>TEXT</FormLabel>
                <RichTextInput value={text} onChange={handleRichTextChange} />
              </FormControl>
            </ListItem>
          </List>
        </Box>
      </Collapse>
    </Box>
  );
};
