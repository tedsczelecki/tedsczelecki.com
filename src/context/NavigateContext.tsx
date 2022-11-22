import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { globalHistory, useLocation } from '@reach/router';

const glitch = require('glitch-canvas');

type ContextData = {};

const GlitchImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: none;
`;

const Main = styled.main``;

export const PageTransitionContext = React.createContext<ContextData>({});

const animationDuration = 0.3;

type Props = {
  children: React.ReactNode;
};

const getGlitchImage = (data: any): Promise<string> =>
  new Promise((resolve, reject) => {
    glitch({
      seed: Math.random() * 20 + 10,
      quality: Math.random() * 30 + 5,
    })
      .fromImage(data)
      .toDataURL()
      .then((dataUrl: any) => {
        resolve(dataUrl);
      });
  });

export const PageTransitionWrapper = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animating = useRef<boolean>(false);
  const canvasImage = useRef<HTMLImageElement | null>(null);
  const glitchImageRef = useRef<HTMLImageElement | null>(null);
  const transitionOnGlitchCreated = useRef<boolean>(false);
  const glitchImage = useRef<any>(false);
  const { hash: currentHash, pathname: currentPathname } = useLocation();

  const navigateToSection = (hash: string, delay?: number) => {
    setTimeout(() => {
      if (location.hash && containerRef?.current) {
        const elem = containerRef.current.querySelector(hash);

        if (elem) {
          elem.scrollIntoView();
        }
      }
    }, delay ?? animationDuration * 1000 + 250);
  };

  useEffect(() => {
    globalHistory.listen(({ action, location }) => {
      const { hash: newHash, pathname: newPathname } = location;
      startTransition();

      if (currentPathname === newPathname) {
        if (newHash) {
          navigateToSection(newHash);
        } else {
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 300);
        }

        setTimeout(() => {
          stopRotateGlitchImages();
        }, 400);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // const viewportTag = document.querySelectorAll(
      //   'meta[name="viewport"]',
      // )?.[0];
      // const currentViewport =
      //   viewportTag?.getAttribute('content') ??
      //   'width=device-width, initial-scale=1, shrink-to-fit=no';
      //
      // if (viewportTag) {
      //   viewportTag.setAttribute('content', `width=${window.innerWidth}px`);
      // }

      html2canvas(document.body, {
        windowWidth: 400,
      }).then(canvas => {
        const img = new Image();
        img.onload = async () => {
          // if (viewportTag) {
          //   viewportTag.setAttribute('content', currentViewport);
          // }
          glitchImage.current = await getGlitchImage(img);
          canvasImage.current = img;

          if (transitionOnGlitchCreated.current) {
            startTransition();
          }
        };

        img.src = canvas.toDataURL();
      });
    }, animationDuration * 1000 + 500);
  }, []);

  useEffect(() => {
    if (currentHash) {
      navigateToSection(currentHash, 500);
    }
  }, []);

  const startTransition = () => {
    if (!glitchImageRef?.current || !glitchImage.current) {
      transitionOnGlitchCreated.current = true;
      return;
    }

    glitchImageRef.current.style.display = 'block';
    glitchImageRef.current.src = glitchImage.current;
    animating.current = true;
    rotateGlitchImages();
  };

  const rotateGlitchImages = () => {
    setTimeout(async () => {
      try {
        if (
          canvasImage.current &&
          glitchImageRef.current &&
          animating.current
        ) {
          const data = await getGlitchImage(canvasImage.current);
          glitchImageRef.current.src = data;
          rotateGlitchImages();
        }
      } catch (e) {
        // ignore error when trying to set the last glitch image before the component is unmounted
      }
    }, 75);
  };

  const stopRotateGlitchImages = () => {
    animating.current = false;
    if (glitchImageRef.current) {
      glitchImageRef.current.style.display = 'none';
    }
  };

  const value = {};

  return (
    <Main ref={containerRef}>
      <PageTransitionContext.Provider value={value}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            mass: 0.35,
            stiffness: 75,
            duration: animationDuration,
          }}
        >
          <>
            <GlitchImage ref={glitchImageRef} alt="" />
            {children}
          </>
        </motion.div>
      </PageTransitionContext.Provider>
    </Main>
  );
};
