import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Box, keyframes } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colorCssVariables } from '../../constants';

const colorOptions = Object.values(colorCssVariables);

const getRandomColor = () =>
  colorOptions[Math.floor(Math.random() * colorOptions.length)];

const stack = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 var(--glitch-color-1), 2px -3px 0 var(--glitch-color-2);
  }
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 var(--glitch-color-1), -2px 3px 0 var(--glitch-color-2);
  }
  100% {
    text-shadow: none;
  }
`;

const glitch = keyframes`
  0% {
    text-shadow: -2px 3px 0 var(--glitch-color-1), 2px -3px 0 var(--glitch-color-2);
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 var(--glitch-color-1), -2px 3px 0 var(--glitch-color-2);
  }
  4%, 100% {  text-shadow: none; transform: none; }
`;

const stackBox = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
    box-shadow: -2px 5px 0 var(--glitch-color-1), 2px -5px 0 var(--glitch-color-2);
  }
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    box-shadow: 2px -5px 0 var(--glitch-color-1), -2px 5px 0 var(--glitch-color-2);
  }
  100% {
    box-shadow: none;
  }
`;

const glitchBox = keyframes`
  0% {
    box-shadow: -2px 3px 0 var(--glitch-color-1), 2px -3px 0 var(--glitch-color-2);
    transform: translate(var(--glitch-translate));
  }
  2% {
    box-shadow: 2px -3px 0 var(--glitch-color-1), -2px 3px 0 var(--glitch-color-2);
  }
  4%, 100% {  box-shadow: none; transform: none; }
`;

const GlitchWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
`;

const Stack = styled(Box)<{
  $color1: string;
  $color2: string;
  $delay: string;
  $isBox?: boolean;
}>`
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 4rem;
  color: var(--glitch-color-1);
  --glitch-color-1: var(${({ $color1 }) => $color1});
  --glitch-color-2: var(${({ $color2 }) => $color2});
  --stack-height: calc(100% / var(--stacks) - 1px);
  --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation: ${({ $isBox }) => ($isBox ? stackBox : stack)} 800ms
      cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards calc(var(--index) * 120ms),
    ${({ $isBox }) => ($isBox ? glitchBox : glitch)} 2s ease infinite
      ${({ $delay }) => $delay} alternate-reverse;

  &:nth-of-type(odd) {
    --glitch-translate: 10px;
  }
  &:nth-of-type(even) {
    --glitch-translate: -10px;
  }
`;

const Stack1 = styled(Stack)`
  --index: 0;
`;
const Stack2 = styled(Stack)`
  --index: 1;
`;
const Stack3 = styled(Stack)`
  --index: 2;
`;

type Props = {
  children: React.ReactNode;
  isBox?: boolean;
};

const getDelay = () => `${Math.random() * 5 + 2.5}s`;

const Glitch = ({ children, isBox }: Props) => {
  const color1 = useMemo(() => getRandomColor(), []);
  const color2 = useMemo(() => getRandomColor(), []);
  const delay = useMemo(() => getDelay(), []);

  return (
    <GlitchWrapper>
      <Stack1 $color1={color1} $color2={color2} $delay={delay} $isBox={isBox}>
        {children}
      </Stack1>
      <Stack2 $color1={color1} $color2={color2} $delay={delay} $isBox={isBox}>
        {children}
      </Stack2>
      <Stack3 $color1={color1} $color2={color2} $delay={delay} $isBox={isBox}>
        {children}
      </Stack3>
    </GlitchWrapper>
  );
};

export default Glitch;
