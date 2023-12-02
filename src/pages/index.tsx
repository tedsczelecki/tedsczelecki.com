import React from 'react';
import MainLayout from '../components/Layout/Main';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import HomepageHero from '../components/Hero/Homepage';
import ContentBox from '../components/Global/ContentBox';
import SectionTitle from '../components/Section/Title';
import VStack from '../components/Global/VStack';
import { GREEN, ORANGE, PINK, PURPLE, YELLOW } from '../constants';
import WorkList from '../components/Work/List';
import HStack from '../components/Global/HStack';
// @ts-ignore
import profileImage from '../images/profile.png';
import { graphql, navigate, PageProps } from 'gatsby';
// @ts-ignore
import homepageHero from '../images/homepage-hero.png';
import { RIGHT } from '../types';
import ContactForm from '../components/Contact/Form';
import BlogList from '../components/Blog/List';
import { SlArrowRight } from 'react-icons/sl';

const Homepage = ({ data }: PageProps<Queries.FeaturedProjectsQuery>) => (
  <MainLayout>
    <VStack gap={0}>
      <HomepageHero
        align={RIGHT}
        imageUrl={homepageHero}
        subTitle="Ted Sczelecki."
        title="Architecting and building things on the web."
      />
      <ContentBox
        as={VStack}
        gap="3rem"
        maxWidth="1000px"
        id="about"
        pt={{
          base: '4rem',
          md: '8rem',
        }}
      >
        <SectionTitle
          subTitle="Nothing is impossible.<br/>The only limitation is our imagination."
          title="About me"
          color={PURPLE}
        />
        <HStack
          alignItems="center"
          gap="8"
          flexDirection={{
            base: 'column',
            lg: 'row',
          }}
          maxWidth={{
            base: '550px',
            lg: '100%',
          }}
          m="0 auto"
        >
          <Box>
            <Text>
              Hey! I’m Ted. I have been building things on the web for nearly 15
              years. I started my career building flash sites (rip) at an
              ad agency, transitioned into javascript-heavy sites, and never looked
              back. Recently, I have worked with various startups building React
              interfaces and working with design and product teams to create clean, usable UIs.
              From time to time, I build (and actually finish) sites or apps
              where I teach myself new frameworks and hone my programming
              skills. In my latest projects, I am building serverless APIs while
              working on my own framework to kick-start the next idea.
            </Text>
          </Box>
          <Box minWidth="350px" maxWidth="350px" transform="translateY(-10px)">
            <Image src={profileImage} />
          </Box>
        </HStack>
      </ContentBox>

      <ContentBox
        as={VStack}
        gap="7rem"
        pt={{
          base: '4rem',
          md: '8rem',
        }}
      >
        <SectionTitle
          subTitle="Some of the things I have built"
          title="The Work"
        />
        <WorkList works={data.allMdx.nodes as Queries.Mdx[]} />
        <HStack justifyContent="center">
          <Button
            colorScheme={PINK.replace('.400', '')}
            onClick={() => navigate('/projects')}
            rightIcon={<SlArrowRight />}
            size="lg"
            variant="outline"
          >
            View all work
          </Button>
        </HStack>
      </ContentBox>

      <ContentBox
        as={VStack}
        gap={{
          base: '3rem',
          md: '7rem',
        }}
        id="blog"
        pt={{
          base: '4rem',
          md: '8rem',
        }}
      >
        <SectionTitle
          color={ORANGE}
          subTitle="I occasionally write things about&nbsp;coding "
          title="Stuff I say"
        />
        <BlogList />
        <HStack justifyContent="center">
          <Button
            colorScheme={ORANGE.replace('.400', '')}
            onClick={() =>
              window.open('https://medium.com/@ted.sczelecki', '_blank')
            }
            rightIcon={<SlArrowRight />}
            size="lg"
            variant="outline"
          >
            View all articles
          </Button>
        </HStack>
      </ContentBox>

      <ContentBox
        as={VStack}
        gap="10"
        id="contact"
        alignItems="center"
        pt={{
          base: '4rem',
          md: '8rem',
        }}
      >
        <SectionTitle
          color={YELLOW}
          subTitle="Have a question or something to say?"
          title="Get In Touch"
        />
        <ContactForm />
      </ContentBox>
    </VStack>
  </MainLayout>
);

export const pageQuery = graphql`
  query FeaturedProjects {
    allMdx(
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
  }
`;

export default Homepage;
