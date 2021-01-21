import React from 'react';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <p className={styles.p1}>LEVERX GROUP</p>
        <p className={styles.p2}>EMPLOYEE SERVICES</p>
      </div>
      <nav>
        <p>AdressBook</p>
        <p className={styles.actionClick}>Leave Requests</p>
      </nav>
      <div className={styles.nav}>
        <div className={styles.dispatch}></div>
        <div className={styles.profile}></div>
        <div className={styles.logout}></div>
      </div>
    </header>
  );
}
