import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type Props = {
  alignItems?: string;
  children?: React.ReactNode;
  gap?: string;
} & BoxProps;

const VStack = ({ children, gap = '5', ...boxProps }: Props) => {
  return (
    <Box
      alignItems={boxProps?.alignItems ?? 'flex-start'}
      display="flex"
      flexDirection={boxProps?.flexDirection ?? 'row'}
      gap={gap}
      width="100%"
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default VStack;
