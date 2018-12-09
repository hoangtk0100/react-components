/* eslint-disable consistent-return */
import React from 'react';
import ReactDOM from 'react-dom';

import { canUseDOM } from '../utils';
import Modal from './Modal';

/**
 * Don't remove children, title from params because i don't want otherProps have them
 * and don't want using any lib or writting other function
 * If you realy wan't to pass eslint, you can using lodash/omit ot omit fp
 * const otherProps = _.omit(['children', 'title'], props);
 */
export default ({ className, message, children, title, ...otherProps }) => {
  if (!canUseDOM) {
    return null;
  }

  const defaultNode = document.createElement('div');

  // flag for Modal.clean('info');
  defaultNode.className = 'flag__rc-modal--info';
  document.body.appendChild(defaultNode);

  ReactDOM.render(
    <Modal
      {...otherProps}
      hideCancel
      defaultOpen
      className={className}
      renderJSNode={defaultNode}
    >
      {message}
    </Modal>,
    defaultNode,
  );
};
