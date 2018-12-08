import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Heading.scss';

const H1 = ({ className, ...otherProps }) => (
  <h1 {...otherProps} className={cn('rc-heading', className)} />
);

H1.displayName = 'H1';
H1.propTypes = {
  className: PropTypes.string,
};
H1.defaultProps = {};

export default H1;
