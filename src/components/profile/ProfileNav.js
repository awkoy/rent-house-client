import React from "react";
import { NavLink } from "react-router-dom";
import './ProfileNav.sass';


export default () => (
    <div className='profile-nav'>
        <div className="container">
            <div className="profile-nav__wrapper">
                <NavLink className="profile-nav__link" to="/profile/rooms">Мои обявления</NavLink>
                <NavLink className="profile-nav__link" to="/profile/history">История просмотров</NavLink>
                <NavLink className="profile-nav__link" to="/profile/favorites">Избранное</NavLink>
                <NavLink className="profile-nav__link" to="/profile/notifications">Оповещения</NavLink>
            </div>
        </div>
    </div>
);