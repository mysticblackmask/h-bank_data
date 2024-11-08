import React from 'react';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.raisinHeader}>
      <div className={styles.container}>
        <img src="/banking-logo-weltsparen-2x.svg" alt="Raisin GmbH" />
      </div>
    </header>
  );
};

export default Header;
