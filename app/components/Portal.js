import React from 'react';
import ReactDOM from 'react-dom';

const node = document.getElementsByTagName('body')[0];

class Portal extends React.PureComponent {
  render() {
    return ReactDOM.render(node);
  }
}

export default Portal;
