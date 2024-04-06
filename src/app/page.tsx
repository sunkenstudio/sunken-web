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

const Home = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const client = useApolloClient();
  useEffect(() => {
    async function fetchData() {
      const ClientId = getClientIdFromUrl();
      client
        .query({
          query: GET_SITE,
          variables: {
            ClientId,
          },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err));
    }

    fetchData();
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
  if (data && data.sites.data.length === 0) {
    return <>404 Client not found</>;
  }
  const raw = data.sites.data[0];

  const clientData: Client = formatStrapiData(raw.attributes);
  const { hero, brand, sections } = clientData;
  return (
    <main>
      <Box
        bgColor={"white"}
        m={1}
        position={"absolute"}
        left={0}
        right={0}
        top={0}
        bottom={0}
      >
        <Header sections={clientData.sections} brand={clientData.brand} />
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
            <ContactForm
              sections={clientData.sections}
              brand={clientData.brand}
              {...clientData.contact}
            />
          </Stack>
        </Box>
        <Footer brand={clientData.brand} footer={clientData.footer} />
      </Box>
    </main>
  );
};

export default Home;
