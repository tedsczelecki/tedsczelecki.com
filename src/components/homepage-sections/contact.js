import React, { PureComponent } from 'react';

import { ContactForm, SocialIcons } from '../contact';
import { ContentSection } from '../layout';

import './contact.scss';

class ContactSection extends PureComponent {
  render() {
    return (
      <div className="homepage-contact__container">
        <ContentSection
          className="homepage-contact"
          subTitle="Get in touch with me"
          title="Say Hello"
        >
          <div className="homepage-contact__message">
            <h3>Want to say hi?</h3>
            <p>Shoot me an email or <br/>Check me out on social</p>
            <SocialIcons
              fillColor="#000000"
            />
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
