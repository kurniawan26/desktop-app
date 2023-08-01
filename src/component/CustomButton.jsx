import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomButton({ customClassname, text, onClick }) {
  return (
    <Button
      variant="solid"
      bg="#56E4A0"
      onClick={onClick}
      className={`!h-[60px]  ${customClassname}`}
      px={4}
      py={6}
    >
      <Text className="m-4 text-xl font-bold text-white">{text}</Text>
    </Button>
  );
}

CustomButton.propTypes = {
  customClassname: PropTypes.string,
};

CustomButton.defaultProps = {
  customClassname: '',
};
