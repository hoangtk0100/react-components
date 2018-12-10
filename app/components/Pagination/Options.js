/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Options.scss';

const Options = ({ className, options, optionsRef, ...otherProps }) => (
  <select
    ref={optionsRef}
    className={cn('rc-pagination-options', className)}
    {...otherProps}
  >
    {options.map((option, idx) => (
      <option key={idx} value={option}>
        {option} / page
      </option>
    ))}
  </select>
);

Options.displayName = 'Pagination.Options';
Options.propTypes = {
  className: PropTypes.string,
  optionsRef: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.number),
};
Options.defaultProps = {
  options: [5, 10, 20, 30, 40, 50],
};

export default Options;
