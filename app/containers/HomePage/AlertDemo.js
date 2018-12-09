import React from 'react';
import { Alert } from '../../components/core';

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Alert className="mt-5" message="This is a message" />
        <Alert className="mt-5" message="This is a message" type="info" />
        <Alert className="mt-5" message="This is a message" type="success" />
        <Alert className="mt-5" message="This is a message" type="warning" />
        <Alert className="mt-5" message="This is a message" type="error" />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
        />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
          type="info"
        />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
          type="success"
        />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
          type="warning"
        />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
          type="error"
        />
      </div>
    );
  }
}

export default Demo;
