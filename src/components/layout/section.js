import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { Title } from '../../components/text';

import './section.scss';

class ContentSection extends PureComponent {

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    subTitle: '',
    title: '',
  }

  render() {

    const {
      children,
      className,
      subTitle,
      title,
    } = this.props

    return (
      <div className="content-section">
        {title && (
          <div className="content-section__title">
            <Title
              subTitle={subTitle}
              title={title}
            />
          </div>
        )}
        <div className={`${className} content-section__content`}>
          {children}
        </div>
      </div>
    )
  }
}

export default ContentSection;
