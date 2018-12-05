import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Tooltip.scss';

const Tooltip = ({ className, title, children }) => (
  <div className={cn('rc-tooltip', className)}>
    <div className="rc-tooltip__content">{children}</div>
    <div className="rc-tooltip__title">{title}</div>
  </div>
);

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  children: PropTypes.any,
};
Tooltip.defaultProps = {};

export default Tooltip;
