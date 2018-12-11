import { canUseDOM } from '../utils';

const classes = Object.freeze({
  info: '.flag__rc-modal-confirm',
  success: '.flag__rc-modal-confirm',
  warning: '.flag__rc-modal-confirm',
  error: '.flag__rc-modal-confirm',
  confirm: '.flag__rc-modal-confirm',
  delete: '.flag__rc-modal-confirm',
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
