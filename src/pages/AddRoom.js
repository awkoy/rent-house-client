import React, { Component } from "react";
import AddRoomForm from "../components/forms/AddRoomForm";
import { roomApi } from "../api/index";
import './AddRoom.sass'

export default class Login extends Component {

  handleSubmit = (values) => {
    console.log('FORM-DATA', values);
    roomApi.add(values);
  };

  render() {
    return (
      <div className="addroom ">
        <div className="container">
          <div className="addroom__title">Разместите обьявление</div>
          <AddRoomForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}