import React, { Component } from "react";
import RegisterForm from "../components/forms/RegisterForm";
import { user } from "../api/index";

export default class Registration extends Component {

  handleSubmit = (values) => {
    console.log('FORM-DATA', values);
    user.add(values)
  };

  render() {
    return (
      <div className="container">
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}