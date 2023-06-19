import clsx from 'clsx';
import React from 'react';
import styles from './heading.module.scss';

function Heading({ level = 1, children, className }) {

  if (level === 1) {
    return (
      <h1
        className={clsx(styles.heading, className)}
      >
        {children}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2
        className={clsx(styles.heading, className, styles.h2Heading)}
      >
        {children}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3
        className={clsx(styles.heading, className, styles.h3Heading)}
      >
        {children}
      </h3>
    );
  }
}

export default Heading;
