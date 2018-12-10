/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Total.scss';
import { isValid, calculatePage } from './utils';

const calculate = ({ total, page, pageSize }) => {
  const pageCount = calculatePage({ total, pageSize });
  const isOKay = isValid({ pageCount, page });

  const from = isOKay ? (page - 1) * pageSize + 1 : 0;
  const to = isOKay ? page * pageSize : 0;

  return {
    total,
    from,
    to: to > total ? total : to,
  };
};

const Total = ({ className, render, ...otherProps }) => (
  <div className={cn('rc-pagination-total', className)}>
    {render(calculate(otherProps))}
  </div>
);

Total.displayName = 'Pagination.Total';
Total.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  render: PropTypes.func,
};
Total.defaultProps = {
  total: 0,
  render: total => `Total: ${total}`,
};

export default Total;
