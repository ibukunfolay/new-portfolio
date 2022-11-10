import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/ibukunfolay"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.github.com/ibukunfolay"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.twitter.com/ibukunfolay"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
      <a
        href="https://drive.google.com/file/d/1bUumDOVtnh1pWSBsdLziXtFrpewLJhde/view?usp=share_link"
        target="_blank"
        rel="noreferrer"
      >
        <HiDocumentText />
      </a>
    </div>
  );
};

export default SocialMedia;
