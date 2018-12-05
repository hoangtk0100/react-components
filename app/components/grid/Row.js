import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Row.scss';

const aligns = Object.freeze({
  start: 'rc-row--align-start',
  center: 'rc-row--align-center',
  end: 'rc-row--align-end',
});
const justifys = Object.freeze({
  start: 'rc-row--justify-start',
  center: 'rc-row--justify-center',
  end: 'rc-row--justify-end',
  around: 'rc-row--justify-around',
  between: 'rc-row--justify-between',
});

const Row = ({ className, align, justify, children }) => (
  <div className={cn('rc-row', aligns[align], justifys[justify], className)}>
    {children}
  </div>
);

Row.displayName = 'Row';
Row.propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(Object.keys(aligns)),
  justify: PropTypes.oneOf(Object.keys(justifys)),
  children: PropTypes.any,
};
Row.defaultProps = {};

export default Row;
