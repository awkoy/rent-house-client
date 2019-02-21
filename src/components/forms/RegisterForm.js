import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomInput from './Field';
import { validate, warn } from './validation';

const RegisterForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Электронная почта</label>
        <div>
          <Field
            name="email"
            component={CustomInput}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Пароль</label>
        <div>
          <Field
            name="password"
            component={CustomInput}
            type="text"
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <label>Повторите пароль</label>
        <div>
          <Field
            name="repassword"
            component={CustomInput}
            type="text"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="room__sidebar__contact-button">
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'register',
  validate,
  warn
})(RegisterForm)