import styled from 'styled-components';

export const EnvEditorWrap = styled.div`
  position: fixed;
  top: 80px;
  left: 645px;
  width: 673px;
  height: 736px;
  background-color: #eee;
  z-index: 1000;
  border: 1px solid #003056;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, .2) 0 0 9px 3px;
  display: ${ props => props.showEditor ? 'block' : 'none' };
`

export const TitleBar = styled.div`
  line-height: 24px;
  font-size: 14px;
  color: #FFF;
  background: #003c6c url(${ props => props.icon }) 10px 50% no-repeat;
  background-size: 20px 20px;
  text-indent: 30px;
  padding: 5px;
  cursor: move;
`