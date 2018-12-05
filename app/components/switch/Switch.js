import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Switch.scss';

const Switch = ({ className, ...otherProps }) => (
  <label className={cn('rc-switch', className)}>
    <input {...otherProps} className="rc-switch__checkbox" type="checkbox" />
    <span className="rc-switch__slider" />
  </label>
);

Switch.displayName = 'Switch';
Switch.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  onChange: f => f,
};

export default Switch;
