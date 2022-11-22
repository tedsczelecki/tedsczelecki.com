import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import ContentBox from './ContentBox';
import styled from '@emotion/styled';
import { RiGithubFill } from 'react-icons/ri';
import { Link } from 'gatsby';
import { TRANSPARENT } from '../../constants';
import HStack from './HStack';
import HamburgerIcon from './HamburgerIcon';
import VStack from './VStack';

const NavStyled = styled(HStack)`
  position: relative;
  flex-wrap: nowrap;

  a {
    padding: 0.5rem 0.75rem;
  }

  * {
    position: relative;
    z-index: 1;
  }
`;

type NavLinksProps = {
  onClick?: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => (
  <>
    <Link to="/#about" onClick={() => onClick?.()}>
      About
    </Link>
    <Link to="/#blog" onClick={() => onClick?.()}>
      Blog
    </Link>
    <Link to="/projects" onClick={() => onClick?.()}>
      Work
    </Link>
    <Link to="/#contact" onClick={() => onClick?.()}>
      Contact
    </Link>
  </>
);

const NavSocial = () => (
  <>
    <a href="https://github.com/tedsczelecki" target="_blank">
      <RiGithubFill size="23" />
    </a>
  </>
);

const Header = () => {
  const [isStuck, setIsStuck] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 0 && !isStuck) {
          setIsStuck(true);
        } else if (window.scrollY === 0) {
          setIsStuck(false);
        }
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Box
        transition="background-color 0.3s ease-out"
        width="100%"
        position="fixed"
        zIndex="9"
        top="0"
        bg={isStuck ? 'bodyDark' : TRANSPARENT}
      >
        <ContentBox
          as={HStack}
          height="65px"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          style={{ gap: '6' }}
        >
          <Link to="/">
            <Logo />
          </Link>
          <NavStyled
            gap="0"
            width="min-content"
            display={{
              base: 'none',
              sm: 'flex',
            }}
          >
            <NavLinks />
            <NavSocial />
          </NavStyled>
        </ContentBox>
      </Box>
      <Box
        display={{
          base: 'block',
          sm: 'none',
        }}
        position="fixed"
        top="3"
        right="5"
        zIndex={99999999}
      >
        <HamburgerIcon
          isActive={isOpen}
          onClick={() => (isOpen ? onClose() : onOpen())}
        />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="bodyDark" p="6">
          <VStack justifyContent="space-between" height="100%" pt="8">
            <VStack>
              <NavLinks onClick={() => onClose()} />
            </VStack>
            <HStack>
              <NavSocial />
            </HStack>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
