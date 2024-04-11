// @ts-nocheck
"use client";
import React, { useState } from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { H3 } from "../Typography";
import { useFormik, FormikProvider } from "formik";
import { sendEmail } from "@/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { SectionBg } from "../Shared/SectionBg";
import {
  StrapiBrand,
  StrapiHero,
  StrapiSection,
  StrapiStyledImage,
} from "../Shared/types";
import { InputField, InputFieldProps } from "../Shared/InputField";
import { snakeCase } from "lodash";
import { Button } from "../Shared/Button";

interface ContactFormProps {
  hero: StrapiHero;
  sections: StrapiSection[];
  brand: StrapiBrand;
  contact: {
    fields: InputFieldProps[];
    sendTo: string;
    bgImage: StrapiStyledImage;
  };
}

export const ContactForm = ({
  hero,
  sections,
  brand,
  contact,
}: ContactFormProps) => {
  const [isFiring, setIsFiring] = useState(false);
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });
  const { bgImage, sendTo } = contact;
  const sharedProps = {
    bgColor: hero.buttons[0].bgColor,
    borderColor: hero.buttons[0].borderColor,
    borderRadius: hero.buttons[0].borderRadius,
    borderWidth: hero.buttons[0].borderWidth,
    textColor: hero.buttons[0].textColor,
  };
  useEffect(() => {
    if (sendEmailState.success) {
      alert("Email sent!");
      setIsFiring(false);
    }
    if (sendEmailState.error) {
      alert("Error sending email!");
      setIsFiring(false);
    }
  }, [sendEmailState]);

  const bgColor =
    sections.length % 3 === 0
      ? "light"
      : sections.length % 2 === 0
      ? "primary"
      : "secondary";

  const color = bgColor === "light" ? "primary" : "light";

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      setIsFiring(true);
      sendEmailAction({
        receiverEmail: sendTo,
        ...formik.values,
      });
    },
  });

  return (
    <FormikProvider value={formik}>
      <Flex
        id={"contact"}
        w="100%"
        color={brand[color]}
        textShadow={color === "light" ? `1px 1px 5px ${brand.primary}` : "none"}
        position="relative"
        minH={"2xl"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SectionBg image={bgImage} />
        <Stack
          zIndex={10}
          justifyContent={"center"}
          alignItems={"center"}
          w="100%"
          pb={"5rem"}
          pt={"1rem"}
        >
          <H3>CONTACT</H3>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Stack gap={"1rem"} m={3} w={{ base: "100%", md: "45%" }}>
              {contact.fields.map((i) => {
                const key = snakeCase(i.label);
                return (
                  <InputField
                    key={key}
                    id={key}
                    label={i.label}
                    type={i.type}
                    options={i.options}
                    brand={brand}
                    value={formik.values[key]}
                    onChange={formik.handleChange}
                  />
                );
              })}
              <Button
                type="submit"
                isLoading={isFiring}
                w={"100%"}
                {...sharedProps}
                text={"SUBMIT"}
              />
            </Stack>
          </form>
        </Stack>
      </Flex>
    </FormikProvider>
  );
};
