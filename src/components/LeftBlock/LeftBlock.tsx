import React from 'react';
import { VDCard } from './VDCard';
import styles from './LeftBlock.module.scss';

export function LeftBlock() {
  return (
    <div className={styles.leftBlock}>
      <VDCard></VDCard>
    </div>
  );
}
