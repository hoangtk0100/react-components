/**
 * Core input
 * just one input, no div wrapper
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Textbox.Pure.scss';

export const sizes = Object.freeze({
  small: 'rc-pure-textbox--small',
  large: 'rc-pure-textbox--large',
});

const PureTextbox = ({
  className,
  size,
  htmlType,
  textboxRef,
  ...otherProps
}) => (
  <input
    {...otherProps}
    ref={textboxRef}
    type={htmlType}
    className={cn('rc-pure-textbox', sizes[size], className)}
  />
);

PureTextbox.displayName = 'Textbox.Pure';
PureTextbox.propTypes = {
  className: PropTypes.string,
  textboxRef: PropTypes.any,
  size: PropTypes.oneOf(Object.keys(sizes)),
  htmlType: PropTypes.oneOf(['text', 'password']),
};
PureTextbox.defaultProps = {
  htmlType: 'text',
};

export default PureTextbox;
