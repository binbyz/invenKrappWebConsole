import styled from 'styled-components'

export const ConsoleWrap = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 80px;
  left: 595px;
  width: 40%;
  height: 750px;
  background-color: #eee;
  font-family: Monaco, arial, sans-serif;
  line-height: 120%;
  text-indent: 10px;
  z-index: 99;
  border: 1px solid #003056;
  box-sizing: border-box;
`

export const ConsoleTitleBar = styled.div`
  line-height: 24px;
  font-size: 14px;
  color: #FFF;
  background-color: #004881;
`

export const ConsoleInner = styled.section`
  box-sizing: border-box;
  font-size: 12px;
  color: #FFF;
  line-height: 13px;
  font-family: Monaco;
  padding: 15px;
  background-color: #dfdfdf;
  height: calc(100% - 24px);
`