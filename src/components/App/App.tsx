import React from 'react';
import '../../global/reset.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { Body } from '../Body';

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Body></Body>
     </BrowserRouter>
  );
}
