import React, { Component } from 'react';
import styled from 'styled-components';

const Command = styled.div`
  text-align: center;
  margin: 40px auto;
  padding: 10px;
  width: 100px;
  box-sizing: border-box;
`;

const BrowserCommand = styled(Command)`
  overflow: hidden;
  margin: 5px auto;
  width: 60%;
  padding: 0px;
`;

const CommandIcon = styled.img`
  width: 70px;
  cursor: pointer;
`;

const BrowserIcon = styled(CommandIcon)`
  float: left;
  width: 24px;
`;

const Text = styled.span`
  display: block;
  color: #FFF;
  margin-top: 10px;
`;

const BrowserText = styled(Text)`
  float: left;
  margin-top: 7px;
  margin-left: 5px;
  cursor: pointer;
`;

class ShellO extends Component {

  componentWillMount() {
    console.log(this.props.data);
  }

  render() {
    const getIconPath = (data) => {
      return require ('../assets/' + data.namespace + '.' + data.command + '.svg');
    }
    
    return (
      <div>
        {
          (this.props.data.namespace === 'vagrant.inven.krapp') ? (
            <Command>
              <CommandIcon src={getIconPath(this.props.data)} alt={this.props.data.description} />
              <Text>{this.props.data.description}</Text>
            </Command>
          ) : (
            <BrowserCommand>
              <BrowserIcon src={getIconPath(this.props.data)} alt={this.props.data.description} />
              <BrowserText>{this.props.data.description}</BrowserText>
            </BrowserCommand>
          )
        }
      </div>
    );
  };
}

export default ShellO;