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
    
    const linkItems = links.map((el,i) => <Link className="room__sidebar__contact-button" key={i} to={el.path}>{el.name}</Link>);

    return (
      <div className="container">
        {linkItems}
      </div>
    );
  }
}