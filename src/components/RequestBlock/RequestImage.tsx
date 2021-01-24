import React from 'react';
import styles from './RequestBlock.module.scss';

export function RequestImage({image}) {
  let img = '';
  switch (image) {
    case 'vacationImg':
      img = '../../assets/vacationImg.png';
      break;
    case 'sickImg':
      img = '../../assets/sickImg.png';
      break;
    case 'ownExpenseImg':
      img = '../../assets/ownExpenseImg.png';
      break;
    default: ''
  };
  return (
    <div className={styles.reqBlock}>
       <img src={img}></img>
    </div>
  );
}
