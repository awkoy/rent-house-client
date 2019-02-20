import React, { Component } from "react";
import Title from "../components/Title";

export default class Home extends Component {

  titles = [
    {
      name: 'allo',
      age: '252'
    },
    {
      name: 'allo2',
      age: '251'
    },
    {
      name: 'allo3',
      age: '253'
    }
  ];

  allTitles = this.titles.map(el => <Title pidaras={el.name} age={el.age}/>)

  render() {
    return (
      <div className="container">
        {this.allTitles}
      </div>
    );
  }
}