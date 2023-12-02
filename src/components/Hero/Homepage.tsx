import React, { useMemo } from 'react';
import { Box, Heading, HStack, Image } from '@chakra-ui/react';
import ContentBox from '../Global/ContentBox';
import VStack from '../Global/VStack';
import styled from '@emotion/styled';
import { LEFT, RIGHT } from '../../types';

const ImageWrapper = styled(Box)`
  aspect-ratio: 7 / 3;

  div,
  img {
    aspect-ratio: 7 / 3;
  }

  &:after {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    background-color: #15161e;
    opacity: 0.7;
    z-index: 2;
  }
`;

const Border = styled(Box)<{ $offset?: number; $transform: number }>`
  position: absolute;
  width: calc(100% + ${({ $offset = 30 }) => $offset * 1.5}px);
  height: calc(100% + ${({ $offset = 30 }) => $offset * 1.5}px);
  top: -${({ $offset = 30 }) => $offset}px;
  left: -${({ $offset = 30 }) => $offset}px;
  z-index: 0;
  transform: skew(
      ${({ $transform }) => $transform}deg,
      ${({ $transform }) => $transform}deg
    )
    rotate(${({ $transform }) => $transform}deg);
`;

type Props = {
  align?: typeof LEFT | typeof RIGHT;
  imageUrl?: string | null;
  rotateImage?: boolean;
  subTitle?: string | null;
  title: string;
};

const getTitleHtml = (title: string) => {
  const parts = title.split(' ');

  if (parts.length <= 2) {
    return parts.join(' ');
  }

  const lastTwoWords = parts.slice(-2);
  const firstWords = parts.slice(0, parts.length - 2);

  return `${firstWords.join(' ')} ${lastTwoWords.join('&nbsp;')}`;
};

const HomepageHero = ({
  align = LEFT,
  imageUrl,
  rotateImage = true,
  subTitle,
  title,
}: Props) => {
  const randomBorderTransform = useMemo(() => Math.random() * 2 - 1, []);
  const titleHtml = useMemo(() => getTitleHtml(title), [title]);
  return (
    <ContentBox
      as={HStack}
      alignItems={{
        base: 'flex-end',
        lg: 'center',
      }}
      justifyContent={{
        base: 'flex-start',
        lg: align === LEFT ? 'flex-start' : 'flex-end',
      }}
      textAlign={{
        base: 'left',
        lg: align === LEFT ? 'left' : 'right',
      }}
      maxHeight={{
        base: '500px',
        lg: '600px',
      }}
      minHeight={{
        base: '500px',
        lg: '600px',
      }}
      position="relative"
      mt="90px"
    >
      <VStack
        alignItems={{
          base: 'flex-start',
          lg: align === LEFT ? 'flex-start' : 'flex-end',
        }}
        height="100%"
        maxWidth={{
          base: '100%',
          lg: '60%',
        }}
        gap="0"
        position="relative"
        zIndex="3"
      >
        {subTitle && (
          <Heading
            size="md"
            color="dracula.purple.400"
            background="bodyDark"
            p="4"
            boxShadow="0.5em 0 0 #15161e,-0.5em 0 0 #15161e"
          >
            <Box as="span" bg="bodyDark">
              {subTitle}
            </Box>
          </Heading>
        )}
        <Heading
          size={{
            base: '2xl',
            lg: '3xl',
          }}
          display="inline"
          px="3"
          py={{ base: 0, lg: '3' }}
        >
          <Box
            as="span"
            bg="bodyDark"
            boxShadow="0.5em 0 0 #15161e,-0.5em 0 0 #15161e"
            display="inline"
            lineHeight="1.25"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
        </Heading>
      </VStack>
      {imageUrl && (
        <ImageWrapper position="absolute" height="100%" width="100%" right="0">
          <Box
            width="calc(100% - 40px)"
            height="calc(100% - 40px)"
            overflow="hidden"
            mt="10px"
            ml="20px"
            transform={`skew(${randomBorderTransform}deg, ${randomBorderTransform}deg) rotate(${
              rotateImage ? randomBorderTransform : 0
            }deg);`}
            position="relative"
            zIndex="2"
          >
            <Image
              alt="Architecting and building things on the web"
              src={imageUrl}
              height={rotateImage ? '145%' : '100%'}
              width={rotateImage ? '145%' : '100%'}
              objectFit="cover"
              objectPosition="left middle"
              transform={
                rotateImage
                  ? `rotate(-10deg) scale(1.2) translate(10px, -115px)`
                  : 'none'
              }
              position="relative"
              zIndex="2"
            />
          </Box>
          <Border $transform={randomBorderTransform} bg="bodyDark" />
        </ImageWrapper>
      )}
    </ContentBox>
  );
};

export default HomepageHero;
