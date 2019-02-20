import React, { Component } from "react";
import LoginForm from "../components/forms/LoginForm";

export default class Login extends Component {

  handleSubmit = (values) => {
    console.log('FORM-DATA', values);
  };

  render() {
    return (
      <div className="container">
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}