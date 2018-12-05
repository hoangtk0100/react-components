import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import fp from 'lodash/fp';

import Portal from '../Portal';
import PureModal from './PureModal';
import Button from '../Button';
import { canUseDOM } from '../utils';
import './style/Modal.scss';

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
    if (!canUseDOM || !this.state.localOpen) {
      return null;
    }

    const isHasFooter = 'footer' in this.props;
    const {
      header,
      footer,
      onClose,
      onOK,
      open,
      defaultOpen,
      cancelText,
      OKText,
      propsCancel,
      propsOK,
      ...otherProps
    } = this.props;

    const cnCancel = propsCancel.className;
    const otherPropsCancel = fp.omit('className')(propsCancel);

    return (
      <Portal node={nodeRender}>
        <div className="rc-wrapped-modal">
          <PureModal
            {...otherProps}
            header={header}
            onClose={onClose}
            footer={
              isHasFooter ? (
                footer
              ) : (
                <span className="flex justify-end">
                  <Button
                    className={cn('mr-1', cnCancel)}
                    onClick={this.handleLocalClose}
                    {...otherPropsCancel}
                  >
                    {cancelText}
                  </Button>
                  <Button
                    color="primary"
                    onClick={this.handleLocalOK}
                    {...propsOK}
                  >
                    {OKText}
                  </Button>
                </span>
              )
            }
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
  propsCancel: PropTypes.object,
  propsOK: PropTypes.object,
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
};
Modal.defaultProps = {
  cancelText: 'Cancel',
  OKText: 'OK',
  propsCancel: {},
  propsOK: {},
  onClose: f => f,
  onOK: f => f,
};

export default Modal;
