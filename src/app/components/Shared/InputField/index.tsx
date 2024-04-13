import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { StrapiBrand, StrapiInputField } from "../../../types";
import { snakeCase } from "lodash";

export interface InputFieldProps {
  id: string;
  field: StrapiInputField;
  value: string;
  brand: StrapiBrand;
  onChange: (e: any) => void;
}

export const InputField = ({
  id,
  field,
  value,
  brand,
  onChange,
}: InputFieldProps) => {
  const { type, label, options = [] } = field;

  const display = label.toUpperCase();
  if (
    ["text", "email", "date", "time", "number", "tel", "money"].includes(type)
  ) {
    return (
      <FormControl isRequired>
        <FormLabel htmlFor={id}>{display}</FormLabel>
        <Input
          id={id}
          name={display}
          type={type}
          onChange={onChange}
          value={value}
          color={brand.dark}
          bgColor="white"
        />
      </FormControl>
    );
  }
  if (type === "dropdown") {
    return (
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor={id}>{display}</FormLabel>
          <Select
            id={id}
            name={display}
            onChange={onChange}
            value={value}
            color={brand.dark}
            bgColor="white"
          >
            {options.map((i) => (
              <option key={snakeCase(i)} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </FormControl>
        {value === "Other" && (
          <FormControl isRequired>
            <Input
              id={`${id}-other`}
              name={`${display}-other`}
              type={"text"}
              onChange={onChange}
              value={value}
              color={brand.dark}
              bgColor="white"
            />
          </FormControl>
        )}
      </Stack>
    );
  }
  if (type === "textarea") {
    return (
      <FormControl isRequired>
        <FormLabel htmlFor={id}>{display}</FormLabel>
        <Textarea
          id={id}
          name={display}
          variant="filled"
          onChange={onChange}
          value={value}
          color={brand.dark}
        />
      </FormControl>
    );
  }

  return null;
};
