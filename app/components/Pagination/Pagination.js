/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { isInteger } from 'lodash/fp';

import Icon from '../Icon';
import './style/Pagination.scss';

export default class Pagination extends React.Component {
  isHasCurrent = 'current' in this.props;

  isHasPageSize = 'pageSize' in this.props;

  state = {
    current: this.isHasCurrent ? this.props.current : this.props.defaultCurrent,
    pageSize: this.isHasPageSize
      ? this.props.pageSize
      : this.props.defaultPageSize,
  };

  componentWillReceiveProps(nextProps) {
    const newState = {};
    if (
      nextProps.current !== this.props.current &&
      this.isValid(nextProps.current)
    ) {
      newState.current = nextProps.current;
    }

    if (this.props.pageSize !== nextProps.pageSize) {
      newState.pageSize = nextProps.pageSize;
    }

    this.setState(newState);
  }

  shouldComponentUpdate() {
    return true;
  }

  calculatePage = pageSize =>
    pageSize ? Math.floor((this.props.total - 1) / pageSize) + 1 : pageSize;

  handlePageChange = (event, current) => {
    this.props.onChange(event, { ...this.state, current });
    if (!this.isHasCurrent) {
      this.setState({ current });
    }
  };

  handlePageSizeChange = (event, pageZise) => {
    this.props.onChange(event, { ...this.state, pageZise });
    if (!this.isHasPageSize) {
      this.setState({ pageZise });
    }
  };

  isValid = page =>
    isInteger(page) &&
    page >= 1 &&
    page !== this.state.current &&
    this.calculatePage(this.state.pageSize) >= page;

  prev = event => {
    const current = this.state.current - 1; // eslint-disable-line react/no-access-state-in-setstate
    if (!this.isValid(current)) {
      return false;
    }
    this.props.onChange(event, { ...this.state, current });

    return !this.isHasCurrent ? this.setState({ current }) : false;
  };

  next = event => {
    const current = this.state.current + 1; // eslint-disable-line react/no-access-state-in-setstate
    if (!this.isValid(current)) {
      return false;
    }
    this.props.onChange(event, { ...this.state, current });

    return !this.isHasCurrent ? this.setState({ current }) : false;
  };

  renderPage = () => {
    const loop = this.calculatePage(this.state.pageSize);
    const items = [];

    for (let i = 0; i < loop; i += 1) {
      const key = i + 1;
      const active = key === this.state.current;
      items.push(
        <li
          key={key}
          className={cn('rc-pagination__item', `rc-pagination__item-${key}`, {
            'rc-pagination__item--active': active,
          })}
          onClick={event => this.handlePageChange(event, key)}
        >
          <span>{key}</span>
        </li>,
      );
    }

    return items;
  };

  render() {
    return (
      <ul className={cn('rc-pagination', this.props.className)}>
        <li className="rc-pagination__prev" onClick={this.prev}>
          <Icon icon="chevron-left" />
        </li>
        {this.renderPage()}
        <li className="rc-pagination__next" onClick={this.next}>
          <Icon icon="chevron-right" />
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = {
  className: PropTypes.string,
  current: PropTypes.number,
  defaultCurrent: PropTypes.number,
  pageSize: PropTypes.number,
  defaultPageSize: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
};
Pagination.defaultProps = {
  defaultCurrent: 1,
  defaultPageSize: 10,
  total: 0,
  onChange: f => f,
};
