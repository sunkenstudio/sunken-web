import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { StrapiBrand } from "../types";
import { snakeCase } from "lodash";

export interface InputFieldProps {
  id: string;
  label: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "calendar"
    | "time"
    | "time_range"
    | "dropdown"
    | "money"
    | "number"
    | "textarea";
  value: string;
  options?: string[];
  brand: StrapiBrand;
  onChange: () => void;
}
export const InputField = ({
  id,
  label,
  type,
  options = [],
  value,
  brand,
  onChange,
}: InputFieldProps) => {
  if (
    ["text", "email", "date", "time", "number", "tel", "money"].includes(type)
  ) {
    return (
      <FormControl isRequired>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Input
          id={id}
          name={label}
          type={type}
          variant="filled"
          onChange={onChange}
          value={value}
          color={brand.dark}
        />
      </FormControl>
    );
  }
  if (type === "dropdown") {
    return (
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor={id}>{label}</FormLabel>
          <Select
            id={id}
            name={label}
            variant="filled"
            onChange={onChange}
            value={value}
            color={brand.dark}
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
              name={`${label}-other`}
              type={"text"}
              variant="filled"
              onChange={onChange}
              value={value}
              color={brand.dark}
            />
          </FormControl>
        )}
      </Stack>
    );
  }
  if (type === "textarea") {
    return (
      <FormControl isRequired>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Textarea
          id={id}
          name={label}
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
