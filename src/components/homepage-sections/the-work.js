import React, { PureComponent } from 'react';

import { ContentSection } from '../layout';
import { WorkList } from '../../components/work';

import './the-work.scss';

class TheWork extends PureComponent {
  render() {
    return (
      <ContentSection
        subTitle="Hand picked projects I've worked on"
        title="The Work"
        className="the-work"
      >
        <WorkList />
      </ContentSection>
    )
  }
}

export default TheWork;
