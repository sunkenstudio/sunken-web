'use client';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Carousel } from './components/Carousel';
import { Box, Center, Flex, Spinner, Stack } from '@chakra-ui/react';
import { useApolloClient } from '@apollo/client';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import Fonts from './helpers/fonts';
import { useBrand } from './contexts/BrandContext';
import { ImageScroll } from './components/ImageScroll';
import { ProjectSection } from './components/ProjectSection';
import { getSite } from './requests';
import { Client, FontFamily } from './types';
import { FeatureSection } from './components/FeatureSection';

const Home = () => {
  const [data, setData] = useState<Client | Record<string, never> | null>(null);
  const [fontFamilies, setFontFamilies] = useState<FontFamily[]>([]);
  const client = useApolloClient();

  const { colors, loadContent } = useBrand();

  useEffect(() => {
    getSite(client)
      .then((site) => {
        if (site) {
          // Initialize brand context
          loadContent(site.brand);

          // Load metadata
          document.title = site.brand.companyName;

          // Load favicon
          if (site.brand.favicon.url) {
            const faviconLink: HTMLLinkElement =
              document.querySelector("link[rel='icon']") ||
              document.createElement('link');
            faviconLink.rel = 'icon';
            faviconLink.href = site.brand.favicon.url; // Assuming site.brand.favicon is the URL of the favicon
            document.head.appendChild(faviconLink); // Add the favicon link to the document head if not already present
          }

          // Load fonts
          const { fonts } = site.brand;
          if (fonts.length > 0) {
            Fonts(fonts);
          }
          setFontFamilies(site?.brand?.fonts || []);
        }
        return site;
      })
      .then((site) => {
        // Load site data
        if (site) {
          setData(site);
        }
        // 404
        else {
          setData({});
        }
      })
      .catch((err) => console.log(err));
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
    featureSection,
  } = data as Client;

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
    textColor: colors[hero.buttons[0].color],
    bgColor: colors[hero.buttons[0].bgColor],
    border: hero.buttons[0].border,
    shadow: hero.buttons[0].shadow,
  };

  const renderSortable = () => {
    const sortableComponents = [
      {
        props: hero,
        component: <Hero hero={hero} />,
      },
      {
        props: featureSection,
        component: <FeatureSection featureSection={featureSection} />,
      },
      {
        props: imageScroll,
        component: <ImageScroll imageScroll={imageScroll} />,
      },
      {
        props: carousel,
        component: <Carousel carousel={carousel} />,
      },
      {
        props: projectSection,
        component: <ProjectSection projectSection={projectSection} />,
      },
      {
        props: contact,
        component: (
          <ContactForm hero={hero} sections={sections} contact={contact} />
        ),
      },
      ...sections.map((i) => ({
        props: i,
        component: <Section key={`section-${i.sortOrder}`} section={i} />,
      })),
    ]
      .filter((i) => Boolean(i.props))
      .sort((a, b) => a.props.sortOrder - b.props.sortOrder);

    return sortableComponents.map((i) => i.component);
  };

  return (
    <main>
      <Box
        bgColor={'white'}
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
          <Stack gap={0}>{renderSortable()}</Stack>
        </Box>
        {footer && <Footer buttonStyle={primaryButtonStyle} footer={footer} />}
      </Box>
    </main>
  );
};

export default Home;
