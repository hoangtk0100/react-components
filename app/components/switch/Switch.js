import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Switch.scss';

export const sizes = {
  small: 'rc-switch--small',
  large: 'rc-switch--large',
};

const Switch = ({ className, size, inputRef, ...otherProps }) => (
  <label className={cn('rc-switch', sizes[size], className)}>
    <input
      {...otherProps}
      ref={inputRef}
      className="rc-switch__checkbox"
      type="checkbox"
    />
    <span className="rc-switch__slider" />
  </label>
);

Switch.displayName = 'Switch';
Switch.propTypes = {
  inputRef: PropTypes.array,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  onChange: f => f,
};

export default Switch;
