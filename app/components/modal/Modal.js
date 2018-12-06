import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { omit, isBoolean } from 'lodash/fp';

import Portal from '../Portal';
import PureModal from './PureModal';
import Button from '../Button';
import { canUseDOM } from '../utils';

import '../style/utilities/flexbox';
import '../style/utilities/spacing.scss';
import './style/Modal.scss';

let nodeRender = null;
if (canUseDOM) {
  nodeRender = document.getElementsByTagName('body')[0]; // eslint-disable-line prefer-destructuring
}

class Modal extends React.PureComponent {
  isControlled = isBoolean(this.props.open);

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
      okText,
      propsCancel,
      propsOK,
      hideCancel,
      hideOK,
      ...otherProps
    } = this.props;

    const cnOK = propsOK.className;
    const otherPropsOK = omit('className')(propsOK);

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
                  {!hideCancel && (
                    <Button onClick={this.handleLocalClose} {...propsCancel}>
                      {cancelText}
                    </Button>
                  )}
                  {!hideOK && (
                    <Button
                      className={cn('ml-1', cnOK)}
                      color="primary"
                      onClick={this.handleLocalOK}
                      {...otherPropsOK}
                    >
                      {okText}
                    </Button>
                  )}
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
  okText: PropTypes.string,
  hideCancel: PropTypes.bool,
  hideOK: PropTypes.bool,
  onClose: PropTypes.func,
  onOK: PropTypes.func,
  propsCancel: PropTypes.object,
  propsOK: PropTypes.object,
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
};
Modal.defaultProps = {
  cancelText: 'Cancel',
  okText: 'OK',
  propsCancel: {},
  propsOK: {},
  onClose: f => f,
  onOK: f => f,
};

export default Modal;
