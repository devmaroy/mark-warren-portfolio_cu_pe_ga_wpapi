import React from 'react';
import Button from '../Button';
import formButtonIconImg from '../../../images/icons/submit.svg';
import formType from '../../../types/components/common/form/formType';

const Form = ({
  className = '',
  children,
  showButton = true,
  showButtonIcon = false,
  buttonIcon = formButtonIconImg,
  buttonText = '',
  buttonDisabled = false,
  buttonClassName = '',
  buttonDisableShadow = false,
  buttonSize = 'md',
  method = 'GET',
  name = 'contact',
  onSubmit,
}) => (
  <form
    method={method}
    onSubmit={onSubmit}
    className={`form ${className}`}
    autoComplete="off"
  >
    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
    <input type="hidden" name="form-name" value={name} />
    <div hidden>
      <label htmlFor="bot-field">
        Don’t fill this out: <input name="bot-field" />
      </label>
    </div>

    {children}

    {showButton && (
      <div className="form__meta">
        <Button
          type="submit"
          iconImg={buttonIcon}
          showIcon={showButtonIcon}
          isDisabled={buttonDisabled}
          className={`form__button ${buttonClassName}`}
          disableShadow={buttonDisableShadow}
          size={buttonSize}
        >
          {buttonText}
        </Button>
      </div>
    )}
  </form>
);

Form.propTypes = {
  ...formType,
};

export default Form;
