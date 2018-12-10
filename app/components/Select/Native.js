import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Select.scss';

const Select = ({ className, selectRef, options, ...otherProps }) => (
  <select
    {...otherProps}
    className={cn('rc-select', className)}
    ref={selectRef}
  >
    {options.map(option => (
      <option key={option.key} value={option.value}>
        {option.text}
      </option>
    ))}
  </select>
);

Select.displayName = 'Select.Native';
Select.propTypes = {
  className: PropTypes.string,
  selectRef: PropTypes.any,
  options: PropTypes.arrayOf({
    key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.string,
    text: PropTypes.string,
  }),
};
Select.defaultProps = {
  options: [],
};

export default Select;
