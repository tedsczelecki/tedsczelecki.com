import React, { PureComponent } from 'react';

import { ContentSection } from '../layout';
import { WorkList } from '../../components/work';

import './the-work.scss';

class TheWork extends PureComponent {
  render() {
    return (
      <div className="the-work">
        <ContentSection
          subTitle="Hand picked projects I've built"
          title="The Work"
          className="the-work"
        >
          <WorkList />
        </ContentSection>
      </div>
    )
  }
}

export default TheWork;
