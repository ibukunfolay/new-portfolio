import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import './navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prev) => !prev);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>Ibukun Folay</h1>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          ),
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={(e) => handleOnClick(e)} />

        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={(e) => handleOnClick(e)} />
            </motion.span>
            <ul>
              {[
                'home',
                'about',
                'work',
                'skills',
                'testimonials',
                'contact',
              ].map((item) => (
                <li key={`${item}`}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
