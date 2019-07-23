import React, { PureComponent } from 'react'
import AceEditor from 'react-ace'

import {
  EnvEditorWrap,
  TitleBar
} from './styles/EnvEditor.sc'
import idotenv from '../assets/dotenv.png'

import "brace/mode/ruby";
import "brace/theme/github";

export default class EnvEditor extends PureComponent {
  componentDidUpdate() {
    // this.props.fOverlay(true)
  }

  render() {
    return (
      <EnvEditorWrap showEditor={this.props.showEditor}>
        <TitleBar icon={idotenv}>.env editor</TitleBar>
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
    </EnvEditorWrap>
    )
  }
}