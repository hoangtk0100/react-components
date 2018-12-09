import PureModal from './PureModal';
import Modal from './Modal';

import confirmModal from './Modal.confirm';

import clean from './clean';

Modal.Pure = PureModal;

Modal.confirm = confirmModal('confirm');
Modal.success = confirmModal('success');
Modal.warning = confirmModal('warning');
Modal.error = confirmModal('error');
Modal.info = confirmModal('info');
Modal.delete = confirmModal('delete');

Modal.clean = clean;

export default Modal;
export { PureModal };
