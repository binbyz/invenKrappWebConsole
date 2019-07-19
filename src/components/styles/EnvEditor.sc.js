import styled from 'styled-components';

export const EnvEditorWrap = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 80px;
  left: 645px;
  width: 673px;
  height: 702px;
  background-color: #eee;
  z-index: 1000;
  border: 1px solid #003056;
  box-sizing: border-box;
  display: ${ props => props.showEditor ? 'block' : 'none' };
`