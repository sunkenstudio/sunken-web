import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { H1, H2, H3, H4, H5, H6, Paragraph } from '../../Typography';
import Link from 'next/link';
import { TextProps } from '@chakra-ui/react';

export interface RichTextProps extends TextProps {
  content: any;
}

export const RichText = ({ content, ...rest }: RichTextProps) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => <span>{children}</span>,
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <H1 {...rest}>{children}</H1>;
            case 2:
              return <H2 {...rest}>{children}</H2>;
            case 3:
              return <H3 {...rest}>{children}</H3>;
            case 4:
              return <H4 {...rest}>{children}</H4>;
            case 5:
              return <H5 {...rest}>{children}</H5>;
            case 6:
              return <H6 {...rest}>{children}</H6>;
            default:
              return <Paragraph {...rest}>{children}</Paragraph>;
          }
        },
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
};
