import React, { PureComponent } from 'react';

import { ContactForm } from '../contact';
import { ContentSection } from '../layout';

import './contact.scss';

class ContactSection extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="homepage-contact__container">
        <ContentSection
          className="homepage-contact"
          subTitle="Get in touch with me"
          title="Say Hello"
        >
          <div className="homepage-contact__message">

          </div>
          <div className="homepage-contact__form">
            <ContactForm />
          </div>
        </ContentSection>
      </div>
    )
  }
}

export default ContactSection;
