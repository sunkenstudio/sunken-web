import React, { useEffect, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import {
  convertBlocksToEditorState,
  convertEditorStateToBlocks,
} from '@/app/helpers/utils';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface RichTextInputProps {
  value: BlocksContent;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const RichTextInput = ({ value, onChange }: RichTextInputProps) => {
  const [text, setText] = useState<EditorState>(EditorState.createEmpty());

  useEffect(() => {
    if (value) {
      handleEditorStateChange(convertBlocksToEditorState(value));
    }
  }, []);

  // Handle editor state changes
  const handleEditorStateChange = (newText: EditorState) => {
    setText(newText);
    onChange({
      target: { name: 'hero.text', value: convertEditorStateToBlocks(newText) },
    });
  };

  // Toolbar configuration to show only supported Strapi options
  const toolbarConfig = {
    options: ['inline', 'blockType', 'link'], // Options that Strapi supports
    inline: {
      inDropdown: false, // This will show inline options directly in the toolbar (not in a dropdown)
      options: ['bold', 'italic', 'underline', 'strikethrough'], // Strapi supports bold, italic, underline, strikethrough
    },
    blockType: {
      inDropdown: false, // Block type options can be in the toolbar or not
      options: ['unstyled', 'header-one', 'header-two'], // These are standard block types supported by Strapi
    },
    link: {
      inDropdown: false, // Link options are shown directly in the toolbar (not in a dropdown)
      showOpenOptionOnHover: true, // Show link options on hover
    },
    list: {
      inDropdown: false, // Avoid showing list options in a dropdown
      options: ['unordered', 'ordered'], // Strapi supports unordered and ordered lists
    },
    textAlign: {
      inDropdown: true, // Align text left, center, or right
      options: ['left', 'center', 'right'],
    },
    fontSize: {
      options: ['8', '9', '10', '11', '12', '14', '16', '18'], // If you want to show specific font sizes
    },
  };

  return (
    <Editor
      editorState={text}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={handleEditorStateChange}
      toolbar={toolbarConfig} // Pass the custom toolbar config here
    />
  );
};
