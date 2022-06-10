import React from 'react';

import styles from './MainContent.module.scss';

const MainContent = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>React App built from scratch</h1>
      <p className={styles.subtitle}>
        Project created via webpack with additional adding and setting up of eslint, prettier, stylelint, babel,
        typescript packages and webpack itself, etc.
      </p>
    </div>
  );
};

export default MainContent;
