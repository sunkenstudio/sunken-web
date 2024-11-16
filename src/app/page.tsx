// @ts-nocheck
'use client';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Carousel } from './components/Carousel';
import { Box, Center, Flex, Spinner, Stack } from '@chakra-ui/react';
import { useApolloClient } from '@apollo/client';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GET_SITE } from './helpers/queries';
import { ContactForm } from './components/ContactForm';
import { Client } from './types';
import { formatStrapiData, getClientIdFromUrl } from './helpers/utils';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useRef } from 'react';
import Fonts from './helpers/fonts';
import { useBrand } from './contexts/BrandContext';
import { ImageScroll } from './components/ImageScroll';
import { ProjectSection } from './components/ProjectSection';

const Home = () => {
  const [data, setData] = useState(null);
  const [fontFamilies, setFontFamilies] = useState('');
  const ref = useRef();

  const client = useApolloClient();
  const { colors, loadContent } = useBrand();

  useEffect(() => {
    async function fetchData(id: string) {
      client
        .query({
          query: GET_SITE,
          variables: {
            ClientId: id,
          },
        })
        .then((res) => {
          const sites = res.data.sites.data;
          if (sites.length === 0) {
            return null;
          }
          const raw = res.data.sites.data[0];
          const clientData: Client = formatStrapiData(raw.attributes);
          loadContent(clientData.brand);

          const { fonts } = clientData.brand;
          if (fonts.length > 0) {
            Fonts(fonts);
          }
          return clientData;
        })
        .then((clientData) => {
          if (clientData) {
            document.title = clientData.brand.companyName;
            setFontFamilies(clientData?.brand?.fonts || []);
            setData(clientData);
          } else {
            setData({});
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
        width={'100vw'}
        height={'100vh'}
        alignContent={'center'}
        justifyContent={'center'}
      >
        <Center>
          <Spinner />
        </Center>
      </Flex>
    );
  }

  if (isEmpty(data)) {
    return <>404 Client not found</>;
  }

  const {
    hero,
    sections,
    footer,
    contact,
    carousel,
    config,
    projectSection,
    imageScroll,
  } = data;

  if (config.isUnderConstruction) {
    return <>Under Construction</>;
  }

  if (config.isMaintenanceMode) {
    return (
      <>
        Site is currently undergoing routine maintenance. Please try again
        later.
      </>
    );
  }

  const fontHeader = fontFamilies?.[0]?.family || '';
  const fontBody = fontFamilies?.[1]?.family || fontHeader || '';
  const primaryButtonStyle = {
    textColor: colors[hero.buttons[0].color as Color],
    bgColor: colors[hero.buttons[0].bgColor as Color],
    border: hero.buttons[0].border,
    shadow: hero.buttons[0].shadow,
  };

  return (
    <main>
      <Box
        ref={ref}
        bgColor={'white'}
        // m={1}
        position={'absolute'}
        left={0}
        right={0}
        top={0}
        bottom={0}
        css={{
          fontFamily: fontBody,
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            fontFamily: fontHeader,
          },
        }}
        fontSize={{ base: '1.15rem', md: '1.25rem' }}
      >
        <Header hero={hero} sections={sections} contact={contact} />
        <Box>
          <Stack gap={0}>
            <Hero hero={hero} />
            <ImageScroll imageScroll={imageScroll} />
            {sections.map((i) => (
              <Section key={`section-${i.sortOrder}`} section={i} />
            ))}
            {carousel?.images?.length > 0 && <Carousel carousel={carousel} />}
            {contact.fields && (
              <ContactForm hero={hero} sections={sections} contact={contact} />
            )}
            {projectSection?.articles?.length > 0 && (
              <ProjectSection projectSection={projectSection} />
            )}
          </Stack>
        </Box>
        <Footer buttonStyle={primaryButtonStyle} footer={footer} />
      </Box>
    </main>
  );
};

export default Home;
