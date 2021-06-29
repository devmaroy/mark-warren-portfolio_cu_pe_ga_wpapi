/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';
import DynamicLink from './DynamicLink';
import buttonType from '../../types/components/common/buttonType';
import buttonIcon from '../../images/icons/arrow-right.svg';

const Button = ({
  to = '/',
  variant = 'primary',
  size = 'md',
  type = 'link',
  iconImg = buttonIcon,
  showIcon = true,
  isDisabled = false,
  disableShadow = false,
  className = '',
  onClick,
  children,
}) => (
  <>
    {type === 'link' ? (
      <DynamicLink
        to={to}
        className={`button button--${variant} button--${size} ${className}`}
      >
        <div className="button__content">
          {showIcon && (
            <span className="button__icon">
              <img src={iconImg} alt="icon" />
            </span>
          )}
          {children}
        </div>
      </DynamicLink>
    ) : (
      <button
        type={type}
        disabled={type !== 'link' && isDisabled}
        onClick={onClick}
        className={classNames(
          `button button--${variant} button--${size} ${className}`,
          { 'button--disable-shadow': disableShadow },
        )}
      >
        <div className="button__content">
          {showIcon && (
            <span className="button__icon">
              <img src={iconImg} alt="icon" />
            </span>
          )}
          {children}
        </div>
      </button>
    )}
  </>
);

Button.propTypes = {
  ...buttonType,
};

export default Button;
