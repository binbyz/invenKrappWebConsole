import React, { PureComponent } from 'react';

import ProcessBlockIcon from '../assets/load-block-white.svg';

import {
  Section,
  TitleBox,
  Title,
  SubTitle,
  Logging,
  StatusBar,
  ProcessBlock,
  LogPane,
  LogTable,
  LogLine,
  LogText
} from './LogContainer.sc';

class LogContainer extends PureComponent {
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
          <LogPane>
            <LogTable>
              <tbody>
                {renderLogSplit(this.props.logs)}
              </tbody>
            </LogTable>
          </LogPane>
        </Logging>
        <StatusBar>
          {this.props.process && <ProcessBlock icon={ProcessBlockIcon} />}
        </StatusBar>
      </Section>
    );
  }
}
 
export default LogContainer;