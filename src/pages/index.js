import React, { PureComponent } from 'react';

import { MainLayout } from '../layouts';
import {
  About,
  Abilities,
  Contact,
  Hero,
  TheWork,
} from '../components/homepage-sections';

import './index.scss';

class Homepage extends PureComponent {

  render() {
    const {
      location
    } = this.props;
    return (
      <MainLayout location={location}>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Abilities />
        </section>
        <section id="the-work">
          <TheWork />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </MainLayout>
    )
  }
}

export default Homepage;
