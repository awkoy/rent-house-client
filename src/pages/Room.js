import React, { Component } from "react";
import "./Room.sass";
import { roomApi } from "../api";
import StickyBox from "react-sticky-box"

export default class Room extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        const res = await roomApi.getList();
        const room = res.data.rooms.filter(el => el._id === this.props.match.params.id);
        this.setState({
            data: room[0]
        });
    }

    render() {
        const {
            area,
            title,
            description,
            price,
            subway,
            location,
            room_count,
            floor,
            floor_count
        } = this.state.data;

        return (
            <div className="room">
                <div className="container">
                    <div className="room__wrapper">
                        <div className="room__main">
                            <div className="room__main__head">
                                <div className="room__main__head__date">4 дня назад, 16 февраля, 23:01</div>
                                <div className="room__main__head__title">{title}</div>
                                <div className="room__main__head__metro">{subway}</div>
                            </div>
                            <div className="room__main__details">
                                <div className="room__main__details__list">
                                    <div className="room__main__details__item">
                                        <div className="room__main__details__value">{room_count}
                                            <span className="room__main__details__value--text">-к</span>
                                        </div>
                                        <div className="room__main__details__label">квартира
                                            <br/>{floor}/{floor_count} этаж
                                        </div>
                                    </div>
                                    <div className="room__main__details__item">
                                        <div className="room__main__details__value">{area}
                                            <span className="room__main__details__value--text">м<sup>2</sup></span>
                                        </div>
                                        <div className="room__main__details__label">Площа квартири</div>
                                    </div>
                                    <div className="room__main__details__item">
                                        <div className="room__main__details__value">0
                                            <span className="room__main__details__value--text">%</span>
                                        </div>
                                        <div className="room__main__details__label">коммисия</div>
                                    </div>
                                    <div className="room__main__details__item">
                                        <div className="room__main__details__value">img</div>
                                        <div className="room__main__details__label">Проверено</div>
                                    </div>
                                </div>
                            </div>
                            <div className="room__main__desc">
                                <p>{description}</p>
                            </div>
                            <div className="room__main__features">
                                <div className="room__main__features__title">
                                    Зручності
                                </div>
                                <ul className="room__main__features__list">
                                    <li className="room__main__features__item">Балкон</li>
                                    <li className="room__main__features__item">Холодильник</li>
                                    <li className="room__main__features__item">Телевизор</li>
                                    <li className="room__main__features__item">Кондиционер</li>
                                    <li className="room__main__features__item">Пральна машина</li>
                                    <li className="room__main__features__item">Нагривач воды</li>
                                    <li className="room__main__features__item">Посудомойна машина</li>
                                    <li className="room__main__features__item">Автономне опалення</li>
                                </ul>
                            </div>
                            <div className="room__main__features">
                                <div className="room__main__features__title">
                                    Особенности
                                </div>
                                <ul className="room__main__features__list">
                                    <li className="room__main__features__item disabled">Подходит для семьи с ребенком</li>
                                    <li className="room__main__features__item disabled">Можно курить</li>
                                    <li className="room__main__features__item disabled">Можно с животными</li>
                                    <li className="room__main__features__item disabled">Подходит для мероприятий</li>
                                </ul>
                            </div>
                        </div>
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div className="room__sidebar">
                                <div className="room__sidebar__price">{price}
                                    <span className="room__sidebar__price--month">грн/месяц</span>
                                </div>
                                <a className="room__sidebar__contact-button">Телефон власника</a>
                                <a className="room__sidebar__favorite">В избранное</a>
                            </div>
                        </StickyBox>
                    </div>
                </div>
            </div>
        );
    }
} 