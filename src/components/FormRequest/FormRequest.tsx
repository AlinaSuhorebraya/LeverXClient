import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './LeftBlock.module.scss';
import {Selector} from '../Select'

export  function Form(props) {


  return (
    <form id='createForm' className='createForm'>
      <Selector formType={props.formType}  labelText={'New Request'} />
     
    </form>
  );
}


