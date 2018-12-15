import { canUseDOM } from '../utils';

/**
 * Remove Alert from DOM
 */
export default () =>
  canUseDOM &&
  document.querySelectorAll('.rc-alert-anywhere').forEach(alertAnyWhereNode => {
    while (alertAnyWhereNode.firstChild) {
      alertAnyWhereNode.removeChild(alertAnyWhereNode.firstChild);
    }
  });
