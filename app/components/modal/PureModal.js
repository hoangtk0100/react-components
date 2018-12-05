import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/PureModal.scss';

import Icon from '../icon';

const sizes = Object.freeze({
  small: 'rc-modal--small',
  large: 'rc-modal--large',
  full: 'rc-modal--full',
});
const colors = Object.freeze({
  primary: 'rc-modal--primary',
  waring: 'rc-modal--waring',
  error: 'rc-modal--error',
  success: 'rc-modal--success',
});

const PureModal = ({
  className,
  size,
  color,
  closable,
  header,
  footer,
  children,
  onClose,
}) => (
  <div className={cn('rc-modal', sizes[size], colors[color], className)}>
    {closable && (
      <Icon icon="times-circle" className="rc-modal__close" onClick={onClose} />
    )}
    <div className="rc-modal__header">{header}</div>
    <div className="rc-modal__content">{children}</div>
    <div className="rc-modal__footer">{footer}</div>
  </div>
);

PureModal.displayName = 'PureModal';
PureModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(colors)),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.node,
  children: PropTypes.node,
};
PureModal.defaultProps = {
  onClose: f => f,
};

export default PureModal;
