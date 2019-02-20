import React, { Component } from "react";
import LoginForm from "../components/forms/LoginForm";
import Title from "../components/Title";

export default class Login extends Component {

  handleSubmit = (values) => {
    console.log('FORM-DATA', values);
  };

  render() {
    return (
      <div className="container">
        <LoginForm onSubmit={this.handleSubmit} />
        <Title pidaras="gavno"  idiNahui={this.handleClick} modificator="red"/>
      </div>
    );
  }
}