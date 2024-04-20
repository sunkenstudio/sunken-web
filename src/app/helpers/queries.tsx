import { gql } from "@apollo/client";

export const GET_SITE = gql`
  # Write your query or mutation here
  fragment imageFields on ComponentCommonImage {
    Media {
      data {
        attributes {
          url
        }
      }
    }
    Alt
    Border {
      Width
      Radius
      Color
    }
    Filter {
      Color
      Opacity
      Grayscale
    }
  }

  fragment buttonsFields on ComponentCommonButton {
    Type
    Text
    Href
    Icon
    TextColor
    BgColor
    BorderColor
    BorderWidth
    BorderRadius
  }

  query Site($ClientId: String) {
    sites(filters: { ClientId: { eq: $ClientId } }) {
      data {
        attributes {
          ClientId
          hero {
            data {
              attributes {
                Header
                Subheader
                Text
                Image {
                  ...imageFields
                }
                Variant
                BgImage {
                  ...imageFields
                }
                Buttons {
                  ...buttonsFields
                }
              }
            }
          }
          sections {
            data {
              attributes {
                Header
                Variant
                SortOrder
                Text
                BgColor
                Image {
                  ...imageFields
                }
                Caption
                BgImage {
                  ...imageFields
                }
              }
            }
          }
          brand {
            data {
              attributes {
                Primary
                Secondary
                Accent
                Light
                Dark
                Fonts {
                  Url
                  Family
                }
                CompanyName
              }
            }
          }
          footer {
            data {
              attributes {
                Text
                FacebookUrl
                InstagramUrl
                TwitterUrl
              }
            }
          }
          contact {
            data {
              attributes {
                Fields
                SendTo
                BgImage {
                  ...imageFields
                }
              }
            }
          }
          config {
            data {
              attributes {
                IsUnderConstruction
                IsMaintenanceMode
              }
            }
          }
        }
      }
    }
  }
`;
