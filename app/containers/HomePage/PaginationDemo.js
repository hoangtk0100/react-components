/* eslint-disable no-console, no-alert */
import React from 'react';
import { Pagination } from '../../components/core';

class Demo extends React.Component {
  state = { current: 2 };

  render() {
    return (
      <div>
        <div className="mb-5">
          <Pagination
            total={50}
            onChange={(event, state) => console.log(state)}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={100}
            current={this.state.current}
            onChange={(event, state) => console.log(state)}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={101}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
