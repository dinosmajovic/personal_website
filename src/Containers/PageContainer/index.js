import React from 'react';
import styles from './pageContainer.module.scss'
import Sidebar from '../../Components/Sidebar';

const PageContainer = (props) => {
  return (
    <div>
      <Sidebar />
      <div className={styles.mainContent}>
        {props.children}
      </div>
    </div>
  )
}

export default PageContainer
