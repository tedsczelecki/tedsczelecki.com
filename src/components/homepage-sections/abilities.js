import classNames from 'classnames';
import React, { PureComponent } from 'react';

import { ContentSection } from '../layout';
import {
  experience,
  totalYearsExperience
} from '../../constants/experience';

import './abilities.scss';

const Ability = ({
  skill,
  totalYears
}) => (
  <div className="ability">
    <div className="ability__label">
      <strong>{skill}</strong> - <span>{totalYears} Year{totalYears === 1 ? '' : 's'}</span>
    </div>
    <div className="ability__bar">
      <div
        className="ability__bar__indicator"
        style={{
          width: `${totalYears / totalYearsExperience * 100}%`
        }}
      />
    </div>
  </div>
)

class Abilities extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      groupsOpen: ['Frontend'],
    }

    this.handleGroupToggle = this.handleGroupToggle.bind(this);
  }

  handleGroupToggle(groupName) {
    const { groupsOpen } = this.state;
    const index = groupsOpen.indexOf(groupName);

    this.setState(() => ({
      groupsOpen: index === -1
        ? [ ...groupsOpen, groupName]
        : [
          ...groupsOpen.slice(0, index),
          ...groupsOpen.slice(index + 1),
        ]
    }))
  }

  render() {

    const {
      groupsOpen
    } = this.state;

    return (
      <div className="abilities__container">
        <ContentSection
          className="abilities"
          title="What I know"
          subTitle="Things I've taught myself over the years"
        >
          <div className="abilities__copy-container">
            <p className="abilities__copy">
              When I started my career, Flash was the biggest and baddest tech out there. Soon after, browsers and the internet became better and faster  and, well, we all know what that did to Flash. I went from building full interactive sites in Flash, to more content centric sites leaning heavily on Javascript (and then CSS) to handle the animations and interactivity. From there I started learning how the backend and servers work and the different ways they communicate with the frontend. I built out REST apis in PHP using MySQL and then moved onto building them with NodeJS using Mongo or Postgres.
            </p>
            <p>In addition to the web stacks Ive worked on, Ive built out native Android and IOS apps, built CLI tools/ job runners in Java and NodeJS and played around with countless libraries. Using the right tool for the job has been what what leads me down these many&nbsp;paths.</p>
          </div>
          <div className="abilities__skills">
            {Object.entries(experience).map(([group, skills]) => {
              const isGroupActive = groupsOpen.indexOf(group) !== -1;
              const groupContentClasses = classNames('abilities__group__content', {
                'abilities__group__content--open': isGroupActive
              });
              const groupTriggerClases = classNames('abilities__group__trigger', {
                'abilities__group__trigger--open': isGroupActive
              })
              const showYearsExperience = group === 'Frontend' || group === 'Backend';
              const yearsExperience = skills[0] && skills[0].totalYears;
              return (
                <div className="abilities__group">
                  <button
                    className={groupTriggerClases}
                    onClick={this.handleGroupToggle.bind(this, group)}
                  >
                    {group} {showYearsExperience && <span>- {yearsExperience} Year{yearsExperience === 1 ? '' : 's'} Experience</span> }
                  </button>
                  <div className={groupContentClasses}>
                    <div className="abilities__group__content__wrapper">
                      {skills.map((skill) =>  <Ability key={skill.skill} {...skill} />)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ContentSection>
      </div>
    )
  }
}

export default Abilities;
