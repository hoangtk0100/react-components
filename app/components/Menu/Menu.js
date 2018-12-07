import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Menu = ({ className, children }) => (
  <div className={cn('rc-menu', className)}>{children}</div>
);

Menu.displayName = 'Menu';
Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Menu.defaultProps = {};

export default Menu;
