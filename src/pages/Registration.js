import React, { Component } from "react";
import RegisterForm from "../components/forms/RegisterForm";
import { userApi } from "../api/index";

export default class Registration extends Component {

  handleSubmit = (values) => {
    console.log('FORM-DATA', values);
    userApi.add(values)
  };

  render() {
    return (
      <div className="container">
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}