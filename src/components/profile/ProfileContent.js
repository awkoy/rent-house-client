import React from "react";
import { Switch, Route } from "react-router-dom";
import MyRooms from "./MyRooms";
import MyHistory from "./MyHistory";
import MyFavorites from "./MyFavorites";
import MyNotifications from "./MyNotifications";


export default () => (
    <header className='profile-content'>
        <div className="container">
            <Switch>
                <Route path="/profile/rooms" component={MyRooms} />
                <Route path="/profile/history" component={MyHistory} />
                <Route path="/profile/favorites" component={MyFavorites} />
                <Route path="/profile/notifications" component={MyNotifications} />
            </Switch>
        </div>
    </header>
);