import React, { Component } from 'react';

import {
  Command,
  BrowserCommand,
  CommandIcon,
  BrowserIcon,
  Text,
  BrowserText
} from './ShellO.sc';

class ShellO extends Component {
  render() {
    const getIconPath = (data) => {
      return require('../assets/' + data.namespace + '.' + data.command + '.svg');
    }
    
    return (
      <div>
        {
          (this.props.data.namespace === 'vagrant.inven.krapp') ? (
            <Command>
              <CommandIcon src={getIconPath(this.props.data)} alt={this.props.data.description} />
              <Text>{this.props.data.description}</Text>
            </Command>
          ) : (
            <BrowserCommand>
              <BrowserIcon src={getIconPath(this.props.data)} alt={this.props.data.description} />
              <BrowserText>{this.props.data.description}</BrowserText>
            </BrowserCommand>
          )
        }
      </div>
    );
  };
}

export default ShellO;