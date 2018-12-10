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
    if (!this.isValid(current)) {
      return false;
    }
    this.props.onChange(event, { ...this.state, current });

    return !this.isHasCurrent ? this.setState({ current }) : false;
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

  jumpNext = event => {
    const current = this.state.current + this.props.max; // eslint-disable-line react/no-access-state-in-setstate

    if (!this.isValid(current)) {
      return false;
    }

    this.props.onChange(event, { ...this.state, current });

    return !this.isHasCurrent ? this.setState({ current }) : false;
  };

  jumpPrev = event => {
    const current = this.state.current - this.props.max; // eslint-disable-line react/no-access-state-in-setstate

    if (!this.isValid(current)) {
      return false;
    }

    this.props.onChange(event, { ...this.state, current });

    return !this.isHasCurrent ? this.setState({ current }) : false;
  };

  isShowJumpPrev = () =>
    this.state.current - Math.floor(this.props.max / 2) > 3;

  isShowJumpNext = pageCount => {
    const { current } = this.state;
    const { max } = this.props;

    return current + Math.floor(max / 2) < pageCount - 2;
  };

  start = pageCount => {
    const { current } = this.state;
    const { max } = this.props;

    let start = current - Math.floor(max / 2);

    if (start <= 3) {
      return 2;
    }
    if (start > pageCount - max) {
      start = pageCount - max + 1;
    }

    return start;
  };

  end = pageCount => {
    const { current } = this.state;
    const { max } = this.props;

    let end = current + Math.floor(max / 2);

    if (end >= pageCount - 2) {
      end = pageCount - 1;
    }

    if (end < max + 1 && max < pageCount - 2) {
      end = max;
    }

    return end;
  };

  renderItems = pageCount => {
    if (!pageCount) {
      return [];
    }

    const { max } = this.props;
    if (pageCount <= max + 2) {
      const items = [];
      for (let i = 1; i <= pageCount; i += 1) {
        items.push(i);
      }

      return items;
    }

    // adding the first page
    const items = [1];

    if (this.isShowJumpPrev()) {
      // adding jumpPrev
      items.push('jumpPrev');
    }

    const start = this.start(pageCount);
    const end = this.end(pageCount);

    // adding more page
    for (let i = start; i <= end; i += 1) {
      items.push(i);
    }

    if (this.isShowJumpNext(pageCount)) {
      // adding jumpNext
      items.push('jumpNext');
    }

    // adding the last page
    items.push(pageCount);

    return items;
  };

  render() {
    const { current, pageSize } = this.state;

    const pageCount = this.calculatePage(pageSize);
    const prevDisabled = current <= 1;
    const nextDisabled = current >= pageCount;

    const items = this.renderItems(pageCount);

    return (
      <ul className={cn('rc-pagination', this.props.className)}>
        <li
          className={cn('rc-pagination__item rc-pagination__item--prev', {
            'rc-pagination__item--prev-disabled': prevDisabled,
          })}
          onClick={this.prev}
        >
          <Icon icon="chevron-left" />
        </li>
        {items.map(item => {
          const itemProps = {
            key: item,
            className: cn(`rc-pagination__item rc-pagination__item--${item}`, {
              'rc-pagination__item--active': current === item,
            }),
            onClick: event => this.handlePageChange(event, item),
            children: <span>{item}</span>,
          };

          if (item === 'jumpPrev' || item === 'jumpNext') {
            itemProps.onClick = this[item];
            itemProps.children = <span />;
          }

          return <li {...itemProps} />;
        })}
        <li
          className={cn('rc-pagination__item rc-pagination__item--next', {
            'rc-pagination__item--next-disabled': nextDisabled,
          })}
          onClick={this.next}
        >
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
  max: PropTypes.oneOf([5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]),
  onChange: PropTypes.func,
};
Pagination.defaultProps = {
  defaultCurrent: 1,
  defaultPageSize: 10,
  total: 0,
  max: 5,
  onChange: f => f,
};
