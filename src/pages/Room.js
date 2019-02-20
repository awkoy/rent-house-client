import React, { Component } from "react";
import "./Room.sass";

export default class Room extends Component {
    render() {
        return (
            <div className="room">
                <div className="container">
                    <div className="room__wrapper">
                        <div className="room__main">
                            <div className="room__main__head">
                                <div className="room__main__head__date">4 дня назад, 16 февраля, 23:01</div>
                                <div className="room__main__head__title">1к квартира с террасой!</div>
                                <div className="room__main__head__metro">Житомирська, Іподром</div>
                            </div>
                            <div className="room__main__details">
                                <div className="room__main__details__list">
                                    <div className="room__main__details__item">
                                        <div className="room__main__details__value">1
                                            <span className="room__main__details__value--text">-к</span>
                                        </div>
                                        <div className="room__main__details__label">квартира
                                            <br/>10/10 этаж
                                        </div>
                                    </div>
                                    <div className="room__main__details__item">
                                        <div className="room__main__details__value">42
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
                                        <div className="room__main__details__value">Палец вверх картинка</div>
                                        <div className="room__main__details__label">Проверено</div>
                                    </div>
                                </div>
                            </div>
                            <div className="room__main__desc">
                                <p>Сдам однокомнатную квартиру 42 кв.м. + Терраса 25 кв.м.! Новострой в центре Вишневого. Долгосрочно. Шкаф, прихожая, встроенная кухня, холодильник, стиральная машина, бойлер, ТВ. Отличное месторасположение. Рядом «Новус», "Евразия", спортзал, аптеки, магазины, кофейни, остановка общественного транспорта. Можно заезжать уже сегодня ! Пишите, звоните!</p>
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
                        <div className="room__sidebar"></div>
                    </div>
                </div>
            </div>
        );
    }
} 