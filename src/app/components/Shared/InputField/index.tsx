import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { StrapiInputField } from '../../../types';
import { snakeCase } from 'lodash';
import { useBrand } from '@/app/contexts/BrandContext';

export interface InputFieldProps {
  id: string;
  field: StrapiInputField;
  value: string;
  onChange: (e: any) => void;
}

export const InputField = ({ id, field, value, onChange }: InputFieldProps) => {
  const { type, label, options = [] } = field;
  const { colors } = useBrand();
  const display = label.toUpperCase();
  if (
    ['text', 'email', 'date', 'time', 'number', 'tel', 'money'].includes(type)
  ) {
    return (
      <FormControl isRequired>
        <FormLabel htmlFor={id}>{display}</FormLabel>
        <Input
          id={id}
          data-testid={`input-${id}`}
          name={display}
          type={type}
          onChange={onChange}
          value={value}
          color={colors.dark}
          bgColor="white"
        />
      </FormControl>
    );
  }
  if (type === 'dropdown') {
    return (
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor={id}>{display}</FormLabel>
          <Select
            id={id}
            data-testid={`input-${id}`}
            name={display}
            onChange={onChange}
            value={value}
            color={colors.dark}
            bgColor="white"
          >
            {options.map((i) => (
              <option key={snakeCase(i)} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </FormControl>
        {value === 'Other' && (
          <FormControl isRequired>
            <Input
              id={`${id}-other`}
              data-testid={`input-${id}`}
              name={`${display}-other`}
              type={'text'}
              onChange={onChange}
              value={value}
              color={colors.dark}
              bgColor="white"
            />
          </FormControl>
        )}
      </Stack>
    );
  }
  if (type === 'textarea') {
    return (
      <FormControl isRequired>
        <FormLabel htmlFor={id}>{display}</FormLabel>
        <Textarea
          id={id}
          data-testid={`input-${id}`}
          name={display}
          variant="filled"
          onChange={onChange}
          value={value}
          color={colors.dark}
        />
      </FormControl>
    );
  }

  return null;
};
