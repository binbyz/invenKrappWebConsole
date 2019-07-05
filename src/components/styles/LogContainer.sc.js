import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  float: left;
  width: 50%;
  box-sizing: border-box;
  height: 100%
`;

export const TitleBox = styled.div`
  position: relative;
  padding: 50px 20px 30px 160px;
  background: #003C6C url(${ props => props.icon }) no-repeat;
  background-position: 45px 29px;
  background-size: 100px;
  box-sizing: border-box;
  border-left: 1px solid #013259;
`;

export const Title = styled.h4`
  font-size: 200%;
  line-height: 220%;
  color: #FFF;
`;

export const SubTitle = styled.span`
  color: #FFF;
`;

export const Logging = styled.div`
  box-sizing: border-box;
  border-left: 1px solid #eee;
  height: calc(100% - 50px - 146px - 28px);
`;

export const StatusBar = styled.div`
  position: relative;
  background-color: #003C6C;
  box-sizing: border-box;
  border-left: 1px solid #013259;
  border-top: 1px solid #013259;
  min-height: 28px;
  max-height: 28px;
`;

export const ProcessBlock = styled.span`
  position: absolute;
  right: 5px;
  top: 4px;
  background: url(${props => props.icon}) no-repeat;
  background-position: 0 0;
  background-size: 20px 20px;
  width: 30px;
  height: 30px;
`;

export const LogPane = styled.div`
  width: 100%;
  height: 713px;
  max-height: 713px;
  min-height: 713px;
  overflow: scroll;
`;

export const LogTable = styled.table`
  tab-size: 8;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
`;

export const LogLine = styled.tr`
  &:nth-child(2n) {
    background-color: #eee;
  }
`;

export const LogNumber = styled.td`
  font-family: Consolas;
  text-align: right;
  padding-right: 20px;
  color: rgba(27,31,35,.3);
  width: 20px;
  user-select: none;
  background-color: #FFF !important;
`;

export const LogText = styled.td`
  font-family: Consolas;
  font-size: 110%;
  padding: 10px;
  word-break: break-all;
`;