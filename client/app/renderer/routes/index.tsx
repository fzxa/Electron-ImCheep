import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';
import Counter from '../containers/counter';
import NavGroup from '../components/NavGroup';
// import NavGroup from '../components/NavGroup';
// import SidebarGroup from '../components/SidebarGroup';
import Chat from '../components/Chat';

export default function Routes() {
  return (
    <Fragment>

      {/*<Chat />*/}
      <NavGroup />
      <Switch>
        <Route path="/counter" component={Counter}></Route>
        <Route path="/chat" compontne={Chat}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Fragment>
  );
}
