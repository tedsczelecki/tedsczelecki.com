import React, { useMemo } from 'react';
import VStack from '../Global/VStack';
import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { HighlightColors } from '../../types/layout';
import { colorCssVariables, CYAN, PINK } from '../../constants';
import Glitch from '../Global/Glitch';

const StyledHeading = styled(Heading)`
  position: relative;
`;

const UnderlineWrapper = styled(Box)`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 12px;
`;

const Underline = styled(Box)<{ $color: HighlightColors; $skew: number }>`
  width: 100%;
  height: 12px;
  background-color: ${({ $color }) => `var(${colorCssVariables[$color]})`};
  z-index: -1;
  transform: skew(-${({ $skew }) => $skew}deg, -${({ $skew }) => $skew}deg);
`;

type Props = {
  color?: HighlightColors;
  subTitle?: string;
  title: string;
} & BoxProps;

const SectionTitle = ({
  color = PINK,
  subTitle,
  title,
  ...boxProps
}: Props) => {
  const skew = useMemo(() => Math.random() * 4 - 2, []);
  return (
    <VStack {...boxProps} gap="4" alignItems="center" textAlign="center">
      <StyledHeading size="xl">
        <Box position="relative" zIndex="5">
          {title}
        </Box>
        <UnderlineWrapper>
          <Glitch isBox>
            <Underline $color={color} $skew={skew} />
          </Glitch>
        </UnderlineWrapper>
      </StyledHeading>
      {subTitle && (
        <Text
          size="lg"
          maxWidth="500px"
          fontWeight="700"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
      )}
    </VStack>
  );
};

export default SectionTitle;
