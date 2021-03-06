import React from "react";
import './RoomItem.sass';
import {Link} from "react-router-dom";

export default (props) => {
    const {
        area,
        title,
        description,
        price,
        subway,
        location,
        room_count
    } = props.item;

    return (
        <Link className="room-item" to={`room/${props.item._id}`}>
            <img className="room-item__img" alt="example-room"/>
            <div className="room-item__description">
                <div className="room-item__price">{price}</div>
                <div className="room-item__options">
                    <div className="room-item__options__main-info">
                        <div className="room-item__room-count">{room_count}</div>
                        <div className="room-item__size">{area}</div>
                        <div className="room-item__city">{location}</div>
                    </div>
                    <div className="room-item__text">{description}
                    </div>
                </div>
                <div className="room-item__location">{subway}</div>
            </div>
        </Link>
    )
}; 