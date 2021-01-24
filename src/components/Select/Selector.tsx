import styles from './Selector.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';

import Select from 'react-select'

export function Selector(props) {

  const options = [
    { value: 'vacation', label: 'Vacation leave' },
    { value: 'sick', label: 'Sick leave' },
    { value: 'ownExpense', label: 'Own expense leave' }
  ];

  return ( <>
    <Select labelText={'New Request'} options = {options}></Select>
    </>
  );
}
