/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { omit } from 'lodash/fp';
import ReactDOM from 'react-dom';

import { canUseDOM } from '../utils';
import Portal from '../Portal';
import Alert from './Alert';

import './style/Alert.anywhere.scss';

let nodeRender = null;
if (canUseDOM) {
  nodeRender = document.getElementsByTagName('body')[0]; // eslint-disable-line prefer-destructuring
}

export const placements = Object.freeze({
  top: 'rc-alert-anywhere--top',
  bottom: 'rc-alert-anywhere--bottom',
  left: 'rc-alert-anywhere--left',
  right: 'rc-alert-anywhere--right',
  'top-left': 'rc-alert-anywhere--top-left',
  'left-top': 'rc-alert-anywhere--left-top',
  'top-right': 'rc-alert-anywhere--top-right',
  'right-top': 'rc-alert-anywhere--right-top',
  'bottom-left': 'rc-alert-anywhere--bottom-left',
  'left-bottom': 'rc-alert-anywhere--left-bottom',
  'bottom-right': 'rc-alert-anywhere--bottom-right',
  'right-bottom': 'rc-alert-anywhere--right-bottom',
});

export class AlertAnywhere extends React.Component {
  state = {
    visible: true,
  };

  shouldComponentUpdate() {
    return true;
  }

  closeAlert = () =>
    this.setState({ visible: false }, () => this.props.onClose());

  unmountPortalCallback = () => {
    /**
     * Alert.error
     * Alert.success
     * Alert.warning
     * Alert.infor
     * renderJSNode only for kind of Alert above
     */
    if (canUseDOM && this.props.renderJSNode) {
      try {
        document.body.removeChild(this.props.renderJSNode);
      } catch (e) {
        console.warn(e); //eslint-disable-line
      }
    }
  };

  render() {
    if (!this.state.visible) {
      return null;
    }

    const { className, placement, style, ...otherProps } = omit([
      'renderJSNode',
      'onClose',
    ])(this.props);

    return (
      <Portal node={nodeRender} unmountCallback={this.unmountPortalCallback}>
        <div className={cn('rc-alert-anywhere', placements[placement])}>
          <Alert
            className={className}
            style={{ width: '300px', ...style }}
            {...otherProps}
            onClose={this.closeAlert}
          />
        </div>
      </Portal>
    );
  }
}

AlertAnywhere.propTypes = {
  onClose: PropTypes.func,
  placement: PropTypes.oneOf(Object.keys(placements)),
};
AlertAnywhere.defaultProps = {
  placement: 'top',
  onClose: f => f,
};

export default type => props => {
  if (!canUseDOM) {
    return null;
  }

  const defaultNode = document.createElement('div');
  defaultNode.className = 'flag__rc-alert-anywhere';
  document.body.appendChild(defaultNode);

  const otherProps = omit('type')(props);

  ReactDOM.render(
    <AlertAnywhere {...otherProps} type={type} renderJSNode={defaultNode} />,
    defaultNode,
  );
};
