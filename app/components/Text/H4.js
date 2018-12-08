import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Heading.scss';

const H4 = ({ className, ...otherProps }) => (
  <h4 {...otherProps} className={cn('rc-heading', className)} />
);

H4.displayName = 'H4';
H4.propTypes = {
  className: PropTypes.string,
};
H4.defaultProps = {};

export default H4;
