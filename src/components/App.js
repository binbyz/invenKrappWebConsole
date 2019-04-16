import React, { Component } from 'react';
import WebSocket from 'websocket';

import Header from './Header';
import Sidebar from './Sidebar';
import LogContainer from './LogContainer';
import LogReformatter from './LogReformatter';
import update from 'react-addons-update';

import {
  WS_CONNECT_PROTOCOL,
  WS_CONNECT_HOST,
  WS_CONNECT_PORT,
  WS_CONNECT_PATH,
  APP_LOG_MAX_LINE
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
     * 로그(namespace)
     */
    nginx: { access: [], error : [] },
    /**
     * 헤더의 현재 웹 소켓 상태를 출력해 줄 수 있도록
     */
    webSocketEvent: {}
  };

  constructor(props) {
    super(props);

    this.logReducer = this.logReducer.bind(this);
    this.logReformatter = this.logReformatter.bind(this);
  }

  async logReducer(ns) {
    if ((this.state.nginx[ns].length - APP_LOG_MAX_LINE) >= APP_LOG_MAX_LINE) {
      let bulk = [...this.state.nginx[ns]].splice( Math.ceil(APP_LOG_MAX_LINE/2) );

      this.setState({
        nginx: update(this.state.nginx, {
          [ns]: { $set: bulk }
        })
      });
    }
  }

  async logReformatter(chunk) {
    return <LogReformatter chunk={chunk} />
  }

  componentDidMount() {
    let w3c = WebSocket.w3cwebsocket;
    this.client = new w3c(`${WS_CONNECT_PROTOCOL}://${WS_CONNECT_HOST}:${WS_CONNECT_PORT}${WS_CONNECT_PATH}`);

    this.client.onerror = (event) => {
      this.setState({
        webSocketEvent: event
      });
    };

    this.client.onclose = (event) => {
      this.setState({
        webSocketEvent: event
      });
    };

    this.client.onopen = (event) => {
      this.setState({
        webSocketEvent: event
      });
    };

    this.client.onmessage = async (event) => {
      if (typeof event === 'object' && 'data' in event && typeof event.data === 'string') {
        let recv = JSON.parse(atob(atob(event.data)));

        if (recv.namespace === 'nginx.access' || recv.namespace === 'nginx.error') {
          let t = recv.namespace.split('.');

          // reduce log
          await this.logReducer(t[1]);

          // reform log message
          recv.chunk = await this.logReformatter(recv.chunk);

          this.setState({
            nginx: update(this.state.nginx, {
              [t[1]]: { $push: [recv.chunk] }
            })
          });
        }
      }
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
              title="access.log" icon="access.log.svg" process={this.state.isProcess}
              logs={this.state.nginx.access} subtitle="/var/log/nginx/access.log" />

            <LogContainer 
              title="error.log" icon="error.log.svg" process={this.state.isProcess}
              logs={this.state.nginx.error} subtitle="/var/log/nginx/error.log" />
          </Content>
        </Main>
      </div>
    );
  }
}

export default App;
