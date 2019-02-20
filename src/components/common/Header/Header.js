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
          <Link to="/registration">Sign up</Link>
          <Link to="/login">Sign in</Link>
        </div>
    </div>
  </header>
);