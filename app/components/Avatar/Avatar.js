import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Avatar.scss';

export const sizes = Object.freeze({
  small: 'rc-avatar--small',
  large: 'rc-avatar--large',
});

const Avatar = ({ className, src, alt, size }) => (
  <div className={cn('rc-avatar', sizes[size], className)}>
    <img src={src} alt={alt} />
  </div>
);

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([Object.keys(sizes)]),
    PropTypes.string,
    PropTypes.number,
  ]),
};
Avatar.defaultProps = {};

export default Avatar;
