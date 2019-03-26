import React, { Component } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import LogContainer from './LogContainer';

import {
  GlobalStyle,
  Main,
  Content
} from './Global.sc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Main>
          <Sidebar />
          <Content>
            <LogContainer 
              title="access.log"
              icon="access.log.svg"
              process={true}
              subtitle="/var/log/nginx/access.log" />

            <LogContainer 
              title="error.log"
              icon="error.log.svg"
              process={true}
              subtitle="/var/log/nginx/error.log"
              />
          </Content>
        </Main>
      </div>
    );
  }
}

export default App;
