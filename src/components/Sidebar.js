import React, { Component } from 'react';
import styled from 'styled-components';

import ShellO from './ShellO';

const Aside = styled.aside`
  float: left;
  width: 200px;
`;

const ShellOs = [
  { icon: "", text: "",  }
];

class Sidebar extends Component {
  render() {
    return (
      <Aside>

      </Aside>
    );
  }
}

export default Sidebar;