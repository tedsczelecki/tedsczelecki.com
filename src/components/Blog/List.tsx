import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Blog } from '../../types';
import { Box, Button, Heading, Skeleton, Text } from '@chakra-ui/react';
import VStack from '../Global/VStack';
import { Link, navigate } from 'gatsby';
import WorkImage from '../Work/Image';
import HStack from '../Global/HStack';
import { ORANGE } from '../../constants';

const getBlogArticles = () =>
  axios
    .get<Blog>(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ted.sczelecki`,
    )
    .then(resp => resp.data.items);

const BlogList = () => {
  const { data, isLoading } = useQuery(['blog'], () => getBlogArticles());
  if (isLoading) {
    return (
      <HStack width="100%" justifyContent="center">
        <Skeleton>
          <Box height="400px" width="400px" />
        </Skeleton>
        <Skeleton>
          <Box height="400px" width="400px" />
        </Skeleton>
        <Skeleton>
          <Box height="400px" width="400px" />
        </Skeleton>
      </HStack>
    );
  }
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        base: '1fr',
        md: 'repeat(auto-fit, 300px)',
      }}
      gridGap="4rem"
      justifyContent="center"
      width="100%"
    >
      {data?.map(({ title, thumbnail, description, link }) => {
        let htmlOutput: string | null = description;

        if (typeof document !== 'undefined') {
          const div = document.createElement('div');
          div.innerHTML = description;
          const p = div.querySelectorAll('p');
          if (p?.[0]) {
            htmlOutput = p[0].textContent;
          }
        }

        return (
          <VStack width="100%">
            <a href={link} target="_blank">
              <Heading size="lg">{title}</Heading>
            </a>
            <Box p="1rem">
              <a href={link} target="_blank">
                <WorkImage
                  borderOffset={20}
                  color={ORANGE}
                  glitchImage={false}
                  size="100%"
                  src={thumbnail}
                />
              </a>
            </Box>

            <Text>{htmlOutput}</Text>
            <Button
              onClick={() => window.open(link)}
              colorScheme={ORANGE.replace('.400', '')}
              variant="outline"
            >
              Keep reading
            </Button>
          </VStack>
        );
      })}
    </Box>
  );
};

export default BlogList;
