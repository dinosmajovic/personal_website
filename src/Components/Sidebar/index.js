import React from 'react'
import styles from './sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import SearchIcon from 'react-ionicons/lib/IosSearch';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <span className={styles.logo}>
        D.
      </span>
      <nav>
          <NavLink exact to='/' activeClassName={styles.active}>About</NavLink>
          <NavLink exact to='/projects' activeClassName={styles.active}>Projects</NavLink>
          <NavLink exact to='/skills' activeClassName={styles.active}>Skills</NavLink>
          <NavLink exact to='/contact' activeClassName={styles.active}>Contact</NavLink>
      </nav>
      <div className={styles.search}>
        <span className={styles.icon}><SearchIcon fontSize="1.25em" color="#757b89" /></span>
        <span className={styles.text}>search</span>
      </div>
    </div>
  )
}

export default Sidebar
