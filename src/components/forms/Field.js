import React from "react";
import "./Field.sass";

export default ({ input, label, type, meta: { touched, error, warning } }) => (
	<div>
		<label>{label}</label>
		<input {...input} placeholder={label} type={type} className="default-field" />
		{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	</div>
);
