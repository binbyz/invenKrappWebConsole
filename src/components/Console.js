import React, { PureComponent } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import ProcessBlockIcon from '../assets/load-block-white.svg';

import { 
  ConsoleWrap,
  ConsoleTitleBar,
  ConsoleInner,
  LogRows,
  ErrorText,
  PlainText
} from './styles/Termianl.sc'

export default class Console extends PureComponent {
  scrollbar
  fCallbackAutoClose
  fCallbackTimer

  componentWillUpdate() {
    clearTimeout(this.fCallbackTimer)
  }

  componentDidUpdate() {
    this.scrollbar.scrollToBottom();

    if (typeof this.fCallbackAutoClose === 'function') {
      this.fCallbackTimer = setTimeout(
        this.fCallbackAutoClose, 
        this.props.terminalAutoCloseSeconds
      )
    }
  }

  render() {
    const renderLogSplit = (logs) => {
      let autoCloseSeconds = Math.floor(this.props.terminalAutoCloseSeconds / 1000)
      let doneTextStyle = {
        "color": "#f6f600",
        "fontWeight": "700"
      }

      let autoCloseTextStyle = { "fontStyle": "italic", "color": "#b7b7b7" }

      this.fCallbackAutoClose = (! String(this.props.stdout.stderr).trim().length)
                                ? () => { this.props.fOverlay(false) }
                                : null
     
      return logs.map((log, idx) => {
        let PlainOrError = log.stderr.length 
                            ? <ErrorText>{log.stderr}</ErrorText> 
                            : <PlainText>{log.stdout}</PlainText>

        return (
          <LogRows key={idx}>
            <div>&gt; {log.command} ..{<em style={doneTextStyle}>done</em>}</div>
            {PlainOrError}
            {
              (typeof this.fCallbackAutoClose === 'function') 
                ? <div style={autoCloseTextStyle}>... 약 {autoCloseSeconds}초 후 자동으로 닫힙니다.</div>
                : <div>[X] 정상적으로 실행되지 않았습니다.</div>
            }
          </LogRows>
        )
      })
    }

    return (
      <ConsoleWrap overlay={this.props.overlay}>
        <ConsoleTitleBar
          icon={ ProcessBlockIcon }>Terminal</ConsoleTitleBar>
        <ConsoleInner>
          <Scrollbars ref={(ref) => { this.scrollbar = ref; }} autoHide autoHideTimeout={2000}>
            { renderLogSplit(this.props.logs) }
          </Scrollbars>
        </ConsoleInner>
      </ConsoleWrap>
    )
  }
}