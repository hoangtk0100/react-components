import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { isString } from 'lodash/fp';

import './style/Tooltip.scss';

const placements = Object.freeze({
  top: 'rc-tooltip--top',
  bottom: 'rc-tooltip--bottom',
  left: 'rc-tooltip--left',
  right: 'rc-tooltip--right',
  'top-left': 'rc-tooltip--top-left',
  'left-top': 'rc-tooltip--left-top',
  'top-right': 'rc-tooltip--top-right',
  'right-top': 'rc-tooltip--right-top',
  'bottom-left': 'rc-tooltip--bottom-left',
  'left-bottom': 'rc-tooltip--left-bottom',
  'bottom-right': 'rc-tooltip--bottom-right',
  'right-bottom': 'rc-tooltip--right-bottom',
});

const Tooltip = ({ className, title, children, placement }) => (
  <div className={cn('rc-tooltip', placements[placement], className)}>
    <div className="rc-tooltip__content">{children}</div>
    <div className="rc-tooltip__title">
      {isString(title) ? <span>{title}</span> : title}
    </div>
  </div>
);

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  placement: PropTypes.oneOf(Object.keys(placements)),
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.any,
};
Tooltip.defaultProps = {
  placement: 'top',
};

export default Tooltip;
