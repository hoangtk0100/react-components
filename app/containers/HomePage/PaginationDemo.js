/* eslint-disable no-console, no-alert */
import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from '../../components/core';

class Demo extends React.Component {
  state = {
    current: 1,
    // pageSize: 10,
    // total: 301,
    current2: 1,
    pageSize2: 10,
    total2: 301,
  };

  // onChange = event => this.setState({ pageSize: +event.target.value });

  onChange2 = event => this.setState({ pageSize2: +event.target.value });

  render() {
    return (
      <div>
        <div className="flex mb-5">
          <Pagination.Total
            total={this.state.total2}
            page={this.state.current2}
            pageSize={this.state.pageSize2}
          />
          <Pagination
            className="ml-1"
            total={this.state.total2}
            current={this.state.current2}
            pageSize={this.state.pageSize2}
            onChange={(event, { current }) =>
              this.setState({ current2: current })
            }
          />
          <Pagination.Options
            className="ml-1"
            value={this.state.pageSize2}
            onChange={this.onChange2}
          />
        </div>
        <div className="mb-5">
          <Pagination
            renderItem={item => <Link to={`/#${item}`}>{item}</Link>}
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
