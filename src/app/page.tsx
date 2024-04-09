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
  const [fontFamily, setFontFamily] = useState("");
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
          const { font } = clientData.brand;
          console.log({ clientData });
          Fonts(font);
          setFontFamily(font.Family);
          return clientData;
        })
        .then((clientData) => {
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

  const { hero, brand, sections, footer } = data;
  return (
    <main>
      <Box
        ref={ref}
        bgColor={"white"}
        m={1}
        position={"absolute"}
        left={0}
        right={0}
        top={0}
        bottom={0}
        fontFamily={fontFamily}
      >
        <Header sections={sections} brand={brand} />
        <Box>
          <Stack gap={1}>
            <Hero
              header={hero.header}
              subheader={hero.subheader}
              text={hero.text}
              button1={hero.button1}
              button2={hero.button2}
              image={hero.image}
              bgFilterOpacity={hero.bgFilterOpacity}
              bgImage={hero.bgImage}
              bgImageOpacity={hero.bgImageOpacity}
              brand={brand}
            />
            {sections.map((i) => (
              <Section
                key={`section-${i.sortOrder}`}
                header={i.header}
                sortOrder={i.sortOrder}
                text={i.text}
                image={i.image}
                caption={i.caption}
                brand={brand}
                bgFilterOpacity={i.bgFilterOpacity}
                bgImage={i.bgImage}
                bgImageOpacity={i.bgImageOpacity}
              />
            ))}
            <ContactForm sections={sections} brand={brand} {...data.contact} />
          </Stack>
        </Box>
        <Footer brand={brand} footer={footer} />
      </Box>
    </main>
  );
};

export default Home;
