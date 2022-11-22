import React from 'react';
import Glitch from '../Global/Glitch';
import { Text } from '@chakra-ui/react';
import { PINK, PURPLE } from '../../constants';

const Logo = () => (
  <Glitch>
    <Text fontFamily="Permanent Marker" color="white" fontSize="4xl">
      <Text color={PINK} display="inline">
        T
      </Text>
      <Text color={PURPLE} display="inline">
        S
      </Text>
    </Text>
  </Glitch>
);

export default Logo;
