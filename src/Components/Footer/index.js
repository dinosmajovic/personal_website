import React from 'react'
import styles from './footer.module.scss';
import GithubIcon from 'react-ionicons/lib/LogoGithub';
import TwitterIcon from 'react-ionicons/lib/LogoTwitter';
import LinkedinIcon from 'react-ionicons/lib/LogoLinkedin';
import MoreIcon from 'react-ionicons/lib/IosMore';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <span>Follow me</span>
        <a href="https://github.com/dinosmajovic" target="_blank" rel="noopener noreferrer"><GithubIcon fontSize="1.5rem" color="#7f7f7f" /></a>
        <a href="https://twitter.com/smajovicdino" target="_blank" rel="noopener noreferrer"><TwitterIcon fontSize="1.5rem" color="#7f7f7f" /></a>
        <a href="https://www.linkedin.com/in/smajovicdino" target="_blank" rel="noopener noreferrer"><LinkedinIcon fontSize="1.5rem" color="#7f7f7f" /></a>
        <MoreIcon className={styles.moreButton} fontSize="1.75rem" color="#7f7f7f" />
    </div>
  )
}

export default Footer
