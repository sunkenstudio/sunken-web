import { Input } from '@chakra-ui/react';
import React from 'react';

interface TextInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const TextInput = ({ name, value, onChange }: TextInputProps) => {
  return (
    <Input
      id={`hero-form-${name}`}
      name={name}
      type={'text'}
      value={value}
      onChange={onChange}
      color={'black'}
      bgColor="white"
    />
  );
};
