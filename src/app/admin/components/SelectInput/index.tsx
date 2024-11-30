import { Select } from '@chakra-ui/react';
import React from 'react';

type Option = { key: string; val: any; display: string };
interface SelectInputProps {
  name: string;
  value: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const SelectInput = ({
  name,
  value,
  options,
  onChange,
}: SelectInputProps) => {
  return (
    <Select
      id={`hero-form-${name}`}
      name={name}
      value={value}
      onChange={onChange}
      color={'black'}
      bgColor="white"
      w={{ base: '100%', md: '30%' }}
    >
      {options.map((i) => (
        <option key={i.key} value={i.val}>
          {i.display}
        </option>
      ))}
    </Select>
  );
};
