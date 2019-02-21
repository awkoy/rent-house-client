import React, { Component } from "react";
import "./Rooms.sass";
import RoomItem from "../components/room/RoomItem";
import { roomApi } from "../api";

export default class Rooms extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const res = await roomApi.getList();

        this.setState({
            data: res.data.rooms
        })
    }

    render() {
        const { data } = this.state;
        const items = data.map(el => <RoomItem key={el._id} item={el}/>);
        
        return (
            <div className="container room-list">
                {items}
            </div>
        );
    }
}