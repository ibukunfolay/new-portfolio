import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './about.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

const abouts = [
  {
    title: 'Software Development',
    description: 'Top shelf developer',
    imgUrl: images.about01,
  },
  {
    title: 'Software Development',
    description: 'Top shelf developer',
    imgUrl: images.about02,
  },
  {
    title: 'Software Development',
    description: 'Top shelf developer',
    imgUrl: images.about03,
  },
  {
    title: 'Software Development',
    description: 'Top shelf developer',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <div id="about">
      <h2 className="head-text">
        High Quality <span>Code</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
