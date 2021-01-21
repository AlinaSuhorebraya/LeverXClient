import React from 'react';
import '../../global/reset.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { LeftBlock } from '../LeftBlock';

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <LeftBlock></LeftBlock>
      {/*
      <Switch>
        <Route path={'/'} exact component={MainPage}></Route>
        <Route exact path={'/MedcentersList/'} component={MedcentersList}></Route>
        <Route exact path={'/MedicsList/'} component={MedicsList}></Route>
        <Route exact path={'/MedicPage/:id'} component={MedicPage}></Route>
        <Route exact path={'/ServicesPage/'} component={ServicesPage}></Route>
        <Route path={'/PersonalPage/'} component={PersonalPage}></Route>
        <Route path={'*'} component={NotFoundPage} />
      </Switch>
      <Footer></Footer> */}
    </BrowserRouter>
  );
}
