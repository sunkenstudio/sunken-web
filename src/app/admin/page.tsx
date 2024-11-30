'use client';
import React, { useEffect, useState } from 'react';
import { Client, MediaLibrary } from '../types';
import { useApolloClient, useMutation } from '@apollo/client';
import { getMediaLibrary, getSite } from '../requests';
import { isEmpty } from 'lodash';
import { Stack, useToast } from '@chakra-ui/react';
import { HeroForm } from './components/HeroForm';
import { FormikProvider, useFormik } from 'formik';
import { Button } from '../components/_Shared/Button';
import { H3 } from '../components/Typography';
import { UPDATE_HERO } from '../graphql/queries';
import { useBrand } from '../contexts/BrandContext';

export default function Admin() {
  const [data, setData] = useState<Client | Record<string, never> | null>(null);
  const [mediaLibrary, setMediaLibrary] = useState<MediaLibrary>({});

  const client = useApolloClient();
  const toast = useToast();
  const { loadContent } = useBrand();

  const formik = useFormik({
    initialValues: {} as Client,
    onSubmit: () => {
      handleUpdate();
    },
  });

  const [updateHero] = useMutation(UPDATE_HERO);

  const handleUpdate = () => {
    console.log('values', formik.values);
    updateHero({
      variables: {
        ...formik.values.hero,
        image: {
          Media: formik.values.hero.image?.media.id,
          Alt: formik.values.hero.image?.media.alt,
          Border: formik.values.hero.image?.media.border,
          Filter: formik.values.hero.image?.media.filter,
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
        } else {
          setData({});
        }
      })
      .catch((err) => console.log(err));

    getMediaLibrary(client).then((media) => setMediaLibrary(media));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (isEmpty(data)) {
    return <div>Missing/Incorrect clientId param</div>;
  }

  return (
    <Stack p={'1rem'}>
      <FormikProvider value={formik}>
        <H3>SITE EDITOR</H3>
        <form onSubmit={formik.handleSubmit}>
          <HeroForm
            hero={data.hero}
            values={formik?.values}
            mediaLibrary={mediaLibrary}
            onChange={formik.handleChange}
          />
          <Button
            mt={'1rem'}
            type="submit"
            w={'100%'}
            textShadow={''}
            text={'SUBMIT'}
          />
        </form>
      </FormikProvider>
    </Stack>
  );
}
