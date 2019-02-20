import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomInput from './Field';
import { validate, warn } from './validation';

const LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
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
        <label>Password</label>
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
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login',
  validate, warn
})(LoginForm)