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
        <div className="flex mb-5">
          <Textbox
            value={this.state.value}
            onChange={this.onChange}
            placeholder="Placeholder"
          />
          <Button className="ml-1" onClick={this.onButtonClick}>
            Button
          </Button>
        </div>
        <div className="flex mb-5 items-end">
          <Textbox size="small" className="mb-1" />
          <Textbox textboxRef={this.textRef} className="mb-1 ml-1" />
          <Textbox size="large" className="mb-1 ml-1" />
        </div>
        <div className="flex mb-5 items-end">
          <Textarea placeholder="Placeholder" />
        </div>
      </div>
    );
  }
}

export default Demo;
