"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Stack,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { H3 } from "../Typography";
import { Formik, Form, Field, useFormik, FormikProvider } from "formik";
import { sendEmail } from "@/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const Background = ({ bgColor }) => (
  <>
    <Box bg={bgColor} w="100%" h="2xl" position={"absolute"} />
    <Image
      w="100%"
      h="2xl"
      src={"texture-2.jpg"}
      position={"absolute"}
      objectFit="cover"
      opacity={0.25}
    />
    <Box bg={bgColor} w="100%" h="2xl" opacity={0.5} position={"absolute"} />
  </>
);

export const ContactForm = ({ sections, brand }) => {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  useEffect(() => {
    console.log({ sendEmailState });
    if (sendEmailState.success) {
      alert("Email sent!");
    }
    if (sendEmailState.error) {
      alert("Error sending email!");
    }
  }, [sendEmailState]);

  const bgColor =
    sections.length % 3 === 0
      ? "secondary"
      : sections.length % 2 === 0
      ? "primary"
      : "light";

  const color = bgColor === "light" ? "primary" : "light";

  const formik = useFormik({
    initialValues: {
      senderEmail: "",
      receiverEmail: "danwarrickdev@gmail.com",
      name: "",
      message: "",
      company: "",
    },
    onSubmit: () => {
      sendEmailAction(formik.values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Flex
        id={`contact`}
        w="100%"
        h="2xl"
        color={brand[color]}
        textShadow={color === "light" ? `1px 1px 5px ${brand.primary}` : "none"}
      >
        <Background bgColor={brand[bgColor]} />
        <Stack
          zIndex={10}
          justifyContent={"center"}
          alignItems={"center"}
          w="100%"
        >
          <H3>CONTACT</H3>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Stack gap={"1rem"} m={3} w={{ base: "100%", md: "45%" }}>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  color={brand.dark}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="senderEmail">Email</FormLabel>
                <Input
                  id="senderEmail"
                  name="senderEmail"
                  type="email"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.senderEmail}
                  color={brand.dark}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="company">Company</FormLabel>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.company}
                  color={brand.dark}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  color={brand.dark}
                />
              </FormControl>
              <Button
                type="submit"
                bgColor={brand.dark}
                border={`2px solid ${brand.light}`}
                color={brand.light}
                w={"100%"}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </FormikProvider>
  );
};
