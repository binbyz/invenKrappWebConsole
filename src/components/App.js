import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
`;

const Main = styled.main`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Content = styled.article`
  float: right;
  width: calc(100% - 200px);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Main>
          <Sidebar />
          <Content>

          </Content>
        </Main>
      </div>
    );
  }
}

export default App;
