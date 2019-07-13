import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './title.scss';

class Title extends PureComponent {

  static propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    subTitle: '',
  }

  render() {

    const {
      subTitle,
      title,
    } = this.props;

    return (
      <h2 className="text__title">
        {title}
        {subTitle && <span>{subTitle}</span>}
      </h2>
    )
  }
}

export default Title;
