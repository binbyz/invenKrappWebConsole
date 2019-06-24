import React, { PureComponent } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import { 
  ConsoleWrap,
  ConsoleTitleBar,
  ConsoleInner
} from './styles/Termianl.sc'

export default class Console extends PureComponent {
  scrollbar

  componentDidUpdate() {
    this.scrollbar.scrollToBottom();
  }

  render() {
    return (
      <ConsoleWrap>
        <ConsoleTitleBar>&gt; reloadall 실행됨</ConsoleTitleBar>
        <ConsoleInner>
          <Scrollbars ref={(ref) => { this.scrollbar = ref; }} autoHide autoHideTimeout={2000}>
          </Scrollbars>
        </ConsoleInner>
      </ConsoleWrap>
    )
  }
}