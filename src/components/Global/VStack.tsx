import React, { ForwardedRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type Props = {
  children?: React.ReactNode;
} & BoxProps;

const VStack = React.forwardRef(
  ({ children, ...boxProps }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <Box
        ref={ref}
        alignItems={boxProps.alignItems ?? 'flex-start'}
        display="flex"
        flexDirection="column"
        gap={boxProps?.gap ?? '5'}
        width="100%"
        {...boxProps}
      >
        {children}
      </Box>
    );
  },
);

export default VStack;
