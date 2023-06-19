import React from 'react';
import styles from './style.module.scss';

const Layout = ({ children }) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}

export default Layout;