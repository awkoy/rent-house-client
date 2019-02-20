import React, { Component } from "react";
import AddRoomForm from "../components/forms/AddRoomForm";
import { room } from "../api/index";

export default class Login extends Component {

  handleSubmit = (values) => {
    console.log('FORM-DATA', values);
    room.add(values);
  };

  render() {
    return (
      <div className="container">
        <AddRoomForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}