import React from 'react';
import { HighlightColors, Work } from '../../types';
import { Box, Button, Heading } from '@chakra-ui/react';
import WorkImage from './Image';
import VStack from '../Global/VStack';
import { Link, navigate } from 'gatsby';
import { GREEN } from '../../constants';

type Props = {
  color?: HighlightColors;
  work: Queries.Mdx[];
};

const WorkGrid = ({ color = GREEN, work }: Props) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, 300px)"
      gridGap="4rem"
      justifyContent="center"
    >
      {work.map(({ frontmatter }) => {
        const { slug, thumb, title } = frontmatter ?? {};
        const href = `/projects/${slug}`;
        return (
          <VStack width="100%">
            <Box py="1rem">
              <Link to={href}>
                <WorkImage
                  borderOffset={20}
                  color={color}
                  size="300px"
                  src={thumb?.[0]?.publicURL ?? ''}
                />
              </Link>
            </Box>
            <Heading size="md">{title}</Heading>
            <Button
              onClick={() => navigate(href)}
              colorScheme={color.replace('.400', '')}
              variant="outline"
            >
              Read more
            </Button>
          </VStack>
        );
      })}
    </Box>
  );
};

export default WorkGrid;
