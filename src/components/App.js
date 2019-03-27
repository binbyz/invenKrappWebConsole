import React, { Component } from 'react';
import WebSocket from 'websocket';

import Header from './Header';
import Sidebar from './Sidebar';
import LogContainer from './LogContainer';

import {
  WS_CONNECT_PROTOCOL,
  WS_CONNECT_HOST,
  WS_CONNECT_PORT,
  WS_CONNECT_PATH
} from '../Constants';

import {
  GlobalStyle,
  Main,
  Content
} from './Global.sc';

class App extends Component {
  /**
   * WebSocket Client
   */
  client;

  /**
   * React State
   */
  state = {
    /**
     * 서버로 데이터를 요청 또는 전송 받는 중일 때
     */
    isProcess: false,
    /**
     * 로그
     */
    logs: {
      nginx: { access: [], error : [] }
    },
    /**
     * 헤더의 현재 웹 소켓 상태를 출력해 줄 수 있도록
     */
    webSocketEvent: {}
  };

  componentDidMount() {
    let w3c = WebSocket.w3cwebsocket;
    this.client = new w3c(`${WS_CONNECT_PROTOCOL}://${WS_CONNECT_HOST}:${WS_CONNECT_PORT}${WS_CONNECT_PATH}`);

    /**
     * onError
     */
    this.client.onerror = (event) => {
      this.setState({
        webSocketEvent: event
      });
    };

    /**
     * onOpen
     */
    this.client.onopen = (event) => {
      this.setState({
        webSocketEvent: event
      });
    };
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header webSocketEvent={this.state.webSocketEvent} />
        <Main>
          <Sidebar />
          <Content>
            <LogContainer 
              title="access.log"
              icon="access.log.svg"
              process={this.state.isProcess}
              logs={this.state.logs.nginx.access}
              subtitle="/var/log/nginx/access.log" />

            <LogContainer 
              title="error.log"
              icon="error.log.svg"
              process={this.state.isProcess}
              logs={this.state.logs.nginx.error}
              subtitle="/var/log/nginx/error.log" />
          </Content>
        </Main>
      </div>
    );
  }
}

export default App;
