import React from 'react';

import styles from './Header.module.scss';
import UserImg from '../../assets/user.png';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.logo}>Logo</h3>
      <img className={styles['user-img']} src={UserImg} alt='User image' />
    </div>
  );
};

export default Header;
