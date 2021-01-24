import React from 'react';
import {RequestImage} from './RequestImage'
import {Form} from '../FormRequest'
import styles from './RequestBlock.module.scss';

export function RequestBlock() {
  return (
    <div className={styles.reqBlock}>
<RequestImage image = {'vacationImg'}></RequestImage>
<Form></Form>
    </div>
  );
}
