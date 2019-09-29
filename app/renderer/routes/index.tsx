import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';
import Counter from '../containers/counter';
// import NavBar from '../components/NavBar';
import NavGroup from '../components/NavGroup';
import SidebarGroup from '../components/SidebarGroup';

export default function Routes() {
  return (
    <Fragment>
      <NavGroup />
      <SidebarGroup />
      <Switch>
        <Route path="/counter" component={Counter}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Fragment>
  );
}
