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
        lg: 'repeat(2, minmax(250px, 1fr))',
      }}
      gridGap="4rem"
      justifyContent="center"
      width="100%"
      maxWidth={{
        base: "400px",
        lg: "1000px"
      }}
      mx="auto"
    >
      {data?.slice(0,2)?.map(({ title, thumbnail, description, link }) => {
        let htmlOutput: string | null = description;

        if (typeof document !== 'undefined') {
          const div = document.createElement('div');
          div.innerHTML = description;
          const p = div.querySelectorAll('p');
          if (p?.[0]) {
            const text = p[0].textContent;
            const truncatedText = text?.split(' ').slice(0, 35).join(' ');
            if (text && truncatedText) {
              const isTruncated = truncatedText?.length < text?.length;
              htmlOutput = `${truncatedText}${isTruncated ? '...' : ''}`
            }
          }
        }

        return (
          <VStack width="100%">
            <Box as="a" href={link} target="_blank" minHeight={{ base: 'auto', lg :"108px"}}>
              <Heading size="lg">{title}</Heading>
            </Box>
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

            <Text flex="1">{htmlOutput}</Text>
            <HStack width="100%" justifyContent="flex-end">
              <Button
                onClick={() => window.open(link)}
                colorScheme={ORANGE.replace('.400', '')}
                variant="ghost"
              >
                Keep reading
              </Button>
            </HStack>
          </VStack>
        );
      })}
    </Box>
  );
};

export default BlogList;
