import React, { Component } from 'react';
import styled from 'styled-components';

const Command = styled.div`
  text-align: center;
  margin: 40px auto;
  padding: 10px;
  width: 100px;
  box-sizing: border-box;
`;

const CommandIcon = styled.img`
  width: 70px;
  cursor: pointer;
`;

const Text = styled.span`
  display: block;
  color: #FFF;
  margin-top: 10px;
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
        <Command>
          <CommandIcon src={getIconPath(this.props.data)} alt={this.props.data.description} />
          <Text>{this.props.data.description}</Text>
        </Command>       
      </div>
    );
  };
}

export default ShellO;