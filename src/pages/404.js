import React, { PureComponent } from 'react';

import './404.scss';

class FourOhFour extends PureComponent {

  render() {

    return (
      <div className="four-oh-four">
        <h1>404</h1>
        <p>Resource or page not found</p>
      </div>
    )
  }
}

export default FourOhFour;
