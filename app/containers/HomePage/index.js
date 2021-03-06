/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Tabs, Icon } from '../../components/core';

import AlertDemo from './AlertDemo';
import ButtonDemo from './ButtonDemo';
import CheckboxDemo from './CheckboxDemo';
import ModalDemo from './ModalDemo';
import IconDemo from './IconDemo';
import PaginationDemo from './PaginationDemo';
import TextboxDemo from './TextboxDemo';
import SelectDemo from './SelectDemo';
import TableDemo from './TableDemo';
import AvatarDemo from './AvatarDemo';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = { activeTab: 'tab-button' };

  render() {
    return (
      <div className="p-5">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(event, tab) => this.setState({ activeTab: tab })}
        >
          <Tabs.Tab tab="tab-icon" title="Icon" icon={<Icon icon="flag" />}>
            <IconDemo />
          </Tabs.Tab>
          <Tabs.Tab tab="tab-alert" title="Alert" icon={<Icon icon="bell" />}>
            <AlertDemo />
          </Tabs.Tab>
          <Tabs.Tab
            tab="tab-button"
            title="Button"
            icon={<Icon icon="hand-pointer" />}
          >
            <ButtonDemo />
          </Tabs.Tab>
          <Tabs.Tab
            tab="tab-checkbox"
            title="Checkbox"
            icon={<Icon icon="check" />}
          >
            <CheckboxDemo />
          </Tabs.Tab>
          <Tabs.Tab
            tab="tab-modal"
            title="Modal"
            icon={<Icon icon="question" />}
          >
            <ModalDemo />
          </Tabs.Tab>
          <Tabs.Tab
            tab="tab-4"
            title="Disabled Tab"
            disabled
            icon={<Icon icon="ban" />}
          >
            Disabled Tab
          </Tabs.Tab>
          <Tabs.Tab
            tab="tab-pagination"
            title="Pagination"
            icon={<Icon icon="magic" />}
          >
            <PaginationDemo />
          </Tabs.Tab>
          <Tabs.Tab
            tab="tab-textbox"
            title="Textbox"
            icon={<Icon icon="keyboard" />}
          >
            <TextboxDemo />
          </Tabs.Tab>
          <Tabs.Tab
            tab="tab-select"
            title="Select"
            icon={<Icon icon="mouse-pointer" />}
          >
            <SelectDemo />
          </Tabs.Tab>
          <Tabs.Tab tab="tab-table" title="Table" icon={<Icon icon="table" />}>
            <TableDemo />
          </Tabs.Tab>
          <Tabs.Tab tab="tab-avatar" title="Avatar" icon={<Icon icon="user" />}>
            <AvatarDemo />
          </Tabs.Tab>
        </Tabs>
      </div>
    );
  }
}
