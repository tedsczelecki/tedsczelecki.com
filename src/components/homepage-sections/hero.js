import React, { PureComponent } from 'react';

import heroImage from './images/hero.jpg'

import './hero.scss';


class Hero extends PureComponent {

  render() {
    return (
      <div className="hero">
        <div className="hero__content">
          <div className="hero__content__title">
            Ted <span>Sczelecki</span>
          </div>

          <div className="hero__content__subtitle">
            <span>Fullstack developer</span> <span>Problem Solver</span> <span>Outdoors enthusiast</span>
          </div>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt=""/>
        </div>
      </div>
    )
  }
}

export default Hero;
