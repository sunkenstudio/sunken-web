'use client';
import { camelCase } from 'lodash';
import { Client } from '../types';

import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export const convertBlocksToEditorState = (
  blocksContent: BlocksContent
): EditorState => {
  // Convert BlocksContent (which is typically an array of block objects) into raw Draft.js content state.
  const rawContent = {
    entityMap: {},
    blocks: blocksContent.map((block) => ({
      //@ts-ignore
      text: block.children.map((child) => child.text).join(''), // Join text from all children (if multiple)
      type: block.type, // type can be 'paragraph', 'header', etc.
      depth: 0, // Assuming no nested lists (adjust if needed)
      inlineStyleRanges: [], // You can add inline styles like bold, italic here if needed
      entityRanges: [], // You can add entity ranges like links if needed
      data: {}, // Additional block-level data (can be used for custom data)
    })),
  };

  // Convert to EditorState
  //@ts-ignore
  const contentState = convertFromRaw(rawContent);
  return EditorState.createWithContent(contentState);
};

export const convertEditorStateToBlocks = (
  editorState: EditorState
): BlocksContent[] => {
  // Extract raw content from the editorState
  const rawContent = convertToRaw(editorState.getCurrentContent());

  // Map over the blocks and convert them into the desired BlocksContent format
  const blocksContent: BlocksContent[] = rawContent.blocks.map((block) => {
    return {
      type: block.type, // Block type, such as 'paragraph', 'header', etc.
      children: [
        {
          type: 'text', // We only have text nodes, but this can be expanded if needed
          text: block.text, // The actual text of the block
        },
      ],
    } as unknown as BlocksContent;
  });

  return blocksContent;
};

export const emptyFunction = () => {
  // Default value for no behavior
};

export const scrollToElement = (e: any) => {
  e.preventDefault();

  const href = e.currentTarget.href;
  const targetId = href.replace(/.*#/, '');

  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: 'smooth',
  });
};

export const getClientIdFromUrl = () => {
  // localhost
  const url = window?.location?.href;
  if (url.includes('localhost')) {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get('clientId');
    return clientId;
  }
  // prod
  return window?.location?.hostname;
};

export const formatStrapiData = (data: any): Client => {
  // handle missing top level entries
  const missingTopLevelEntries = Object.entries(data)
    /* @ts-ignore */
    .map(([k, v]) => (v?.data == null ? k : null))
    .filter((i) => i);

  const sanitized = Object.entries(data).reduce((acc, [k, v]) => {
    if (missingTopLevelEntries.includes(k) && typeof v === 'object') {
      return {
        ...acc,
        [k]: null,
      };
    }
    return {
      ...acc,
      [k]: v,
    };
  }, {});

  return recursiveFormat(sanitized);
};

// TODO - Figure out the correct typing for this mess
export const recursiveFormat = (data: any): Client => {
  return Object.entries(data).reduce((acc, [key, val]) => {
    if (key == '__typename') {
      return { ...acc };
    }
    const formattedKey = camelCase(key);

    if (typeof val === 'object') {
      /* @ts-ignore */
      if (val && Array.isArray(val?.data)) {
        return {
          ...acc,
          /* @ts-ignore */
          [formattedKey]: val.data.map((i) => recursiveFormat(i.attributes)),
        };
      }
      /* @ts-ignore */
      if (val?.data?.attributes) {
        return {
          ...acc,
          [formattedKey]: recursiveFormat({
            /* @ts-ignore */
            id: val.data.id,
            /* @ts-ignore */
            ...val.data.attributes,
          }),
        };
      }
    }
    /* @ts-ignore */
    if (val?.__typename?.includes('Component')) {
      return {
        ...acc,
        [formattedKey]: recursiveFormat(val),
      };
    }
    // hero > buttons array
    if (
      val &&
      Array.isArray(val) &&
      val?.[0]?.__typename?.includes('ComponentCommon')
    ) {
      return {
        ...acc,
        [formattedKey]: val.map((i) => recursiveFormat(i)),
      };
    }
    return {
      ...acc,
      [formattedKey]: val,
    };
  }, {}) as unknown as Client;
};
