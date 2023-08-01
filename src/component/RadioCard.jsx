import { Box } from '@chakra-ui/layout';
import { useRadio } from '@chakra-ui/radio';
import React from 'react';

export default function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        boxShadow="sm"
        color="#3B97CB"
        bg="#CAECFF"
        _checked={{
          bg: '#2D9CDB',
          color: 'white',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
