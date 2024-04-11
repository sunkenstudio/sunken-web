// @ts-nocheck
"use client";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Box, Center, Flex, Spinner, Stack } from "@chakra-ui/react";
import { useApolloClient } from "@apollo/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GET_SITE } from "./helpers/queries";
import { ContactForm } from "./components/ContactForm";
import { Client } from "./components/Shared/types";
import { formatStrapiData, getClientIdFromUrl } from "./helpers/utils";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { useRef } from "react";
import Fonts from "./helpers/fonts";

const Home = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [fontFamilies, setFontFamilies] = useState("");
  const ref = useRef();

  const client = useApolloClient();

  useEffect(() => {
    async function fetchData(id: string) {
      client
        .query({
          query: GET_SITE,
          variables: {
            id,
          },
        })
        .then((res) => {
          const raw = res.data.sites.data[0];
          const clientData: Client = formatStrapiData(raw.attributes);
          const { fonts } = clientData.brand;
          Fonts(fonts);
          return clientData;
        })
        .then((clientData) => {
          document.title = clientData.brand.companyName;
          setFontFamilies(clientData.brand.fonts);
          setData(clientData);
        })
        .catch((err) => setError(err));
    }

    const ClientId = getClientIdFromUrl();

    if (ClientId) {
      fetchData(ClientId);
    } else {
      setData({});
    }
  }, []);

  if (!data) {
    return (
      <Flex
        width={"100vw"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Center>
          <Spinner />
        </Center>
      </Flex>
    );
  }
  if (error) {
    console.log({ error });
    return <>{"Error :("}</>;
  }
  if (isEmpty(data)) {
    return <>404 Client not found</>;
  }

  const { hero, brand, sections, footer, contact } = data;
  return (
    <main>
      <Box
        ref={ref}
        bgColor={"white"}
        // m={1}
        position={"absolute"}
        left={0}
        right={0}
        top={0}
        bottom={0}
        css={{
          fontFamily: fontFamilies?.[1].family || "",
          "& h1, & h2, & h3, & h4, & h5, & h6": {
            fontFamily: fontFamilies[0].family,
          },
        }}
        fontSize={{ base: "1rem", md: "1.25rem" }}
      >
        <Header hero={hero} sections={sections} brand={brand} />
        <Box>
          <Stack gap={0}>
            <Hero hero={hero} brand={brand} />
            {sections.map((i) => (
              <Section
                key={`section-${i.sortOrder}`}
                section={i}
                brand={brand}
              />
            ))}
            <ContactForm
              hero={hero}
              sections={sections}
              brand={brand}
              contact={contact}
            />
          </Stack>
        </Box>
        <Footer brand={brand} hero={hero} footer={footer} />
      </Box>
    </main>
  );
};

export default Home;
