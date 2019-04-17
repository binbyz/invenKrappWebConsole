import styled from 'styled-components';

export const Command = styled.div`
  text-align: center;
  margin: 20px auto;
  padding: 10px;
  width: 100px;
  box-sizing: border-box;

  &:hover {
    background-color: #003056;
  }
`;

export const BrowserCommand = styled(Command)`
  overflow: hidden;
  margin: 5px auto;
  width: 60%;
  padding: 0px;
  
  &:hover {
    background-color: #004881;
  }
`;

export const CommandIcon = styled.img`
  width: 70px;
  cursor: pointer;
`;

export const BrowserIcon = styled(CommandIcon)`
  float: left;
  width: 24px;
`;

export const Text = styled.span`
  display: block;
  color: #FFF;
  margin-top: 10px;
`;

export const BrowserText = styled(Text)`
  float: left;
  margin-top: 7px;
  margin-left: 5px;
  cursor: pointer;
`;