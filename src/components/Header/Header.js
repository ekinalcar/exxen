import React from 'react';
import logo from '../../assets/images/Exxen.png';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Exxen" className={styles.logo} />
    </header>
  );
};

export default Header;
