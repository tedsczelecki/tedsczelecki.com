import React from 'react';
import { HighlightColors, Work } from '../../types';
import WorkCard from './Card';
import VStack from '../Global/VStack';
import styled from '@emotion/styled';

const Wrapper = styled(VStack)`
  max-width: 1000px;
  width: calc(100% - 3rem);
  margin: 0 auto;
  align-items: center;

  @media (min-width: 48em) {
    > div:nth-of-type(even) {
      flex-direction: row-reverse;

      .actions {
        justify-content: flex-start;
      }
    }
  }
`;

type Props = {
  color?: HighlightColors;
  works: Queries.Mdx[];
};

const WorkList = ({ color, works }: Props) => {
  return (
    <Wrapper gap="8rem">
      {works?.map(({ frontmatter }) => {
        return (
          <WorkCard
            color={color}
            key={frontmatter?.title}
            work={frontmatter as Work}
          />
        );
      })}
    </Wrapper>
  );
};

export default WorkList;
