'use client';
import React, { useState } from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import { H3 } from '../Typography';
import { useFormik, FormikProvider } from 'formik';
import { sendEmail } from '@/actions';
import { SectionBg } from '../Shared/SectionBg';
import { StrapiContact, StrapiHero, StrapiSection } from '../../types';
import { InputField } from '../Shared/InputField';
import { snakeCase } from 'lodash';
import { Button } from '../Shared/Button';
import { useBrand } from '@/app/contexts/BrandContext';

export interface ContactFormProps {
  hero: StrapiHero;
  sections: StrapiSection[];
  contact: StrapiContact;
}

export const ContactForm = ({ hero, sections, contact }: ContactFormProps) => {
  const [isFiring, setIsFiring] = useState(false);
  const { colors } = useBrand();

  const { bgImage, sendTo } = contact;
  const sharedProps = {
    bgColor: hero.buttons[0].bgColor,
    border: hero.buttons[0].border,
    textColor: hero.buttons[0].color,
  };

  const bgColor =
    sections.length % 3 === 0
      ? 'light'
      : sections.length % 2 === 0
        ? 'primary'
        : 'secondary';

  const color = bgColor === 'light' ? 'primary' : 'light';

  const formik = useFormik({
    initialValues: {} as Record<string, string>,
    onSubmit: () => {
      setIsFiring(true);
      sendEmail({
        receiverEmail: sendTo,
        ...formik.values,
      }).then((res) => {
        if (res.success) {
          alert('Email sent!');
          setIsFiring(false);
        }
        if (res.error) {
          alert('Error sending email!');
          setIsFiring(false);
        }
      });
    },
  });

  return (
    <FormikProvider value={formik}>
      <Flex
        id={'contact'}
        w="100%"
        color={colors[color]}
        position="relative"
        minH={'2xl'}
        justifyContent={'center'}
        alignItems={'center'}
        fontFamily={'Arial'}
        textShadow={'1px 1px 1px black'}
      >
        <SectionBg bgColor={colors[contact.bgColor]} image={bgImage} />
        <Stack
          zIndex={10}
          justifyContent={'center'}
          alignItems={'center'}
          w="100%"
          pb={'5rem'}
          pt={'1rem'}
        >
          <H3 mt={'2.5rem'}>{contact.header}</H3>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            <Stack gap={'1rem'} m={3} w={{ base: '100%', md: '45%' }}>
              {contact.fields.map((i) => {
                const key = snakeCase(i.label);
                return (
                  <InputField
                    key={key}
                    id={key}
                    field={i}
                    value={formik?.values?.[key]}
                    onChange={formik.handleChange}
                  />
                );
              })}
              <Button
                type="submit"
                isLoading={isFiring}
                w={'100%'}
                {...sharedProps}
                text={'SUBMIT'}
              />
            </Stack>
          </form>
        </Stack>
      </Flex>
    </FormikProvider>
  );
};
