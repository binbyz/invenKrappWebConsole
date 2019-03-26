import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  float: left;
  width: 50%;
  box-sizing: border-box;
  ${'' /* border-left: 1px solid #eee;
  border-right: 1px solid #eee; */}
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

class LogContainer extends PureComponent {
  render() { 
    return (
      <Section>
        <TitleBox icon={require(('../assets/' + this.props.icon))}>
          <Title>{this.props.title}</Title>
          <SubTitle>{this.props.subtitle}</SubTitle>
        </TitleBox>
      </Section>
    );
  }
}
 
export default LogContainer;