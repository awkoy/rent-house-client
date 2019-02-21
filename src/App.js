import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Header from "./components/common/Header/Header";

import Home from './pages/Home';
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
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/room/:id" component={Room} />
          <Route path="/add-room" component={AddRoom} />
          <Route component={NotFound}/>
        </Switch>
      </>
    );
  }
}

export default App;
