import React from 'react';
import HStack from './HStack';
import ContentBox from './ContentBox';
import { Text } from '@chakra-ui/react';
import { PINK, PURPLE } from '../../constants';

const Footer = () => {
  return (
    <HStack bg="bodyDark" mt="6">
      <ContentBox as={HStack}>
        <Text>
          &copy; {new Date().getFullYear()}{' '}
          <Text color={PINK} display="inline">
            Ted
          </Text>{' '}
          <Text color={PURPLE} display="inline">
            Sczelecki.
          </Text>
        </Text>
      </ContentBox>
    </HStack>
  );
};

export default Footer;
