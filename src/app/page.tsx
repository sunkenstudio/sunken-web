"use client";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Box, Flex, Spinner, Stack } from "@chakra-ui/react";
import { BASE_URL } from "./urls";
import { useEffect, useState } from "react";

const Home = () => {
  const [clientEntry, setClientEntry] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      const res = await fetch(`${BASE_URL}/sites?populate=*`);
      const json = await res.json();
      const client = json.data.find((i) => i.attributes.ClientId === "demo");
      setClientEntry(client.attributes);
      console.log({ client });
    };
    fetchClient();
  }, []);

  return (
    <main>
      <Box m={1}>
        {clientEntry ? (
          <Stack gap={1}>
            <Hero
              header={clientEntry.hero.data.attributes.Header}
              subheader={clientEntry.hero.data.attributes.Subheader}
              button1={clientEntry.hero.data.attributes.Button1}
              button2={clientEntry.hero.data.attributes.Button2}
              image={clientEntry.hero.data.attributes.Image}
            />
            <Section
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
            />
          </Stack>
        ) : (
          <Flex
            w="100%"
            h="100%"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner />
          </Flex>
        )}
      </Box>
    </main>
  );
};

export default Home;
