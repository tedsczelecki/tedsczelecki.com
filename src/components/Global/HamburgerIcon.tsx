import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ORANGE, PINK, PURPLE } from '../../constants';

const StyledIconButton = styled.button<{ isActive?: boolean }>`
  width: 32px;
  height: 22px;
  position: relative;
  padding: 0.5rem;
  box-sizing: content-box;
  background: #031926;
  cursor: pointer;

  span {
    width: calc(100% - 1rem);
    height: 3px;
    position: absolute;
    left: 0.5rem;
    display: block;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    &:nth-of-type(1) {
      top: 0.5rem;
      transform-origin: 0% 0%;

      ${({ isActive }) =>
        isActive &&
        `
        transform: rotate(45deg) translate(-2px, -1px);
      `}
    }

    &:nth-of-type(2) {
      top: 50%;
      transform: translateY(-2px);

      ${({ isActive }) =>
        isActive &&
        `
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      `}
    }

    &:nth-of-type(3) {
      bottom: 0.5rem;
      transform-origin: 0% 100%;

      ${({ isActive }) =>
        isActive &&
        `
          transform: rotate(-45deg) translate(0, -1px);
      `}
    }
  }
`;

type Props = {
  isActive?: boolean;
  onClick?: () => void;
};

const HamburgerIcon = ({ isActive, onClick }: Props) => {
  return (
    <StyledIconButton
      aria-label={isActive ? 'Close navigation menu' : 'Open navigation menu'}
      isActive={isActive}
      onClick={() => onClick?.()}
    >
      <Box as="span" bg={PINK} />
      <Box as="span" bg={ORANGE} />
      <Box as="span" bg={PURPLE} />
    </StyledIconButton>
  );
};

export default HamburgerIcon;
