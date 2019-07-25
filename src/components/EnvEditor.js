import React, { Component } from 'react'
import AceEditor from 'react-ace'
import Draggable from 'react-draggable'

import {
  SIDEBAR_EXECUTION_LIST,
  SO_TYPE_EDITOR
} from '../Constants'

import {
  EnvEditorWrap,
  EnvEditorBottom,
  BttnApply,
  BttnClose,
  BttnSaveClose,
  TitleBar,
  Button,
  StatusMessage
} from './styles/EnvEditor.sc'
import idotenv from '../assets/dotenv.png'

import {
  messageMassage
} from '../utils';

import "brace/mode/ruby"
import "brace/theme/github"
import 'brace/ext/searchbox'

export default class EnvEditor extends Component {
  data
  state = {
    "activeDrags": 0,
    "statusMessage": "",
    "newValue": ""
  }

  constructor(props) {
    super(props)

    this.data = SIDEBAR_EXECUTION_LIST.find( v => v.type === SO_TYPE_EDITOR)
    this.aceEditor = React.createRef()
    this.diffValue = this.props.dotenvText

    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)
    this.saveData = this.saveData.bind(this)
  }

  onStart() {
    let t = this.state.activeDrags
    this.setState({ "activeDrags": ++t })
  }

  onStop() {
    let t = this.state.activeDrags
    this.setState({ "activeDrags": --t })
  }

  saveData(callback = null) {
    let clone = Object.assign({}, this.data)
    clone.command = clone.command.concat('@write')
    clone.extra = {
      "editorValue": encodeURIComponent(this.state.newValue || this.props.dotenvText)
    }

    this.props.sendMessage(
      messageMassage(clone), 
      typeof callback === 'function' ? callback : null
    )
  }

  render() {
    const dragHandlers = {
      "onStart": this.onStart,
      "onStop": this.onStop
    }

    const onChange = (newValue) => {
      this.setState({
        "statusMessage": "[!] Not Saved",
        "newValue": newValue
      })
    }

    return (
      <Draggable handle="#handleMoveable" {...dragHandlers}>
        <EnvEditorWrap showEditor={this.props.showEditor}>
          <TitleBar id="handleMoveable" icon={idotenv}>.env editor</TitleBar>
          <AceEditor
            ref={this.aceEditor}
            width="670px"
            height="700px"
            placeholder=""
            mode="ruby"
            theme="github"
            name="edtenv"
            fontSize={13}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.state.newValue || this.props.dotenvText}
            setOptions={
              {
                showLineNumbers: true,
                tabSize: 2,
              }
            }
            editorProps={{
              $blockScrolling: Infinity
            }}
            onChange={ (newValue) => {
                onChange(newValue)
              }
            }
          />
        <EnvEditorBottom>
          <BttnClose>
            <Button onClick={ () => this.props.openEnvEditor(false) }>Close</Button>
          </BttnClose>
          <StatusMessage>{this.state.statusMessage}</StatusMessage>
          <BttnApply>
            <Button onClick={ () => {
                this.saveData(() => {
                  this.setState({ "statusMessage": "saved !!" })
                }) 
              }
            }>Apply</Button>
          </BttnApply>
          <BttnSaveClose>
            <Button onClick={ 
              () => {
                this.saveData(() => {
                  this.props.openEnvEditor(false)
                })
              } 
            }>Save Close</Button>
          </BttnSaveClose>
        </EnvEditorBottom>
      </EnvEditorWrap>
    </Draggable>
    )
  }
}