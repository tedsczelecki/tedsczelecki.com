import React from 'react';
import { Badge, Box, Image } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import VStack from '../../components/Global/VStack';
import HStack from '../../components/Global/HStack';
import ContentLayout from '../../components/Layout/ContentLayout';
import ContentBox from '../../components/Global/ContentBox';
import WorkImage from '../../components/Work/Image';
import { PINK, tagColors, TRANSPARENT } from '../../constants';
import HomepageHero from '../../components/Hero/Homepage';

const ProjectPage = ({
  data,
  children,
}: PageProps<Queries.ProjectPageQuery>) => {
  const { description, images, subTitle, tags, title } =
    data?.mdx?.frontmatter ?? {};

  console.log('IMAGES', data?.mdx?.frontmatter);
  return (
    <ContentLayout
      title={`${title} ${subTitle ? `- ${subTitle}` : ''}`}
      description={description}
    >
      <VStack
        gap={{
          base: '1rem',
          sm: '3rem',
        }}
      >
        <HomepageHero
          imageUrl={images?.[0]?.publicURL ?? ''}
          rotateImage={false}
          subTitle={subTitle}
          title={title ?? ''}
        />
        <ContentBox maxWidth="800px">
          <VStack>
            <VStack gap="7">{children}</VStack>
            {tags && (
              <HStack>
                {tags?.map(tag => (
                  <Badge
                    colorScheme={tagColors?.[tag ?? ''] ?? PINK}
                    key={tag}
                    fontSize="lg"
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>
            )}
          </VStack>
        </ContentBox>
        <ContentBox as={VStack} gap="0">
          <VStack px="8" width="100%" gap="8rem">
            {images
              ?.slice(1)
              .map(
                images =>
                  images?.publicURL && (
                    <WorkImage
                      color={TRANSPARENT}
                      glitchImage={false}
                      key={images.publicURL}
                      src={images.publicURL}
                      size="100%"
                    />
                  ),
              )}
          </VStack>
        </ContentBox>
      </VStack>
    </ContentLayout>
  );
};

export const pageQuery = graphql`
  query ProjectPage($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date
        description
        images {
          publicURL
        }
        subTitle
        tags
        title
      }
    }
  }
`;

export default ProjectPage;
