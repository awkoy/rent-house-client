import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import { isAuth } from "../../store/user/selectors";

const NoPrivateRoute = ({ component: Component, isAuth, ...rest }) => (  
  <Route {...rest} render={props => (
    !isAuth ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
        }}
      />
    )
  )} />
);

const mapStateToProps = state => {
  return {
    isAuth: isAuth(state)
  };
};

export default connect(mapStateToProps)(NoPrivateRoute);