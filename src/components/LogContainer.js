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
  LogNumber,
  LogText
} from './styles/LogContainer.sc';

class LogContainer extends PureComponent {
  scrollbar;

  componentDidUpdate() {
    this.scrollbar.scrollToBottom();
  }

  render() { 
    const renderLogSplit = (logs) => {
      return logs.map((l, idx) => {
        let _key = idx + 1;

        return (
          <LogLine key={idx}>
            <LogNumber>{_key}</LogNumber>
            <LogText>{l}</LogText>
          </LogLine>
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