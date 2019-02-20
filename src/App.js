import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/common/Header/Header";

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AddRoom from './pages/AddRoom';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/add-room" component={AddRoom} />
          <Route component={NotFound}/>
        </Switch>
      </>
    );
  }
}

export default App;
