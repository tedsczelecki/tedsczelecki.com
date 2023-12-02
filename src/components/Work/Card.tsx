import React from 'react';
import { HighlightColors, Work } from '../../types';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import WorkImage from './Image';
import VStack from '../Global/VStack';
import HStack from '../Global/HStack';
import { PINK } from '../../constants';
import { Link, navigate } from 'gatsby';

type Props = {
  color?: HighlightColors;
  work: Work | null;
};

const WorkCard = ({ color = PINK, work }: Props) => {
  if (!work) {
    return null;
  }
  const { excerpt, thumb, slug, title } = work;
  return (
    <HStack
      width="100%"
      alignItems="flex-start"
      gap="14"
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
      maxWidth={{
        base: '100%',
        sm: '400px',
        md: '100%',
      }}
      ml={{
        base: '-0.5rem',
        sm: '0',
      }}
    >
      {thumb?.[0]?.publicURL && (
        <Link to={`/projects/${slug}`} aria-label={`Read more about ${title}`}>
          <WorkImage
            alt={`${title} thumbnail`}
            color={color}
            src={thumb[0].publicURL}
            size={{
              base: '100%',
              sm: '400px',
              md: '300px',
            }}
          />
        </Link>
      )}
      <VStack
        flex="1"
        justifyContent="flex-start"
        height="100%"
        ml={{
          base: '-1rem',
          sm: '0',
        }}
      >
        <VStack>
          <Heading size="lg">{title}</Heading>
          <Box
            as={VStack}
            dangerouslySetInnerHTML={{ __html: excerpt ?? '' }}
          />
        </VStack>
        <HStack
          justifyContent={{
            base: 'flex-start',
            md: 'flex-end',
          }}
          width="100%"
          className="actions"
        >
          <Button
            as={Link}
            aria-label={`Read more about ${title}`}
            to={`/projects/${slug}`}
            colorScheme={color.replace('.400', '')}
            variant="ghost"
          >
            Read more
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default WorkCard;
