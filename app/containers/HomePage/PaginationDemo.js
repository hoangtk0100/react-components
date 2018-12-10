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
            total={60}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={70}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={80}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={90}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={100}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={100}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={110}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={120}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={130}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={140}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={150}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={160}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
        <div className="mb-5">
          <Pagination
            total={170}
            current={this.state.current}
            onChange={(event, { current }) => this.setState({ current })}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
