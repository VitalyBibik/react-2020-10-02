import React from 'react';

import Logo from './logo';
import CurrencySwitcher from './currency-switcher';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <CurrencySwitcher />
    </header>
  );
};

export default Header;
