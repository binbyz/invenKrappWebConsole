import React, { Component } from 'react';
import styled from 'styled-components';

import IconTerminal from '../assets/terminal.svg';

const HeaderBox = styled.header`
  background: #003056;
  height: 50px;
  box-sizing: border-box;
  cursor: default;
`;

const LogoBox = styled.div`
 float: left;
 width: 200px;
 height: 100%;
 text-align: center;
 background-color: #003C6C;
 color: #FFF;
 font-size: 150%;
 padding-top: 8px;
 box-sizing: border-box;
`;

const Logo = styled.img`
  width: 30px;
  vertical-align: -7px;
  margin-right: 10px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderBox>
        <LogoBox>
          <Logo src={IconTerminal} alt="Terminal" />
          <span>iConsole</span>
        </LogoBox>
      </HeaderBox>
    );
  }
}

export default Header;