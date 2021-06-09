/* eslint-disable react/no-danger */
import React from 'react';
import classNames from 'classnames';
import formFieldType from '../../../types/components/common/form/formFieldType';

const FormField = ({
  id = 'field',
  labelText,
  placeholder = '',
  name = 'text',
  value,
  type = 'text',
  error = '',
  useFullEventObj = false,
  onChange,
  className = '',
}) => (
  <div className="form-field__group">
    <label htmlFor={id} className="form-field__label">
      {labelText && labelText}

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={classNames(`form-field__control ${className}`, {
            'form-field__control--error': !!error,
          })}
          onChange={
            useFullEventObj
              ? (e) => onChange(e)
              : (e) => onChange(e.target.name, e.target.value, e.target.type)
          }
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={classNames(`form-field__control ${className}`, {
            'form-field__control--error': !!error,
          })}
          onChange={
            useFullEventObj
              ? (e) => onChange(e)
              : (e) => onChange(e.target.name, e.target.value, e.target.type)
          }
        />
      )}
    </label>

    {error && (
      <span
        className="form-field__error"
        dangerouslySetInnerHTML={{ __html: error }}
      />
    )}
  </div>
);

FormField.propTypes = {
  ...formFieldType,
};

export default FormField;
