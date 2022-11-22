import React from 'react';
import { graphql, useStaticQuery, Script } from 'gatsby';
import { useLocation } from '@reach/router';
// @ts-ignore
import defaultImage from '../../images/profile.png';

export type SeoProps = {
  description?: string | null;
  image?: string | null;
  title?: string | null;
};

type Props = SeoProps & {
  children: React.ReactNode;
};

export const SEO = ({ children, description, image, title }: Props) => {
  const { href } = useLocation();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = data.site.siteMetadata;

  const seo = {
    title: title
      ? `${title} | ${defaultTitle}`
      : `${defaultTitle} | Builder of all things on the web`,
    description: description || defaultDescription,
    image: `${siteUrl}${image ?? defaultImage}`,
    url: href,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};

export default SEO;
