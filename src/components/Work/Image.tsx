import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Image as ChakraImage, LayoutProps } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { HighlightColors } from '../../types';
import { colorCssVariables, PINK, TRANSPARENT } from '../../constants';

const glitch = require('glitch-canvas');

const Border = styled(Box)<{ $offset?: number; $transform: number }>`
  position: absolute;
  width: calc(100% + ${({ $offset = 30 }) => $offset * 2}px);
  height: calc(100% + ${({ $offset = 30 }) => $offset * 2}px);
  top: -${({ $offset = 30 }) => $offset}px;
  left: -${({ $offset = 30 }) => $offset}px;
  z-index: 0;
  transform: skew(
      ${({ $transform }) => $transform}deg,
      ${({ $transform }) => $transform}deg
    )
    rotate(${({ $transform }) => $transform}deg);
`;

const Tint = styled(Box)<{ $color?: HighlightColors }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(${({ $color = PINK }) => colorCssVariables[$color]});
  opacity: 0.15;
  pointer-events: none;
`;

type Props = {
  borderOffset?: number;
  color?: HighlightColors;
  glitchImage?: boolean;
  size?: LayoutProps['boxSize'];
  src: string;
};

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = err => {
      reject(err);
    };
    img.src = src;
  });
};

const WorkImage = ({
  borderOffset,
  color = PINK,
  glitchImage = true,
  size = '300px',
  src,
}: Props) => {
  const isMouseOver = useRef<boolean>(false);
  const imageElementRef = useRef<HTMLImageElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [initialSrc, setInitialSrc] = useState(src);
  const [imageData, setImageData] = useState<HTMLImageElement | null>(null);

  const randomBorderTransform = useMemo(() => Math.random() * 3 - 1.5, []);

  const handleMouseEnter = () => {
    if (!glitchImage) {
      return null;
    }
    isMouseOver.current = true;
    if (intervalRef?.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (imageData) {
        glitch({
          seed: Math.random() * 10 + 25,
          quality: Math.random() * 10 + 25,
        })
          .fromImage(imageData)
          .toDataURL()
          .then((dataUrl: any) => {
            if (imageElementRef.current && isMouseOver.current) {
              imageElementRef.current.src = dataUrl;
            }
          });
      }
    }, 50);
  };

  const handleMouseLeave = () => {
    if (!glitchImage) {
      return null;
    }
    if (intervalRef?.current) {
      clearInterval(intervalRef.current);
    }
    if (imageElementRef.current) {
      imageElementRef.current.src = initialSrc;
    }
    isMouseOver.current = false;
  };

  useEffect(() => {
    (async () => {
      const img = await loadImage(src);
      setImageData(img);
      setInitialSrc(src);
    })();
  }, [src]);

  return (
    <Box minWidth={size} position="relative" width={size} height={size}>
      <Tint $color={color} />
      <ChakraImage
        boxSize={size}
        filter={color === TRANSPARENT ? 'none' : 'grayscale(1)'}
        objectFit="cover"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseLeave}
        position="relative"
        ref={imageElementRef}
        style={{ aspectRatio: 1}}
        src={src}
        zIndex="1"
        width="100%"
      />
      <Border
        $offset={borderOffset}
        $transform={randomBorderTransform}
        bg="bodyDark"
      />
    </Box>
  );
};

export default WorkImage;
