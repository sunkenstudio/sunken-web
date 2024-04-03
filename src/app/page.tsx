"use client";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Box, Center, Flex, Spinner, Stack } from "@chakra-ui/react";
import { camelCase } from "lodash";
import { useQuery } from "@apollo/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GET_SITE } from "./helpers/queries";
import { ContactForm } from "./components/ContactForm";
import { Client } from "./components/Shared/types";

const Home = () => {
  const formatStrapiData = (data: any): Client => {
    return Object.entries(data).reduce((acc, [key, val]) => {
      const formattedKey = camelCase(key);
      if (typeof val === "object") {
        if (Array.isArray(val?.data)) {
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
    }, {}) as unknown as Client;
  };

  const { loading, error, data } = useQuery(GET_SITE, {
    variables: {
      clientId: "demo",
    },
  });
  if (loading) {
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
    return <>{"Error :("}</>;
  }

  const client = data.sites.data.find((i) => i.attributes.ClientId === "demo");
  const clientData: Client = formatStrapiData(client.attributes);

  const { hero, brand, sections } = clientData;
  console.log({ hero });
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
