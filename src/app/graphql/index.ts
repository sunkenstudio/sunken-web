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
  ${Queries.GET_SECTIONS}
  ${Queries.GET_PROJECT_SECTION}
  ${Queries.GET_BRAND}
  ${Queries.GET_CAROUSEL}
  ${Queries.GET_FOOTER}
  ${Queries.GET_CONTACT}
  ${Queries.GET_CONFIG}
  ${Queries.GET_IMAGE_SCROLL}
  ${Queries.GET_FEATURE_SECTION}

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

export const GET_MEDIA_LIBRARY = gql`
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

export const UPLOAD_IMAGE = gql`
  mutation uploadFile($file: Upload!) {
    upload(file: $file) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
