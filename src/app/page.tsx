"use client";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Box, Flex, Spinner, Stack } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";
import { camelCase } from "lodash";

const SITE = gql`
  {
    sites {
      data {
        attributes {
          ClientId
          hero {
            data {
              attributes {
                Header
                Subheader
                Button1
                Button2
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          sections {
            data {
              attributes {
                Header
                SortOrder
                Text
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Caption
              }
            }
          }
        }
      }
    }
  }
`;

const formatStrapiData = (data) => {
  return Object.entries(data).reduce((acc, [key, val]) => {
    const formattedKey = camelCase(key);
    if (typeof val === "object") {
      if (Array.isArray(val?.data)) {
        console.log("isArray", val);
        return {
          ...acc,
          [formattedKey]: val.data.map((i) => formatStrapiData(i.attributes)),
        };
      }
      if (val?.data?.attributes) {
        return {
          ...acc,
          [formattedKey]: formatStrapiData(val.data.attributes),
        };
      }
    }
    return {
      ...acc,
      [formattedKey]: val,
    };
  }, {});
};

const Home = () => {
  const { loading, error, data } = useQuery(SITE, {
    variables: {
      clientId: "demo",
    },
  });
  if (loading) {
    return (
      <Flex w="100%" h="100%" justifyContent={"center"} alignItems={"center"}>
        <Spinner />
      </Flex>
    );
  }
  if (error) {
    return <>{"Error :("}</>;
  }

  const client = data.sites.data.find((i) => i.attributes.ClientId === "demo");
  const clientData = formatStrapiData(client.attributes);
  console.log({ clientData });
  return (
    <main>
      <Box m={1}>
        <Stack gap={1}>
          <Hero {...clientData.hero} />
          {clientData.sections.map((i) => (
            <Section key={`section-${i.sortOrder}`} {...i} />
          ))}
          {/* <Section
            id="section-1"
            header="Section 1"
            bgColor="secondary"
            color="white"
            altLayout
          />
          <Section
            id="section-2"
            header="Section 2"
            bgColor="white"
            color="primary"
          />
          <Section
            id="section-3"
            header="Section 3"
            bgColor="primary"
            color="white"
            altLayout
          /> */}
        </Stack>
      </Box>
    </main>
  );
};

export default Home;
