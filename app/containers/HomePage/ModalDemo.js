/* eslint-disable no-console, no-alert */
import React from 'react';
import { Modal, Button, Text } from '../../components/core';

class Demo extends React.Component {
  state = {
    open: false,
    openOK: false,
  };

  handleOpenModal = () => this.setState({ open: true });

  handleCloseModal = () => this.setState({ open: false });

  handleOpenModalOK = () => this.setState({ openOK: true });

  handleCloseModalOK = () => this.setState({ openOK: false });

  render() {
    return (
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1em' }}>
        <div className="flex">
          <Button
            className="mb-1"
            color="primary"
            onClick={this.handleOpenModal}
          >
            Basic Modal
          </Button>
          <Button
            className="mb-1 ml-1"
            color="primary"
            onClick={this.handleOpenModalOK}
          >
            Modal with onOK
          </Button>
        </div>
        <Modal
          title="This is a title"
          open={this.state.open}
          onClose={this.handleCloseModal}
        >
          <Text.P>This is a content</Text.P>
        </Modal>
        <Modal
          title="This is a title"
          open={this.state.openOK}
          onClose={this.handleCloseModalOK}
          onOK={() => {
            const confirmation = window.confirm(
              'click OK to close modal(onOK return true)!',
            );
            return confirmation;
          }}
        >
          <Text.P>
            onOK function willbe call before. if okOK return truly, onClose
            willbe calling if ok return falsy, onClose not calling!
          </Text.P>
        </Modal>
      </div>
    );
  }
}

export default Demo;
