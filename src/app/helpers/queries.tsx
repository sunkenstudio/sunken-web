import { gql } from '@apollo/client';

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
    Color
    BgColor
    Border {
      Width
      Radius
      Color
    }
    Shadow
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
          carousel {
            data {
              attributes {
                TransitionTime
                DisplayArrows
                DisplayCounter
                Images {
                  ...imageFields
                }
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
                Header
                BgColor
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
