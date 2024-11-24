'use client';
import React, { useEffect, useState } from 'react';
import { Client } from '../types';
import { useApolloClient } from '@apollo/client';
import { getSite } from '../requests';
import { isEmpty } from 'lodash';
import { Stack } from '@chakra-ui/react';
import { HeroForm } from './components/HeroForm';
import { FormikProvider, useFormik } from 'formik';
import { Button } from '../components/_Shared/Button';
import { H3 } from '../components/Typography';

export default function Admin() {
  const [data, setData] = useState<Client | Record<string, never> | null>(null);
  const client = useApolloClient();

  const formik = useFormik({
    initialValues: {} as Client,
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  useEffect(() => {
    getSite(client)
      .then((site) => {
        if (site) {
          setData(site);
          formik.setValues(site);
        } else {
          setData({});
        }
      })
      .catch((err) => console.log(err));
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
