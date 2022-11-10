import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './footer.scss';

const Footer = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      });
  };

  return (
    <>
      <h2 className="head-text">Get in touch</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ibukunfolay@gmail.com" className="p-text">
            ibukunfolay@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +234 (050) 2221-4214" className="p-text">
            +234 (050) 2221-4214
          </a>
        </div>
      </div>
      {!submitted ? (
        <form ref={form} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              required={true}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="message"
              value={message}
              required={true}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-text"
            />
          </div>
          <button className="p-text" type="button" onClick={Submit}>
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thanks for reaching out. <br />
            I'll reply soon.
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
