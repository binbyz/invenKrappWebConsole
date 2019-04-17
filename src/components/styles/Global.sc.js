import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  body {
    font-size: 12px;
    font-family: 'Roboto', 'Noto Sans KR', 'Open Sans', sans-serif;
  }
  #root, .App { height: 100%; }
  #root aside > div:nth-child(6) {
    margin-top: 100px;
  }

  .emphasis {
    display: inline-block;
    font-weight: bold;
    font-style: normal;
    white-space: pre-wrap;
    word-wrap: normal;
    word-break: keep-all;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 90%;
  }
  .emphasis.error {
    color: #c0341d;
    background-color: #fbe5e1;
  }
  .emphasis.helper {
    padding-right: 16px;
    background: url(${require('../../assets/icons8-help.svg')}) right 50% no-repeat;
    background-size: 15px;
    border-bottom: 1px dashed #929292;
    cursor: pointer;
  }
  .emphasis.stronger {
    background-color: #2f2f2f;
    color: #FFF;
  }
  .emphasis.method {
    margin-left: 5px;
  }
`;

export const Main = styled.main`
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-width: 1920px;
`;

export const Content = styled.article`
  overflow: hidden;
  float: right;
  width: calc(100% - 200px);
  min-width: 1300px;
`;