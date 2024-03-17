import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Box, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Box m={1}>
        <Stack gap={1}>
          <Hero />
          <Section header="Section 1" bgColor="secondary" color="white" />
          <Section header="Section 2" bgColor="white" color="primary" />
          <Section header="Section 3" bgColor="primary" color="white" />
        </Stack>
      </Box>
    </main>
  );
}
