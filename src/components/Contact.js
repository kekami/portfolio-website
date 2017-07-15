import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
          <h2>Give me a shout</h2>
          <h3>Would you like to get in touch? Share an awesome project you've been working on? Grab a coffee and chat about web development? Hit me up!</h3>
          <hr />

          <nav className="nav">
            <a className="nav__items" to="mailto:kevin.kamimura@live.com">
              <i className="fa fa-envelope" aria-hidden="true" />
              <h3>Email</h3>
            </a>
            <a className="nav__items" to="https://github.com/kekami">
              <i className="fa fa-github" aria-hidden="true" />
              <h3>GitHub</h3>
            </a>
            <a className="nav__items" to="https://www.linkedin.com/in/kevinkamimura/">
              <i className="fa fa-linkedin" aria-hidden="true" />
              <h3>LinkedIn</h3>
            </a>
            {/* <a className="nav__items" to="https://twitter.com/Kevin_Kamimura">
              <i className="fa fa-twitter" aria-hidden="true" />
              <h3>Twitter</h3>
            </a> */}
          </nav>
          
        </div>
      </div>
  )
}

export default Contact;