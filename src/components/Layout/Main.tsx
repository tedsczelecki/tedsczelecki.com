import React, { useEffect, useRef } from 'react';
import Header from '../Global/Header';
import VStack from '../Global/VStack';
import { PageTransitionWrapper } from '../../context/NavigateContext';
import { useLocation } from '@reach/router';
import ContentBox from '../Global/ContentBox';
import Footer from '../Global/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SEO, SeoProps } from '../Global/Seo';
import { Box } from '@chakra-ui/react';

type Props = SeoProps & {
  children: React.ReactNode;
  gap?: string;
};

export const queryClient = new QueryClient();

const MainLayout = ({ children, gap = '0', ...seoProps }: Props) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      let topScroll = 0;
      if (location.hash && containerRef?.current) {
        const elem = containerRef.current.querySelector(location.hash);
        if (elem) {
          topScroll = elem.getBoundingClientRect().top - 50;
        }
      }

      window.scrollTo(0, topScroll);
    }, 10);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <PageTransitionWrapper>
        <SEO {...seoProps}>
          <VStack minHeight="100vh" gap={gap} ref={containerRef}>
            <Header />
            <Box overflow="hidden" margin="0 auto">
              {children}
            </Box>
            <Footer />
          </VStack>
        </SEO>
      </PageTransitionWrapper>
    </QueryClientProvider>
  );
};

export default MainLayout;
