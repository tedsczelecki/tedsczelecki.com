import React from 'react';
import VStack from '../components/Global/VStack';
import HomepageHero from '../components/Hero/Homepage';
import ContentLayout from '../components/Layout/ContentLayout';
import { graphql, PageProps } from 'gatsby';
import SectionTitle from '../components/Section/Title';
import WorkList from '../components/Work/List';
import ContentBox from '../components/Global/ContentBox';
import WorkGrid from '../components/Work/Grid';
import { GREEN, ORANGE, YELLOW } from '../constants';
// @ts-ignore
import workHero from '../images/work-hero.png';

const Projects = ({ data }: PageProps<Queries.WorkPageQuery>) => {
  console.log('data.featured.nodes', data.featured.nodes);
  return (
    <ContentLayout
      gap="0"
      title="Work"
      description="A collection of websites and apps that I have built"
    >
      <VStack
        gap={{
          base: '4rem',
          lg: '8rem',
        }}
      >
        <HomepageHero
          imageUrl={workHero}
          subTitle="The work"
          title="A collection of things that I have built"
        />
        <ContentBox>
          <SectionTitle
            color={ORANGE}
            subTitle="The latest and greatest"
            title="Featured work"
            mb="5rem"
          />
          <WorkList
            color={ORANGE}
            works={data.featured.nodes as Queries.Mdx[]}
          />
        </ContentBox>

        <ContentBox>
          <SectionTitle
            color={GREEN}
            subTitle="Some older projects that are worth a share"
            title="Honorable mentions"
            mb="5rem"
          />
          <WorkGrid work={data.all.nodes as Queries.Mdx[]} />
        </ContentBox>
      </VStack>
    </ContentLayout>
  );
};

export const pageQuery = graphql`
  query WorkPage {
    featured: allMdx(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          excerpt
          thumb {
            publicURL
          }
          slug
          title
        }
      }
    }
    all: allMdx(
      filter: { frontmatter: { featured: { eq: false } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          excerpt
          thumb {
            publicURL
          }
          slug
          title
        }
      }
    }
  }
`;

export default Projects;
