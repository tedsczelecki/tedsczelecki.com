import React from 'react';
import { CONTENT_MAX_WIDTH } from '../../constants';
import { Box, BoxProps } from '@chakra-ui/react';

type Props = {
  as?: any;
  children: React.ReactNode;
} & BoxProps;

const ContentBox = ({ as = Box, children, ...boxProps }: Props) => (
  <Box
    as={as}
    flex="1"
    maxWidth={CONTENT_MAX_WIDTH}
    margin={{
      base: '0',
      sm: '0 auto',
    }}
    width="100%"
    p="6"
    {...boxProps}
  >
    {children}
  </Box>
);

export default ContentBox;
