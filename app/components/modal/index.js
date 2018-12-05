import PureModal from './PureModal';
import Modal from './Modal';

import confirm from './Modal.confirm';
import success from './Modal.success';
import warning from './Modal.warning';
import error from './Modal.error';
import info from './Modal.info';

Modal.confirm = confirm;
Modal.success = success;
Modal.warning = warning;
Modal.error = error;
Modal.info = info;

export default Modal;
export { PureModal, confirm, success, warning, error, info };
