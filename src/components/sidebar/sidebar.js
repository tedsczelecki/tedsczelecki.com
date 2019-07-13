import anime from 'animejs';
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import './sidebar.scss';

class Sidebar extends PureComponent {

  constructor(props) {
    super(props);

    this.homeRef = React.createRef()
    this.aboutRef = React.createRef()
    this.experienceRef = React.createRef();
    this.workRef = React.createRef();
    this.contactRef = React.createRef();

    this.scrolling = false;

    this.anchorRefs = {
      about: this.aboutRef,
      experience: this.experienceRef,
      work: this.workRef,
      contact: this.contactRef
  }

    this.state = {
      selected: this.props.location && this.props.location.hash
        ? this.props.location.hash.substr(1)
        : null
    }


    this.handleClick = this.handleClick.bind(this);
    this.handlePageScroll = this.handlePageScroll.bind(this);
  }

  componentDidMount() {
    if (this.state.selected) {
      this.scrollToElement({
        duration: 1,
        id: this.state.selected,
      })
    }

    window.addEventListener('scroll', this.handlePageScroll);
  }

  getElementTop(id) {
    const contentElem = document.getElementById(id);

    if (!contentElem) {
      return null;
    }
    const topScroll = window.pageYOffset || document.documentElement.scrollTop;
    const bounds = contentElem.getBoundingClientRect();

    return bounds.top + topScroll;

  }

  async handleClick(evt) {

    const {
      target: {
        href
      }
    } = evt;

    if (this.props.location.pathname !== '/') {
      return true;
    }
    evt.preventDefault();

    const id = href.split('#')[1];
    await this.scrollToElement({
      id
    })

    const {
      origin,
      pathname
    } = this.props.location;
    document.location.replace(`${origin}${pathname}#${id}`)
  }

  handlePageScroll(evt) {
    const topScroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = 100;
    let selected = null;
    Object.entries(this.anchorRefs).forEach(([refName, ref]) => {
      const elem = ref.current;
      if (elem) {
        const id = elem.href.split('#')[1];
        const top = offset + this.getElementTop(id) - window.innerHeight;
        if (top < topScroll) {
          selected = refName;
        }
      }
    })

    this.setState(() => ({
      selected
    }))
  }

  scrollToElement({
    duration = 500,
    id,
  }) {
    return new Promise((resolve) => {
      const scrollTop = this.getElementTop(id);
      anime({
        targets: window.document.scrollingElement || window.document.body || window.document.documentElement,
        scrollTop,
        duration,
        easing: 'easeInOutQuad',
        complete: resolve
      });
    })
  }

  render() {
    const {
      selected
    } = this.state;

    return (
      <div className="sidebar">
        <div className="sidebar__title">
          Ted Sczelecki
        </div>
        <nav className="sidebar__nav">
          <span>
            <Link
              className={!selected ? 'sidebar__nav__selected' : ''}
              ref={this.homeRef} to="/"
              onClick={this.handleClick}
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              className={selected === 'about' ? 'sidebar__nav__selected' : ''}
              ref={this.aboutRef}
              to="/#about"
              onClick={this.handleClick}
            >
              About
            </Link>
          </span>
          <span>
            <Link
              className={selected === 'experience' ? 'sidebar__nav__selected' : ''}
              ref={this.experienceRef}
              to="/#experience"
              onClick={this.handleClick}
            >
              Experience
            </Link>
          </span>
          <span>
            <Link
              className={selected === 'work' ? 'sidebar__nav__selected' : ''}
              ref={this.workRef}
              to="/#the-work"
              onClick={this.handleClick}
            >
              The Work
            </Link>
          </span>
          <span>
            <Link
              className={selected === 'contact' ? 'sidebar__nav__selected' : ''}
              ref={this.contactRef}
              to="/#contact"
              onClick={this.handleClick}
            >
              Contact
             </Link>
          </span>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
