import React, { PureComponent } from 'react';
import styled from 'styled-components';

import ProcessBlockIcon from '../assets/load-block-white.svg';

const Section = styled.section`
  position: relative;
  float: left;
  width: 50%;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  position: relative;
  padding: 50px 20px 30px 160px;
  background: #003C6C url(${ props => props.icon }) no-repeat;
  background-position: 45px 29px;
  background-size: 100px;
  box-sizing: border-box;
  border-left: 1px solid #013259;
`;

const Title = styled.h4`
  font-size: 200%;
  line-height: 220%;
  color: #FFF;
`;

const SubTitle = styled.span`
  color: #FFF;
`;

const Logging = styled.div`
  box-sizing: border-box;
  border-left: 1px solid #eee;
  height: 713px;
  min-height: 713px;
  max-height: 713px;
`;

const StatusBar = styled.div`
  position: relative;
  background-color: #003C6C;
  box-sizing: border-box;
  border-left: 1px solid #013259;
  border-top: 1px solid #013259;
  min-height: 28px;
  max-height: 28px;
`;

const ProcessBlock = styled.span`
  position: absolute;
  right: 5px;
  top: 4px;
  background: url(${props => props.icon}) no-repeat;
  background-position: 0 0;
  background-size: 20px 20px;
  width: 30px;
  height: 30px;
`;

class LogContainer extends PureComponent {
  render() { 
    return (
      <Section>
        <TitleBox icon={require(('../assets/' + this.props.icon))}>
          <Title>{this.props.title}</Title>
          <SubTitle>{this.props.subtitle}</SubTitle>
        </TitleBox>
        <Logging>

        </Logging>
        <StatusBar>
          { this.props.process && <ProcessBlock icon={ProcessBlockIcon} /> }
        </StatusBar>
      </Section>
    );
  }
}
 
export default LogContainer;