import React, { PureComponent } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import ProcessBlockIcon from '../assets/load-block-white.svg';

import {
  Section,
  TitleBox,
  Title,
  SubTitle,
  Logging,
  StatusBar,
  ProcessBlock,
  LogTable,
  LogLine,
  LogText
} from './LogContainer.sc';

class LogContainer extends PureComponent {
  scrollbar;

  constructor(props) {
    super(props);
    
    this.handleScrollbarUpdate = this.handleScrollbarUpdate.bind(this);
  }

  handleScrollbarUpdate() {
    // console.log(this.scrollbar.scrollToBottom());
  }

  render() { 
    const renderLogSplit = (logs) => {
      return logs.map((l, idx) => {
        let _key = idx + 1;

        return (
          <tr key={_key}>
            <LogLine>{_key}</LogLine>
            <LogText>{l}</LogText>
          </tr>
        );
      });
    };

    return (
      <Section>
        <TitleBox icon={require(('../assets/' + this.props.icon))}>
          <Title>{this.props.title}</Title>
          <SubTitle>{this.props.subtitle}</SubTitle>
        </TitleBox>
        <Logging>
          <Scrollbars 
            ref={(ref) => { this.scrollbar = ref; }}
            onUpdate={this.handleScrollbarUpdate}
            autoHide
            autoHideTimeout={2000}>
            <LogTable>
              <tbody>
                {renderLogSplit(this.props.logs)}
              </tbody>
            </LogTable>
          </Scrollbars>
        </Logging>
        <StatusBar>
          {this.props.process && <ProcessBlock icon={ProcessBlockIcon} />}
        </StatusBar>
      </Section>
    );
  }
}
 
export default LogContainer;