import React from "react";
import { Link } from "react-router-dom";
import './Header.sass';

export default () => (
  <header className='header'>
    <div className="container">
        <div className="header__logo">
          <Link to="/">Rent House</Link>
        </div>
        <div className="header__nav">
          <Link className="room__sidebar__contact-button" to="/registration">Зарегистрироваться</Link>
          <Link className="room__sidebar__contact-button" to="/login">Войти</Link>
        </div>
    </div>
  </header>
);