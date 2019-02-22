import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import './Header.sass';
import { isAuth, userData } from "../../../store/user/selectors";
import { userLogout } from "../../../store/user/actions";

const Header = ({ isAuth, userData, userLogout }) => {

  const navList = isAuth ? (
    <>
      <span>{userData.email}</span>
      <span className="room__sidebar__contact-button" onClick={userLogout} >Выйти</span>
    </>
  ) : (
    <>
      <Link className="room__sidebar__contact-button" to="/registration">Зарегистрироваться</Link>
      <Link className="room__sidebar__contact-button" to="/login">Войти</Link>
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

const mapStateToProps = state => {
  return {
    isAuth: isAuth(state),
    userData: userData(state)
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);