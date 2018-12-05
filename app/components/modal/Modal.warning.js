/* eslint-disable consistent-return */
import React from 'react';
import ReactDOM from 'react-dom';

import { canUseDOM } from '../utils';
import Modal from './Modal';

let defaultNode = null;

if (canUseDOM) {
  defaultNode = document.createElement('div');
  document.body.appendChild(defaultNode);
}

export default ({ className, ...otherProps }) => {
  if (!canUseDOM) {
    return null;
  }

  ReactDOM.render(
    <Modal hideCancel defaultOpen className={className} {...otherProps} />,
    defaultNode,
  );
};
