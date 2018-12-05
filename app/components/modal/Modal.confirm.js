/* eslint-disable consistent-return */
import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import cn from 'classnames';

import { canUseDOM } from '../utils';

import Modal from './Modal';

const confirm = ({ className, ...otherProps }) => {
  if (!canUseDOM) {
    return null;
  }

  const defaultNode = document.createElement('div');
  document.body.appendChild(defaultNode);

  ReactDOM.render(
    <Modal defaultOpen className={className} {...otherProps} />,
    defaultNode,
  );
};

confirm.displayName = 'Modal.confirm';

export default confirm;
