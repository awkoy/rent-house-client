import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    const links = [
      {
        name: "Список квартир",
        path: "rooms"
      },
      {
        name: "Добавить квартиру",
        path: "add-room"
      }
    ];

    return (
      <div className="container">
        {links.map(el => <Link className="room__sidebar__contact-button" to={el.path}>{el.name}</Link>)}
      </div>
    );
  }
}