import PureModal from './PureModal';
import Modal from './Modal';

import confirmModal from './Modal.confirm';
import deleteModal from './Modal.delete';
import successModal from './Modal.success';
import warningModal from './Modal.warning';
import errorModal from './Modal.error';
import infoModal from './Modal.info';

import clean from './clean';

Modal.Pure = PureModal;

Modal.confirm = confirmModal;
Modal.success = successModal;
Modal.warning = warningModal;
Modal.error = errorModal;
Modal.info = infoModal;
Modal.delete = deleteModal;

Modal.clean = clean;

export default Modal;
export { PureModal };
