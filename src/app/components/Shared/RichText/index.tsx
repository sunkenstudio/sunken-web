import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { H1, H2, H3, H4, H5, H6, Paragraph } from "../../Typography";
import Link from "next/link";

export const RichText = ({ content }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => (
          <p className="text-neutral900 max-w-prose">{children}</p>
        ),
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <H1>{children}</H1>;
            case 2:
              return <H2>{children}</H2>;
            case 3:
              return <H3>{children}</H3>;
            case 4:
              return <H4>{children}</H4>;
            case 5:
              return <H5>{children}</H5>;
            case 6:
              return <H6>{children}</H6>;
            default:
              return <Paragraph>{children}</Paragraph>;
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
