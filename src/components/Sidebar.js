import React, { Component } from 'react';

import { SIDEBAR_EXECUTION_LIST as ShellOs } from '../Constants';
import ShellO from './ShellO';

import {
  Aside
} from './styles/Sidebar.sc';

class Sidebar extends Component {

  render() {
    const renderShellOs = () => {
      return ShellOs.map((o, idx) => {
        return (
          <ShellO key={idx} data={o} 
                  sendMessage={this.props.sendMessage} />
        );
      });
    };

    return (
      <Aside>
        {renderShellOs()}
      </Aside>
    );
  }
}

export default Sidebar;