import React from 'react';
import styles from './Body.module.scss';
import { LeftBlock } from '../LeftBlock';

export function Body (){

    return (
      <div className={styles.body}>
            <LeftBlock></LeftBlock>
      </div>
    );
  }
