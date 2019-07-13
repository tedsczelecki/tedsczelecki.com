import React, { PureComponent } from 'react';

import './form.scss';

class ContactForm extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    }

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(evt) {
    const {
      target: {
        name,
        value
      }
    } = evt;

    this.setState(() => ({
      [name]: value
    }))
  }

  render() {
    const {
      name,
      email,
      message
    } = this.state;

    return (
      <div className="contact-form">
        <form name="contact" method="POST" data-netlify="true">
          <div className="contact-form__item">
            <input
              required
              className="contact-form__input"
              name="name"
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="contact-form__item">
            <input
              required
              className="contact-form__input"
              name="email"
              placeholder="Your Email"
              type="text"
              value={email}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="contact-form__item">
            <textarea
              required
              className="contact-form__textarea"
              name="message"
              placeholder="Have something to say"
              onChange={this.handleFieldChange}
            >{message}</textarea>
          </div>
          <div className="contact-form__actions">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm;
