import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../portal';
import PureModal from './PureModal';
import { canUseDOM } from '../utils';

import './style/Modal.scss';
import Button from '../button';

let nodeRender = null;

if (canUseDOM) {
  nodeRender = document.getElementsByTagName('body')[0]; // eslint-disable-line prefer-destructuring
}

class Modal extends React.PureComponent {
  isControlled = typeof this.props.open === 'boolean';

  defaultOpenState = this.isControlled
    ? this.props.open
    : this.props.defaultOpen;

  state = {
    localOpen: this.defaultOpenState,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ localOpen: nextProps.open });
    }
  }

  handleLocalClose = () =>
    this.isControlled
      ? this.props.onClose()
      : this.setState({ localOpen: false });

  handleLocalOK = () => {
    const isOK = !this.props.onOK();
    if (isOK && this.isControlled) {
      return this.handleLocalClose();
    }
    if (isOK) {
      return this.setState({ localOpen: false });
    }
    return null;
  };

  render() {
    const {
      footer,
      onClose,
      onOK,
      open,
      defaultOpen,
      cancelText,
      OKText,
      ...otherProps
    } = this.props;

    if (!this.state.localOpen) {
      return null;
    }

    const defaultFooter = (
      <span className="flex justify-end">
        <Button className="mr-1" onClick={this.handleLocalClose}>
          {cancelText}
        </Button>
        <Button color="primary" onClick={this.handleLocalOK}>
          {OKText}
        </Button>
      </span>
    );

    return (
      <Portal node={nodeRender}>
        <div className="rc-wrapped-modal">
          <PureModal
            {...otherProps}
            onClose={onClose}
            footer={footer || defaultFooter}
          />
        </div>
      </Portal>
    );
  }
}

Modal.displayName = 'Modal';
Modal.propTypes = {
  cancelText: PropTypes.string,
  OKText: PropTypes.string,
  onClose: PropTypes.func,
  onOK: PropTypes.func,
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
};
Modal.defaultProps = {
  cancelText: 'Cancel',
  OKText: 'OK',
  onClose: f => f,
  onOK: f => f,
};

export default Modal;
