import { gql } from '@apollo/client';
import * as Fragments from './fragments';

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
  # Fragments
  ${Fragments.HERO}
  ${Fragments.SECTIONS}
  ${Fragments.PROJECT_SECTION}
  ${Fragments.BRAND}
  ${Fragments.CAROUSEL}
  ${Fragments.FOOTER}
  ${Fragments.CONTACT}
  ${Fragments.CONFIG}
  ${Fragments.IMAGE_SCROLL}
  ${Fragments.FEATURE_SECTION}

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

// Patch Header field in Hero
export const UPDATE_HERO = gql`
  mutation UpdateHero($id: ID!, $header: String!, $subheader: String!) {
    updateHero(id: $id, data: { Header: $header, Subheader: $subheader }) {
      data {
        id
        attributes {
          Header
          Subheader
        }
      }
    }
  }
`;
