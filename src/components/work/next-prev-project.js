import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import './next-prev-project.scss';

const formatLinkLabel = ({label}) => {
  if (!label) {
    return '';
  }
  const parts = label.split('-');
  return parts.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }).join(' ');
}

class NextPrevProject extends PureComponent {
  static propTypes = {
    nextProject: PropTypes.string,
    prevProject: PropTypes.string,
  }

  static defaultProps = {
    nextProject: null,
    prevProject: null,
  }

  render() {
    const {
      nextProject,
      prevProject,
    } = this.props;


    return (
      <div className="next-prev">
        {prevProject && (
          <Link
            className="next-prev__prev"
            to={`/work/${prevProject}`}
          >
            {formatLinkLabel({label:prevProject})}
            <span>Previous Project</span>
          </Link>
        )}
        {nextProject && (
          <Link
            className="next-prev__next"
            to={`/work/${nextProject}`}
          >
            {formatLinkLabel({label:nextProject})}
            <span>Next Project</span>
          </Link>
        )}
      </div>
    )
  }
}

export default NextPrevProject;
