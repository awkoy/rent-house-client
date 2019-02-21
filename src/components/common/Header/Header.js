import React from "react";
import { Link } from "react-router-dom";
import './Header.sass';
import auth from "../../../helpers/auth";

export default () => {

  const logout = () => auth.logOut();
  const user = () => auth.user();
  const navList = auth.getToken() == null ? (
    <>
      <Link className="room__sidebar__contact-button" to="/registration">Зарегистрироваться</Link>
      <Link className="room__sidebar__contact-button" to="/login">Войти</Link>
    </>
    ) : (
    <>
      <span>{localStorage.getItem("rent-app-user-info")}</span>
      <Link className="room__sidebar__contact-button" to="/" onClick={logout}>Выйти</Link>
    </>);
  
  return (
    <header className='header'>
      <div className="container">
        <div className="header__logo">
          <Link to="/">Rent House</Link>
        </div>
        <div className="header__nav">
          {navList}
        </div>
      </div>
    </header>
  )
};