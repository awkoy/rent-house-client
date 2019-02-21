import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomInput from './Field';
import { validate, warn } from './validation';
import './AddRoomForm.sass';

const AddRoomForm = props => {
  const { handleSubmit } = props;

  return (
    <form className="addroom-form" onSubmit={handleSubmit}>
      <div className="addroom-form__item">
        <label className="addroom-form__item__label">Название размещения</label>
        <Field
          name="title"
          component={CustomInput}
          type="text"
        />
      </div>
      <div className="addroom-form__item">
        <label className="addroom-form__item__label">Описание обьекта</label>
        <Field
          name="description"
          component={CustomInput}
          type="text"
        />
      </div>
      <div className="addroom-form__item">
        <label className="addroom-form__item__label">Цена обьекта</label>
        <Field
          name="price"
          component={CustomInput}
          type="text"
        />
      </div>
      <div className="addroom-form__item">
        <label className="addroom-form__item__label">Станция метро</label>
        <Field
          name="subway"
          component={CustomInput}
          type="text"
        />
      </div>
      <div className="addroom-form__item">
        <label className="addroom-form__item__label">Город</label>
        <Field
          name="location"
          component={CustomInput}
          type="text"
        />
      </div>
      <div className="addroom-form__item">
        <label className="addroom-form__item__label">Площадь, м<sup>2</sup></label>
        <Field
          name="area"
          component={CustomInput}
          type="number"
        />
      </div>
      <div className="addroom-form__item">
        <label className="addroom-form__item__label">Количество комнат</label>
        <Field
          className="addroom-form__item__field"
          name="room_count"
          component={CustomInput}
          type="number"
        />
      </div>
      <div className="addroom-form__item">
        <label className="addroom-form__item__label">Этаж</label>
        <Field
          name="floor"
          component={CustomInput}
          type="number"
        />
      </div>
      <div className="addroom-form__item">
        <label className="addroom-form__item__label">Этажей в доме</label>
        <Field
          name="floor_count"
          component={CustomInput}
          type="number"
        />
      </div>
      <div>
        <button type="submit" className="room__sidebar__contact-button">
          Отправить на проверку
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'room',
  validate, warn
})(AddRoomForm)