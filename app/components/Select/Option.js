import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Option = ({ className, value, text, render }) => (
  <div className={cn('rc-select__option rc-select-option', className)}>
    {render({ value, text })}
  </div>
);

Option.displayName = 'Select.Option';
Option.propTypes = {
  className: PropTypes.string,
  render: PropTypes.func,
  value: PropTypes.any,
  text: PropTypes.node,
};
Option.defaultProps = {
  render: ({ text }) => text,
};

export default Option;
