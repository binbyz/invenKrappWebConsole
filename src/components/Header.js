import React, { Component } from 'react';

import IconTerminal from '../assets/terminal.svg';
import IconComplete from '../assets/complete.svg';
import IconError from '../assets/error.svg';
import {
  HeaderBox,
  LogoBox,
  Logo,
  WebSocketStatusText
} from './Header.sc';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleWebSockerEvent = this.handleWebSockerEvent.bind(this);
  }

  handleWebSockerEvent(event) {
    if (typeof event === 'object') {
      switch (event.type) {
        case 'error':
          return (
            <WebSocketStatusText icon={IconError}>서버({event.target.url}) 연결을 실패하였습니다.</WebSocketStatusText>
          );
        case 'open':
          return (
            <WebSocketStatusText icon={IconComplete}>서버({event.target.url})와 연결되었습니다.</WebSocketStatusText>
          );
        default:
          return (
            <WebSocketStatusText icon={IconComplete}>서버와 연결을 준비 중입니다.</WebSocketStatusText>
          );
      }
    }
  }

  render() {
    return (
      <HeaderBox>
        <LogoBox>
          <Logo src={IconTerminal} alt="Terminal" />
          <span>iConsole</span>
        </LogoBox>

        <div>{this.handleWebSockerEvent(this.props.webSocketEvent)}</div>
      </HeaderBox>
    );
  }
}

export default Header;