import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Textbox = ({ className, htmlType, textboxRef, ...otherProps }) => (
  <input
    {...otherProps}
    ref={textboxRef}
    type={htmlType}
    className={cn('rc-textbox', className)}
  />
);

Textbox.displayName = 'Textbox';
Textbox.propTypes = {
  className: PropTypes.string,
  textboxRef: PropTypes.any,
  htmlType: PropTypes.oneOf(['text', 'password']),
};
Textbox.defaultProps = {
  htmlType: 'text',
};

export default Textbox;
