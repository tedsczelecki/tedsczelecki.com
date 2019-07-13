import React, { PureComponent } from 'react';
import { Sidebar } from '../components/sidebar';

import './main-layout.scss';

class MainLayout extends PureComponent {

  render() {

    const {
      children,
      location
    } = this.props;

    return (
      <div className="main-layout">
        <div className="main-layout__sidebar">
          <Sidebar
            location={location}
          />
        </div>
        <div className="main-layout__content">
          {children}
        </div>
      </div>
    )
  }
}

export default MainLayout;
