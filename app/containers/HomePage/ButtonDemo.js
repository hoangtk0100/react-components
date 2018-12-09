import React from 'react';
import { Button, Icon } from '../../components/core';

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1em' }}>
        <div className="flex mb-8">
          <Button className="mb-1">Basic Button</Button>
          <Button className="mb-1 ml-1" color="primary">
            Primary Button
          </Button>
          <Button className="mb-1 ml-1" disabled>
            Basic Disabled
          </Button>
          <Button className="mb-1 ml-1" color="primary" disabled>
            Primary Disabled
          </Button>
        </div>
        <div className="flex mb-8">
          <Button className="mb-1" color="primary" htmlType="button">
            Button
          </Button>
          <Button className="mb-1 ml-1" color="primary" htmlType="reset">
            Reset Button
          </Button>
          <Button className="mb-1 ml-1" color="primary" htmlType="submit">
            Submit Button
          </Button>
        </div>
        <div className="flex items-end mb-8">
          <Button className="mb-1" color="primary" size="small">
            Small Button
          </Button>
          <Button className="mb-1 ml-1" color="primary">
            Normal size Button
          </Button>
          <Button className="mb-1 ml-1" color="primary" size="large">
            Large Button
          </Button>
        </div>
        <div className="flex mb-8">
          <Button color="primary" className="mb-1">
            <Icon icon="atom" />
          </Button>
          <Button color="primary" className="mb-1 ml-1">
            <Icon icon="atom" />
            Button with left Icon
          </Button>
          <Button color="primary" className="mb-1 ml-1">
            Button with right Icon
            <Icon icon="atom" />
          </Button>
          <Button color="primary" className="mb-1 ml-1">
            <Icon icon="atom" />
            Button with right and left Icon
            <Icon icon="atom" />
          </Button>
        </div>
        <div className="flex mb-8">
          <Button.Link
            className="mb-1"
            color="primary"
            href="https://google.com"
          >
            Link Button
          </Button.Link>
        </div>
        <div className="flex mb-8 items-end">
          <Button.Group className="mb-1">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </Button.Group>
          <Button.Group className="mb-1 ml-1" color="primary">
            <Button.Link>Link Left</Button.Link>
            <Button.Link>Link Middle</Button.Link>
            <Button.Link>Link Right</Button.Link>
          </Button.Group>
          <Button.Group className="mb-1 ml-1" color="primary" disabled>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </Button.Group>
          <Button.Group className="mb-1 ml-1" size="large">
            <Button.Link href="https://google.com">Link</Button.Link>
            <Button color="primary">Middle</Button>
            <Button disabled>Right</Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default Demo;
