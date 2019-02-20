import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomInput from './Field';
import { validate, warn } from './validation';

const AddRoomForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component={CustomInput}
            type="text"
          />
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field
            name="description"
            component={CustomInput}
            type="text"
          />
        </div>
      </div>
      <div>
        <label>Price</label>
        <div>
          <Field
            name="price"
            component={CustomInput}
            type="text"
          />
        </div>
      </div>
      <div>
        <label>Subway</label>
        <div>
          <Field
            name="subway"
            component={CustomInput}
            type="text"
          />
        </div>
      </div>
      <div>
        <label>Location</label>
        <div>
          <Field
            name="location"
            component={CustomInput}
            type="text"
          />
        </div>
      </div>
      <div>
        <label>Area</label>
        <div>
          <Field
            name="area"
            component={CustomInput}
            type="number"
          />
        </div>
      </div>
      <div>
        <label>Room Count</label>
        <div>
          <Field
            name="room_count"
            component={CustomInput}
            type="number"
          />
        </div>
      </div>
      <div>
        <label>Floor</label>
        <div>
          <Field
            name="floor"
            component={CustomInput}
            type="number"
          />
        </div>
      </div>
      <div>
        <label>Floor Count</label>
        <div>
          <Field
            name="floor_count"
            component={CustomInput}
            type="number"
          />
        </div>
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'room',
  validate, warn
})(AddRoomForm)