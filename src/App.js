import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/common/PrivateRoute";
import NoPrivateRoute from "./components/common/NoPrivateRoute";

import Header from "./components/common/Header/Header";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import AddRoom from './pages/AddRoom';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Login} />
          <NoPrivateRoute path="/login" component={Login} />
          <NoPrivateRoute path="/registration" component={Registration} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/room/:id" component={Room} />
          <PrivateRoute path="/add-room" component={AddRoom} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={NotFound}/>
        </Switch>
      </>
    );
  }
}

export default App;
