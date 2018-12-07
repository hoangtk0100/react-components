import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default Component => {
  class ClickOutsideComponent extends React.Component {
    targetNode = null;

    componentDidMount() {
      if (!this.isHasClickOutside()) {
        return false;
      }
      this.targetNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
      return document.addEventListener('click', this.handleClick, false);
    }

    componentDidUpdate() {
      if (!this.isHasClickOutside()) {
        return false;
      }
      this.targetNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
      return true;
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClick, false);
    }

    // For perfomance case
    isHasClickOutside = () => typeof this.props.onClickOutside === 'function';

    handleClick = e => {
      if (!this.isHasClickOutside()) {
        return false;
      }
      if (this.targetNode && this.targetNode.contains(e.target)) {
        // The click inside, continue to whatever you are doing
        return false;
      }
      return this.props.onClickOutside(e);
    };

    render() {
      const { onClickOutside, ...props } = this.props; // elsint-disable-line
      return <Component {...props} />;
    }
  }

  ClickOutsideComponent.propTypes = {
    onClickOutside: PropTypes.func,
  };

  ClickOutsideComponent.defaultProps = {};

  return ClickOutsideComponent;
};
