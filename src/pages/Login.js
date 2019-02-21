import React, { Component } from "react";
import LoginForm from "../components/forms/LoginForm";
import { userApi } from "../api/index";

export default class Login extends Component {

  state = {
    result: ''
  };

  handleSubmit = async (values) => {
    console.log('FORM-DATA', values);
    const data = await userApi.login(values);

    const {
      token,
      user_info
    } = data.data;
    if (token) {
      localStorage.setItem("rent-app-user-token", token);
      localStorage.setItem("rent-app-user-info", user_info.email);
      this.props.history.push('/');

      return false;
    }

    this.setState({
      result: data.data
    })
  };

  render() {
    const { result } = this.state;

    return (
      <div className="container">
        <LoginForm onSubmit={this.handleSubmit} />
        {result}
      </div>
    );
  }
}