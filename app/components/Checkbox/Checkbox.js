import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Checkbox.scss';

export const sizes = Object.freeze({
  small: 'rc-checkbox--small',
  large: 'rc-checkbox--large',
});

const Checkbox = ({ className, size, checkboxRef, ...otherProps }) => (
  <label className={cn('rc-checkbox', sizes[size], className)}>
    <input
      {...otherProps}
      ref={checkboxRef}
      className="rc-checkbox__input-checkbox"
      type="checkbox"
    />
    <span className="rc-checkbox__checkbox" />
  </label>
);

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  checkboxRef: PropTypes.array,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  onChange: f => f,
};

export default Checkbox;
