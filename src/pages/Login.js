import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogin } from "../store/user/actions";
import { error } from "../store/user/selectors";
import LoginForm from "../components/forms/LoginForm";

class Login extends Component {

  handleSubmit = async (values) => this.props.userLogin(values);

  render() {
    const { error } = this.props;

    return (
      <div className="container">
        <LoginForm onSubmit={this.handleSubmit} />
        {error}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: error(state)
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ userLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);