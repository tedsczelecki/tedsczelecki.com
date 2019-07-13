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
      groupsOpen: [],
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
          subTitle="Things I've learnt over the years"
        >
          <div className="abilities__copy-container">
            <p className="abilities__copy">
              Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            </p>
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
