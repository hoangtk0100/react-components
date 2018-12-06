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
import {
  Button,
  Tabs,
  Icon,
  Grid,
  Tooltip,
  Switch,
  Modal,
} from '../../components/core';

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
  state = { activeTab: 'tab-2', open: true };

  render() {
    return (
      <React.Fragment>
        <Modal
          header="This is a header!"
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <p>This is a content!</p>
        </Modal>
        <Wrapper>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(event, tab) => this.setState({ activeTab: tab })}
          >
            <Tabs.Tab tab="tab-1" title="Button">
              <Wrapper>
                <Button onClick={() => this.setState({ open: true })}>
                  Open Modal
                </Button>
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
                <Switch size="small" />
                <Switch size="small" disabled />
                <Switch size="small" checked disabled />
                <Switch size="large" />
                <Switch
                  checked={!!this.state.checked}
                  onChange={e => this.setState({ checked: e.target.checked })}
                />
              </Wrapper>
            </Tabs.Tab>
            <Tabs.Tab tab="tab-2" title="About" icon={<Icon icon="ad" />}>
              <Grid row>
                <Grid row span="1/3">
                  Grid 1
                </Grid>
                <Grid row span="1/3">
                  Grid 2
                </Grid>
                <Grid row span="1/3">
                  Grid 3
                </Grid>
              </Grid>
            </Tabs.Tab>
            <Tabs.Tab
              tab="tab-3"
              title="Contact"
              icon={<Icon icon="address-book" />}
            >
              <div>
                <Tooltip title="This is a tooltip" placement="top">
                  <span color="primary" size="small">Hover to show placement=top</span>
                </Tooltip>
              </div>
              <div>
                <Tooltip title="This is a tooltip" placement="bottom">
                  <Button className="ml-1">
                    Hover to show placement=bottom
                  </Button>
                </Tooltip>
                <Tooltip title="This is a tooltip" placement="left">
                  <Button className="ml-1">Hover to show placement=left</Button>
                </Tooltip>
                <Tooltip title="This is a tooltip" placement="right">
                  <Button className="ml-1">
                    Hover to show placement=right
                  </Button>
                </Tooltip>
                <Tooltip title="This is a tooltip" placement="right">
                  <Button className="ml-1">
                    Hover to show placement=right
                  </Button>
                </Tooltip>
                <Tooltip title="This is a tooltip" placement="right">
                  <Button className="ml-1">
                    Hover to show placement=right
                  </Button>
                </Tooltip>
                <Tooltip title="This is a tooltip" placement="right">
                  <Button className="ml-1">
                    Hover to show placement=right
                  </Button>
                </Tooltip>
                <Tooltip title="This is a tooltip" placement="right">
                  <Button className="ml-1">
                    Hover to show placement=right
                  </Button>
                </Tooltip>
                <Tooltip title="This is a tooltip" placement="right">
                  <Button className="ml-1">
                    Hover to show placement=right
                  </Button>
                </Tooltip>
                <Tooltip title="This is a tooltip" placement="right">
                  <Button className="ml-1">
                    Hover to show placement=right
                  </Button>
                </Tooltip>
                <Tooltip title="This is a tooltip" placement="right">
                  <Button className="ml-1">
                    Hover to show placement=right
                  </Button>
                </Tooltip>
              </div>
            </Tabs.Tab>
            <Tabs.Tab tab="tab-s" icon={<Icon icon="address-book" />} />
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
