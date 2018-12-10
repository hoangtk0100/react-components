/* eslint-disable no-console, no-alert */
import React from 'react';
import { Textbox, Button, Textarea } from '../../components/core';

class Demo extends React.Component {
  state = { value: '' };

  textRef = React.createRef();

  onChange = event => this.setState({ value: event.target.value });

  onButtonClick = () => {
    console.log(this.textRef);
  };

  render() {
    return (
      <div>
        <div className="flex mb-2">
          <Textbox
            value={this.state.value}
            textboxRef={this.textRef}
            onChange={this.onChange}
            placeholder="Placeholder"
          />
          <Button color="primary" className="ml-1" onClick={this.onButtonClick}>
            Button
          </Button>
        </div>
        {/* <div className="flex mb-2 items-end">
          <Textbox size="small" placeholder="Placeholder" />
          <Textbox placeholder="Placeholder" className="ml-1" />
          <Textbox size="large" className="ml-1" placeholder="Placeholder" />
        </div> */}
        <div className="flex mb-2 items-end">
          <Textarea placeholder="Placeholder" />
        </div>
      </div>
    );
  }
}

export default Demo;
