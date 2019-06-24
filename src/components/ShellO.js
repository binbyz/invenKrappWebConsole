import React, { Component } from 'react';
import { SO_TYPE_CMD } from '../Constants';

import {
  Command,
  BrowserCommand,
  CommandIcon,
  BrowserIcon,
  Text,
  BrowserText
} from './styles/ShellO.sc';

import {
  messageMassage
} from '../utils';

class ShellO extends Component {
  render() {
    const getIconPath = (data) => {
      return require('../assets/' + data.namespace + '.' + data.command + '.svg')
    }

    const handleOpenBrowser = (link) => {
      if (typeof window === 'object' && 'open' in window) {
        window.open(link);
      }
    }
    
    return (
      <React.Fragment>
        {
          (this.props.data.type === SO_TYPE_CMD) ? (
            <Command onClick={ 
              () => {
                this.props.sendMessage(messageMassage(this.props.data)) 
                this.props.fOverlay(true)
              }
            }>
              <CommandIcon src={getIconPath(this.props.data)} alt={this.props.data.description} />
              <Text>{this.props.data.description}</Text>
            </Command>
          ) : (
            <BrowserCommand onClick={ () => handleOpenBrowser(this.props.data.link) }>
              <BrowserIcon src={getIconPath(this.props.data)} alt={this.props.data.description} />
              <BrowserText>{this.props.data.description}</BrowserText>
            </BrowserCommand>
          )
        }
      </React.Fragment>
    );
  };
}

export default ShellO;