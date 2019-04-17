import React, { Component } from 'react';

import { SIDEBAR_EXECUTION as ShellOs } from '../Constants';
import ShellO from './ShellO';

import {
  Aside
} from './styles/Sidebar.sc';

class Sidebar extends Component {

  render() {
    const renderShellOs = () => {
      return ShellOs.map((o, idx) => {
        return (
          <ShellO key={(idx + 1)} data={o} />
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