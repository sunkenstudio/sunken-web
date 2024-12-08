'use client';
import React, { useEffect, useState } from 'react';
import { Client, MediaLibrary } from '../types';
import { useApolloClient, useMutation } from '@apollo/client';
import { getMediaLibrary, getSite } from '../requests';
import { isEmpty } from 'lodash';
import {
  Stack,
  useToast,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { HeroForm } from './components/HeroForm';
import { FormikProvider, useFormik } from 'formik';
import { H3 } from '../components/Typography';
import { UPDATE_HERO } from '../graphql/queries';
import { useBrand } from '../contexts/BrandContext';

export default function Admin() {
  const [data, setData] = useState<Client | Record<string, never> | null>(null);
  const [mediaLibrary, setMediaLibrary] = useState<MediaLibrary>({});
  const [isLoading, setIsLoading] = useState(true);

  const client = useApolloClient();
  const toast = useToast();
  const { loadContent } = useBrand();

  const formik = useFormik({
    initialValues: {} as Client,
    onSubmit: () => {
      console.log({ values: formik.values });
      handleUpdate();
    },
  });

  const [updateHero] = useMutation(UPDATE_HERO);

  const handleUpdate = () => {
    const { hero } = formik.values;
    console.log({ buttons: hero.buttons });
    updateHero({
      variables: {
        ...hero,
        image: {
          ...hero.image,
          media: hero.image?.media.id,
        },
        bgImage: {
          ...hero.bgImage,
          media: hero.bgImage?.media.id,
        },
      },
    })
      .then(() => {
        toast({
          title: 'Hero Updated!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error('Error updating hero:', error);
        toast({
          title: 'Something went wrong...',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    getSite(client)
      .then((site) => {
        if (site) {
          setData(site);
          formik.setValues(site);
          loadContent(site.brand);
          getMediaLibrary(client, site.clientId)
            .then((media) => setMediaLibrary(media))
            .then(() => setIsLoading(false));
        } else {
          setData({});
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  if (isEmpty(data)) {
    return <div>Missing/Incorrect clientId param</div>;
  }

  return (
    <Stack p={'1rem'}>
      <FormikProvider value={formik}>
        <H3 mb={'1rem'}>{`SITE EDITOR - ${data?.clientId}`}</H3>
        <form onSubmit={formik.handleSubmit}>
          <Tabs variant="soft-rounded">
            <TabList>
              <Tab>HERO</Tab>
              <Tab>BRAND</Tab>
              <Tab>SECTION 1</Tab>
              <Tab>CONTACT</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <HeroForm
                  values={formik?.values}
                  mediaLibrary={mediaLibrary}
                  onChange={formik.handleChange}
                />
              </TabPanel>
              <TabPanel>
                <p>Brand form goes here</p>
              </TabPanel>
              <TabPanel>
                <p>Section form goes here</p>
              </TabPanel>
              <TabPanel>
                <p>Contact form goes here</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </form>
      </FormikProvider>
    </Stack>
  );
}
