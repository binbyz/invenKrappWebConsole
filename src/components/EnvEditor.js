import React, { PureComponent } from 'react'
import AceEditor from 'react-ace'
import Draggable from 'react-draggable'

import {
  EnvEditorWrap,
  EnvEditorBottom,
  BttnApply,
  BttnClose,
  BttnSaveClose,
  TitleBar,
  Button
} from './styles/EnvEditor.sc'
import idotenv from '../assets/dotenv.png'

import "brace/mode/ruby";
import "brace/theme/github";

export default class EnvEditor extends PureComponent {
  state = {
    "activeDrags": 0
  }

  constructor(props) {
    super(props)

    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)
  }

  onStart() {
    let t = this.state.activeDrags
    this.setState({ "activeDrags": ++t })
  }

  onStop() {
    let t = this.state.activeDrags
    this.setState({ "activeDrags": --t })
  }

  render() {
    const dragHandlers = {
      "onStart": this.onStart,
      "onStop": this.onStop
    }

    return (
      <Draggable handle="#handleMoveable" {...dragHandlers}>
        <EnvEditorWrap showEditor={this.props.showEditor}>
          <TitleBar id="handleMoveable" icon={idotenv}>.env editor</TitleBar>
          <AceEditor
            width="670px"
            height="700px"
            placeholder=""
            mode="ruby"
            theme="github"
            name="edtenv"
            onLoad={this.onLoad}
            onChange={this.onChange}
            fontSize={13}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.props.dotenvText}
            setOptions={
              {
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
              }
            }
          />
        <EnvEditorBottom>
          <BttnClose>
            <Button>Close</Button>
          </BttnClose>
          <BttnApply>
            <Button>Apply</Button>
          </BttnApply>
          <BttnSaveClose>
            <Button>Save Close</Button>
          </BttnSaveClose>
        </EnvEditorBottom>
      </EnvEditorWrap>
    </Draggable>
    )
  }
}