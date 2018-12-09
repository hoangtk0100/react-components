import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../Icon';
import './style/Alert.scss';

export const types = Object.freeze({
  success: 'rc-alert--success',
  info: 'rc-alert--info',
  warning: 'rc-alert--warning',
  error: 'rc-alert--error',
});
export const icons = Object.freeze({
  success: 'check',
  info: 'info',
  warning: 'exclamation',
  error: 'times',
});

class Alert extends React.PureComponent {
  state = {
    isShow: true,
  };

  onClosableClick = () =>
    this.setState({ isShow: false }, () => this.props.onClose());

  render() {
    if (!this.state.isShow) {
      return null;
    }

    const {
      className,
      message,
      description,
      type,
      children,
      closable,
      isHideIcon,
      ...otherProps
    } = this.props;

    return (
      <div
        {...otherProps}
        className={cn(
          'rc-alert',
          types[type],
          {
            'rc-alert--with-description': description,
            'rc-alert--with-no-icon': isHideIcon,
          },
          className,
        )}
      >
        {!isHideIcon && <Icon className="rc-alert__icon" icon={icons[type]} />}
        <span className="rc-alert__message">{message}</span>
        <span className="rc-alert__description">{description}</span>
        {closable && (
          <Icon
            className="rc-alert__closable-icon"
            icon="times"
            onClick={this.onClosableClick}
          />
        )}
        {children}
      </div>
    );
  }
}

Alert.displayName = 'Alert';
Alert.propTypes = {
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)),
  message: PropTypes.node.isRequired,
  description: PropTypes.node,
  children: PropTypes.node,
};
Alert.defaultProps = {
  type: 'info',
  closable: true,
  onClose: f => f,
};

export default Alert;
