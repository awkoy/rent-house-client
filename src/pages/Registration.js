import React, { Component } from "react";
import RegisterForm from "../components/forms/RegisterForm";
import { userApi } from "../api/index";

export default class Registration extends Component {

  state = {
    result: ''
  };

  handleSubmit = async (values) => {
    console.log('FORM-DATA', values);
    const data = await userApi.add(values);

    this.setState({
      result: data.data
    })
  };

  render() {
    const { result } = this.state;

    return (
      <div className="container">
        <RegisterForm onSubmit={this.handleSubmit} />
        {result}
      </div>
    );
  }
}