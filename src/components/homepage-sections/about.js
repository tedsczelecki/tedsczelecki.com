import React, { PureComponent } from 'react';

import { Title } from '../text';
import headshotImage from './images/headshot.jpg';

import './about.scss';

class About extends PureComponent {
  render() {

    return (
      <div className="about">
        <Title
          subTitle="A little about me"
          title="Hey!"
        />
        <div className="about__content">
          <div className="about__headshot">
            <img src={headshotImage} alt="Ted Sczelecki"/>
          </div>
          <div className="about__copy">
            <h3>Nothing is impossible. The only limitation is our imagination.</h3>
            <p>I absolutely love programming and have been working professionally in the industry for 10+ years. During that time I have build 3 full fledged SaaS products, worked on some of the biggest brands in Canada at advertising agencies and taught myself many other languages and frameworks in between. My favorite stack is Nodejs with postgres on the backend and React with Redux on the frontend. There are times where this stack hasn’t been ideal isn't ideal so I have always found the best language or framework for the job. In doing this I have built apps, tools and sites using: Angular/AngularJS, PHP/MySql, Android, Java, IOS and C#. On the creative side I am very well versed in Sketch, Illustrator and Photoshop.</p>
            <p>On the frontend, I have a passion to build out different UX flows and interfaces to see what works best. There is always a balance in showing just the right amount of content and giving the user adequate functionality/customization so that the user can access everything they need quickly. Getting user feedback is invaluable when building user facing products but knowing why they are asking for a feature is even more important.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
