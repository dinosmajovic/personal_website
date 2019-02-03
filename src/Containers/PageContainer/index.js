import React from 'react';
import styles from './pageContainer.module.scss'
import Sidebar from '../../Components/Sidebar';
import Footer from '../../Components/Footer';

const PageContainer = (props) => {
  return (
    <div>
      <Sidebar />
      <div className={styles.mainContent}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default PageContainer
