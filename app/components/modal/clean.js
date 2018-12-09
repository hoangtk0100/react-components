import { canUseDOM } from '../utils';

const classes = Object.freeze({
  info: '.flag__rc-modal--info',
  success: '.flag__rc-modal--success',
  warning: '.flag__rc-modal--warning',
  error: '.flag__rc-modal--error',
  confirm: '.flag__rc-modal--confirm',
  delete: '.flag__rc-modal--delete',
  basis: '.rc-wrapped-modal',
});

/**
 * Remove Modal from DOM (expect PureModal)
 */
export default flag => {
  if (!canUseDOM) {
    return false;
  }

  if (flag) {
    // just remove flag
    return document
      .querySelectorAll(classes[flag])
      .forEach(elm => document.body.removeChild(elm));
  }

  // remove all
  document
    .querySelectorAll(Object.values(classes))
    .forEach(elm => document.body.removeChild(elm));

  return true;
};
