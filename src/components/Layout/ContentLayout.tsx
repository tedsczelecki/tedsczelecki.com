import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../Mdx/MDXComponents';
import MainLayout from './Main';
import ContentBox from '../Global/ContentBox';
import { SeoProps } from '../Global/Seo';

type Props = SeoProps & {
  children: React.ReactNode;
  gap?: string;
};

const ContentLayout = ({ children, gap, ...seoProps }: Props) => {
  return (
    <MainLayout gap={gap} {...seoProps}>
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </MainLayout>
  );
};

export default ContentLayout;
