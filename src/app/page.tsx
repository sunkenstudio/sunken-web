"use client";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Box, Container, Spinner, Stack } from "@chakra-ui/react";
import { camelCase } from "lodash";
import { useQuery } from "@apollo/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GET_SITE } from "./helpers/queries";
import Head from "next/head";

const Home = () => {
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

  const { loading, error, data } = useQuery(GET_SITE, {
    variables: {
      clientId: "demo",
    },
  });
  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }
  if (error) {
    return <>{"Error :("}</>;
  }

  const client = data.sites.data.find((i) => i.attributes.ClientId === "demo");
  const clientData = formatStrapiData(client.attributes);

  return (
    <main>
      <Head>
        <title>Page Title</title>
      </Head>
      <Box bgColor={"white"} p={1}>
        <Header sections={clientData.sections} brand={clientData.brand} />
        <Box>
          <Stack gap={1}>
            <Hero {...clientData.hero} brand={clientData.brand} />
            {clientData.sections.map((i) => (
              <Section
                key={`section-${i.sortOrder}`}
                {...i}
                brand={clientData.brand}
              />
            ))}
          </Stack>
        </Box>
        <Footer brand={clientData.brand} />
      </Box>
    </main>
  );
};

export default Home;
