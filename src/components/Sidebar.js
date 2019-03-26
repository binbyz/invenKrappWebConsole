import React, { Component } from 'react';
import styled from 'styled-components';

import { SIDEBAR_EXECUTION as ShellOs } from '../Constants';
import ShellO from './ShellO';

const Aside = styled.aside`
  float: left;
  width: 200px;
  height: 100%;
  background-color: #004881;
`;

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