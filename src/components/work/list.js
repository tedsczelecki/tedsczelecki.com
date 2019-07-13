import React, { PureComponent } from 'react';
import { homepageWork } from '../../constants/homepage'
import { Link } from 'gatsby'

import './list.scss';

class WorkList  extends PureComponent {

  constructor(props) {
    super(props);

    this.hoverTextRef = React.createRef();

    this.state = {
      hoverSubtext: '',
      hoverText: '',
      hoverTextShowing: false,
    }

    this.handleItemOut = this.handleItemOut.bind(this);

    this.handleItemOver = this.handleItemOver.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleItemOut() {
    this.setState(() => ({
      hoverTextShowing: false,
    }), () => document.removeEventListener('mousemove', this.handleMouseMove) )
  }

  handleItemOver({subTitle, title}, evt) {
    this.setState(() => ({
      hoverSubtext: subTitle,
      hoverText: title,
      hoverTextShowing: true
    }), () => document.addEventListener('mousemove', this.handleMouseMove) )

  }

  handleMouseMove(evt) {
    if (this.hoverTextRef.current) {
      this.hoverTextRef.current.style.top = `${evt.clientY + 30}px`;
      this.hoverTextRef.current.style.left = `${evt.clientX}px`;
    }
  }

  render() {

    const {
      hoverSubtext,
      hoverText,
      hoverTextShowing,
    } = this.state;

    return (
      <div className="work-list">
        <div className="work-list__grid">
          {homepageWork.map(({subTitle, thumb, title, slug, ...rest}) => {
            return (
              <div
                className="work-list__grid__item"
                onMouseOver={this.handleItemOver.bind(this, {subTitle, title})}
                onMouseOut={this.handleItemOut}
              >
                <Link to={`/work/${slug}`}>
                  <img src={thumb} alt={title}/>
                </Link>
              </div>
            )
          })}
        </div>
        { hoverTextShowing && (
          <div className="work-list__text-hover" ref={this.hoverTextRef}>
            <span
              className="work-list__text-hover__title"
              dangerouslySetInnerHTML={{__html: hoverText.replace(/ /g, '&nbsp;')}}
            />
            { hoverSubtext && (
              <span
                className="work-list__text-hover__sub-title"
                dangerouslySetInnerHTML={{__html: hoverSubtext.replace(/ /g, '&nbsp;')}}
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

export default WorkList;
