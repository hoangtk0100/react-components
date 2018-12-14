import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Checkbox from '../Checkbox';

import './style/Table.scss';

export const aligns = Object.freeze({
  left: 'rc-table--left',
  right: 'rc-table--right',
  center: 'rc-table--center',
});

export default class Table extends React.Component {
  state = {};

  renderTableHead = () => {
    const { columns, selectable } = this.props;

    return (
      <tr>
        {selectable && (
          <td style={{ width: '1em', padding: 0, verticalAlign: 'middle' }}>
            <Checkbox />
          </td>
        )}
        {columns.map(col => (
          <td className={cn(col.className, aligns[col.align])}>{col.title}</td>
        ))}
      </tr>
    );
  };

  renderTableBody = () => {
    const { columns, data, selectable } = this.props;

    return data.map((record, idx) => (
      <tr>
        {selectable && (
          <tr>
            <td>
              <Checkbox />
            </td>
          </tr>
        )}
        {columns.map(col => (
          <td
            style={col.style}
            className={cn(col.className, aligns[col.align])}
          >
            {this.renderTD(col.render, record, idx, record[col.index])}
          </td>
        ))}
      </tr>
    ));
  };

  renderTD = (render, record, idx, value) => {
    if (typeof render === 'function') {
      return render(record, idx);
    }

    return value;
  };

  render() {
    const { className, bordered } = this.props;

    return (
      <table
        className={cn(
          'rc-table',
          { 'rc-table--bordered': bordered },
          className,
        )}
      >
        <thead>{this.renderTableHead()}</thead>
        <tbody>{this.renderTableBody()}</tbody>
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      align: PropTypes.oneOf(['left', 'right', 'center']),
      className: PropTypes.string,
      index: PropTypes.string,
      render: PropTypes.func,
    }),
  ).isRequired,
  data: PropTypes.array,
  className: PropTypes.string,
  bordered: PropTypes.bool,
  selectable: PropTypes.bool,
};
Table.defaultProps = {
  data: [],
};
