import styled from 'styled-components'

export const TerminalWrap = styled.div`
  position: fixed;
  top: 80px;
  left: 595px;
  width: 40%;
  height: 500px;
  background-color: #eee;
  font-family: Monaco, arial, sans-serif;
  line-height: 120%;
  text-indent: 10px;
  z-index: 1000;
  border: 1px solid #003056;
  box-sizing: border-box;
  display: ${ props => props.showTerminal ? 'block' : 'none' };
`

export const TerminalTitleBar = styled.div`
  line-height: 24px;
  font-size: 14px;
  color: #d1d1d1;
  background: #003c6c url(${ props => props.icon }) 10px 50% no-repeat;
  background-size: 20px 20px;
  text-indent: 28px;
  padding: 5px;
`

export const TerminalInner = styled.section`
  box-sizing: border-box;
  font-size: 12px;
  color: #FFF;
  line-height: 13px;
  font-family: Monaco;
  padding: 15px;
  background-color: #003c6c;
  height: calc(100% - 34px);
`

export const LogRows = styled.div`
  margin-bottom: 15px;
`

export const ErrorText = styled.pre`
  color: #FF0000;
  font-family: Consolas, Monaco, sans-serif;
`

export const PlainText = styled.pre`
  color: #FFF;
  font-family: Consolas, Monaco, sans-serif;
  font-size: 14px;
  line-height: 120%;
`