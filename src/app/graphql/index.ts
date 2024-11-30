import { gql } from '@apollo/client';
import * as Queries from './queries';

export const GET_SITE_ID = gql`
  query GetSiteIdByClientId($ClientId: String) {
    sites(filters: { ClientId: { eq: $ClientId } }, pagination: { limit: 1 }) {
      data {
        id
      }
    }
  }
`;
export const GET_SITE = gql`
  ${Queries.GET_HERO}
  ${Queries.SECTIONS}
  ${Queries.PROJECT_SECTION}
  ${Queries.BRAND}
  ${Queries.CAROUSEL}
  ${Queries.FOOTER}
  ${Queries.CONTACT}
  ${Queries.CONFIG}
  ${Queries.IMAGE_SCROLL}
  ${Queries.FEATURE_SECTION}

  query Site($id: ID!) {
    site(id: $id) {
      data {
        attributes {
          ClientId
          hero {
            ...hero
          }
          sections {
            ...sections
          }
          project_section {
            ...projectSection
          }
          brand {
            ...brand
          }
          carousel {
            ...carousel
          }
          footer {
            ...footer
          }
          contact {
            ...contact
          }
          config {
            ...config
          }
          image_scroll {
            ...imageScroll
          }
          feature_section {
            ...featureSection
          }
        }
      }
    }
  }
`;

export const GET_IMAGES = gql`
  query {
    uploadFiles {
      data {
        id
        attributes {
          name
          url
          alternativeText
          caption
        }
      }
    }
  }
`;
