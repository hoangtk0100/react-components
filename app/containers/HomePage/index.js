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
import styled from 'styled-components';
import { Button, Tabs, Icon } from '../../components/core';

const Wrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  margin: auto;
  justify-content: center;
  align-items: center;

  > * {
    margin: 0.25em;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = { activeTab: 'tab-1' };

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(event, tab) => this.setState({ activeTab: tab })}
          >
            <Tabs.Tab tab="tab-1" title="Button">
              <Wrapper>
                <Button>Button</Button>
                <Button color="primary">
                  <Icon icon="atom" />
                  Primary Button
                  <Icon icon="atom" />
                </Button>
                <Button disabled color="primary">
                  <Icon icon="atom" />
                </Button>
                <Button size="large" color="primary">
                  <Icon icon="atom" />
                  Large Primary
                </Button>
                <Button size="small" color="primary">
                  Small Primary
                  <Icon icon="atom" />
                </Button>
                <Button.Group size="small" color="primary">
                  <Button>
                    <Icon icon="atom" />
                    Button
                  </Button>
                  <Button>
                    Button
                    <Icon icon="atom" />
                  </Button>
                  <Button>Button</Button>
                </Button.Group>
                <Button.Group size="large" color="primary">
                  <Button>Button</Button>
                </Button.Group>
              </Wrapper>
            </Tabs.Tab>
            <Tabs.Tab tab="tab-2" title="About" icon={<Icon icon="ad" />}>
              Tab2
            </Tabs.Tab>
            <Tabs.Tab
              tab="tab-3"
              title="Contact"
              icon={<Icon icon="address-book" />}
            >
              Tab3
            </Tabs.Tab>
            <Tabs.Tab tab="tab-s" icon={<Icon icon="address-book" />}>
              Tabs
            </Tabs.Tab>
            <Tabs.Tab
              tab="tab-4"
              title="About"
              disabled
              icon={<Icon icon="barcode" />}
            >
              Tab4
            </Tabs.Tab>
          </Tabs>
        </Wrapper>
      </React.Fragment>
    );
  }
}
