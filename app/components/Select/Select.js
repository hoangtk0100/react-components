import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Option from './Option';
import OptGroup from './OptGroup';

export default class Select extends React.PureComponent {
  isHasValue = 'value' in this.props;

  state = {
    value: this.isHasValue ? this.props.value : this.props.defaultValue,
  };

  render() {
    const { className, options, onChange } = this.props;
    const { value } = this.state;

    return <div className={cn('rc-select', className)}>{value}</div>;
  }
}

Select.propTypes = {
  className: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  options: PropTypes.arrayOf({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.any,
    text: PropTypes.node,
  }),
};
Select.defaultProps = {
  options: [],
};
