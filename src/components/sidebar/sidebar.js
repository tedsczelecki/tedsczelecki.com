import anime from 'animejs';
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import { SocialIcons } from '../../components/contact';

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
      selected: this.getSelectedByURL()
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

  getSelectedByURL() {

    const location = this.props.location || window.location;

    if (location && location.hash) {
      return this.props.location.hash.substr(1);
    }

    if (location && location.pathname.indexOf('/work') === 0) {
      return 'work';
    }

    return null;
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

    if (!this.props.location || !this.props.location.pathname) {
      return true;
    }

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

    if (this.isPage({pathname: '/'})) {
      const topScroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = window.innerHeight / 4;
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
  }

  isPage({ pathname, exactMatch = true }) {
    const location = this.props.location || window.location;
    return exactMatch
      ? location.pathname === pathname
      : location.pathname.indexOf(pathname) === 0
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

    const isWorkPage = this.isPage({
      exactMatch: false,
      pathname: '/work',
    });

    const isMobile = window.matchMedia("(max-width: 980px)").matches

    return (
      <div className="sidebar">
        <div className="sidebar__title">
          <Link to="/">
            Ted Sczelecki
          </Link>

          { isWorkPage && isMobile && (
              <Link
              className="sidebar__back"
              to="/#the-work"
            >
              <span>All Work</span>
            </Link>
          )}
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
        <div className="sidebar__social-icons">
          <SocialIcons />
        </div>
      </div>
    )
  }
}

export default Sidebar;
