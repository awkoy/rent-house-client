import React, { Component } from "react";
import ProfileContent from "../components/profile/ProfileContent";
import ProfileNav from "../components/profile/ProfileNav";
import "./Profile.sass";
import {Redirect, Route, Switch} from "react-router-dom";

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="container">
                    <div className="profile__wrapper">
                        <ProfileNav/>
                        <Switch>
                            <Route path="/profile/:name" component={ProfileContent} />
                            <Redirect from="/profile" to="/profile/rooms" />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}