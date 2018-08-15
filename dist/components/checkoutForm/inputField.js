var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

const InputField = field => React.createElement(
	'div',
	{ className: field.className },
	React.createElement(
		'label',
		{ htmlFor: field.id },
		field.label,
		field.meta.touched && field.meta.error && React.createElement(
			'span',
			{ className: 'error' },
			field.meta.error
		)
	),
	React.createElement('input', _extends({}, field.input, {
		placeholder: field.placeholder,
		type: field.type,
		id: field.id,
		className: field.meta.touched && field.meta.error ? 'invalid' : ''
	}))
);

export default InputField;