import React, { Component } from 'react'
import WebSocket from 'websocket'

import Header from './Header'
import Sidebar from './Sidebar'
import Terminal from './Terminal'
import LogContainer from './LogContainer'
import LogReformatter from './LogReformatter'
import update from 'react-addons-update'

import EnvEditor from './EnvEditor'

import {
  WS_CONNECT_PROTOCOL,
  WS_CONNECT_HOST,
  WS_CONNECT_PORT,
  WS_CONNECT_PATH,
  APP_LOG_MAX_LINE,
  TERMINAL_AUTO_CLOSE
} from '../Constants'

import {
  GlobalStyle,
  Main,
  Content,
  Overlay
} from './styles/Global.sc';

class App extends Component {
  client // websocket clinets
  _processHideTimer
  state = {
    // 서버로 데이터를 요청 또는 전송 받는 중일 때
    iconVisual: false,
    // 로그(namespace)
    nginx: { access: [], error : [] },
    // 헤더의 현재 웹 소켓 상태를 출력해 줄 수 있도록
    webSocketEvent: {},
    // 콘솔 로그
    consoleLogs: [],
    // 터미널 실행 후 받은 데이터
    stdout: {},
    // 오버레이
    overlay: false,
    // 터미널
    showTerminal: false,
    // 에디터 
    showEditor: false,
    // dotenv 텍스트 내용
    dotenvText: ''
  };

  constructor(props) {
    super(props);

    this.logReducer     = this.logReducer.bind(this)
    this.logReformatter = this.logReformatter.bind(this)
    this.sendMessage    = this.sendMessage.bind(this)
    this.handleOverlay  = this.handleOverlay.bind(this)
    this.openEnvEditor  = this.openEnvEditor.bind(this)
    this.openTerminal   = this.openTerminal.bind(this)
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

  async sendMessage(bulk, callback = () => {}) {
    if (this.client.readyState === this.client.OPEN) {
      this.client.send(bulk);
      
      if (typeof callback === 'function') {
        callback();
      }
    } else {
      console.error(`[error] Can't send data`)
      console.error(this.client.readyState)
      console.error(this.client)

      // TODO: AUTO RECONNECT
      window.alert("서버와의 연결이 끊겼습니다.\n\n새로고침 해주세요.");
    }
  }

  componentDidMount() {
    let w3c = WebSocket.w3cwebsocket
    this.client = new w3c(`${WS_CONNECT_PROTOCOL}://${WS_CONNECT_HOST}:${WS_CONNECT_PORT}${WS_CONNECT_PATH}`);

    this.client.onerror = (event) => {
      this.setState({
        webSocketEvent: event
      })
    }

    this.client.onclose = (event) => {
      this.setState({
        webSocketEvent: event
      })
    }

    this.client.onopen = (event) => {
      this.setState({
        webSocketEvent: event
      })
    }

    this.client.onmessage = async (event) => {
      this.setState({ iconVisual: true })

      if (typeof event === 'object' && 'data' in event && typeof event.data === 'string') {
        let recv = JSON.parse(atob(atob(event.data)))
        recv.stdout = decodeURIComponent(recv.stdout)
        recv.stderr = decodeURIComponent(recv.stderr)

        // nginx 로그
        if (recv.namespace === 'nginx.access' || recv.namespace === 'nginx.error') {
          let t = recv.namespace.split('.')

          // reduce log
          await this.logReducer(t[1])

          // reform log message
          recv.chunk = await this.logReformatter(recv.chunk)

          this.setState({
            nginx: update(this.state.nginx, {
              [t[1]]: { $push: [recv.chunk] }
            })
          });
        } 
        // 커맨드에 대한 응답 처리
        else if (recv.namespace === 'vagrant.inven.krapp') {
          this.setState({ "stdout": recv })
          this.setState({
            "consoleLogs": update(this.state.consoleLogs, {
              $push: [recv]
            })
          })
        } 
        // edit env
        else if (recv.namespace === 'vagrant.inven.editor') {
          this.setState({ "dotenvText": recv.stdout })
        }
        // 알 수 없는 메세지
        else {
          console.error(`Unknown Namespace: ${recv.namespace}`, recv)
        }
      }


      if (this._processHideTimer) {
        clearTimeout(this._processHideTimer)
      }

      this._processHideTimer = setTimeout(() => {
        this.setState({ iconVisual: false })
      }, 1300)
    }
  }

  // TODO: 메서드명 변경..
  handleOverlay(toggle) {
    this.setState({ "overlay": !! toggle })
  }

  openEnvEditor() {
    this.setState({ "dotenvText": "(loading..)" })
    this.setState({ "showEditor": !this.state.showEditor })
  }

  openTerminal(toggle = true) {
    this.setState({ "showTerminal": !! toggle })
  }

  toggler(target, toggle = true) {
    this.setState({
      [target]: !! toggle
    })
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />

        <Overlay overlay={this.state.overlay} />

        <EnvEditor 
          sendMessage={this.sendMessage}
          showEditor={this.state.showEditor}
          openEnvEditor={this.openEnvEditor}
          dotenvText={this.state.dotenvText}
          fOverlay={this.handleOverlay}
        />

        <Header webSocketEvent={this.state.webSocketEvent} />

        <Main>
          <Terminal 
            stdout={this.state.stdout} 
            logs={this.state.consoleLogs} 
            fOverlay={this.handleOverlay}
            openTerminal={this.openTerminal}
            showTerminal={this.state.showTerminal}
            terminalAutoCloseSeconds={TERMINAL_AUTO_CLOSE} />

          <Sidebar 
            openEnvEditor={this.openEnvEditor}
            openTerminal={this.openTerminal}
            sendMessage={this.sendMessage} 
            fOverlay={this.handleOverlay} />

          <Content>
            <LogContainer 
              title="access.log" 
              icon="access.log.svg" 
              process={this.state.iconVisual}
              logs={this.state.nginx.access} 
              subtitle="/var/log/nginx/access.log" />

            <LogContainer 
              title="error.log" 
              icon="error.log.svg" 
              process={this.state.iconVisual}
              logs={this.state.nginx.error} 
              subtitle="/var/log/nginx/error.log" />
          </Content>
        </Main>
      </div>
    )
  }
}

export default App