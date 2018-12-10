/**
 * Core input
 * just one input, no div wrapper
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Textbox.scss';

export const sizes = Object.freeze({
  large: 'rc-textbox--large',
});

const Textbox = ({ className, size, htmlType, textboxRef, ...otherProps }) => (
  <input
    {...otherProps}
    ref={textboxRef}
    type={htmlType}
    className={cn('rc-textbox', sizes[size], className)}
  />
);

Textbox.displayName = 'Textbox';
Textbox.propTypes = {
  className: PropTypes.string,
  textboxRef: PropTypes.any,
  size: PropTypes.oneOf(Object.keys(sizes)),
  htmlType: PropTypes.oneOf(['text', 'password']),
};
Textbox.defaultProps = {
  htmlType: 'text',
};

export default Textbox;
