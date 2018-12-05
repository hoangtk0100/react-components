import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Col.scss';

const spans = span => `rc-column--${span}`;

const Col = ({ className, span, children }) => (
  <div className={cn('rc-column', { [spans(span)]: span }, className)}>
    {children}
  </div>
);

Col.displayName = 'Col';
Col.propTypes = {
  span: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.any,
};
Col.defaultProps = {};

export default Col;
