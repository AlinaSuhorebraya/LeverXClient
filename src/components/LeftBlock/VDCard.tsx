import React from 'react';
import styles from './VDCard.module.scss';

export function VDCard() {
  return (
    <div className={styles.vdCard}>
      <p className={styles.vd}>Vacation Days</p>
      <div className={styles.daysContainer}>
        <p>Available</p>
        <p>147</p>
      </div>
      <div className = {styles.details}><span className = {styles.icon}>»</span><span>more details</span></div>
    </div>
  );
}
