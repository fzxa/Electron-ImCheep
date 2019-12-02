import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';
import Counter from '../containers/counter';
// import NavGroup from '../components/NavGroup';
import NavGroup from '../components/NavGroup';
// import SidebarGroup from '../components/SidebarGroup';

import SessionChat from '../containers/session';
import Chat from '../components/Chat';
// import SidebarGroup from '../components/SidebarGroup';

import Organization from '../containers/organization';

export default function Routes() {
  return (
    <Fragment>

      <NavGroup />
      <Switch>
        <Route path="/counter" component={Counter}></Route>
        <Route path="/chat" compontne={Chat}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path='/box' component={SessionChat} />
        <Route path='/organization' ccomponentom={Organization} />
      </Switch>
    </Fragment>
  );
}
