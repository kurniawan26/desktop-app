import { Text } from '@chakra-ui/react';
import React from 'react';

export default function FieldWrapper({ customClassname, text, children }) {
  return (
    <div className={`flex flex-col gap-3 ${customClassname}`}>
      <Text className="text-[#3B97CB] text-xl font-medium">{text}</Text>
      {children}
    </div>
  );
}
