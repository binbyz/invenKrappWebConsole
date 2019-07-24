import styled from 'styled-components'

export const EnvEditorWrap = styled.div`
  position: fixed;
  top: 80px;
  left: 645px;
  width: 673px;
  height: auto;
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

export const EnvEditorBottom = styled.ul`
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 5px;
  margin: 0;
  background-color: #003c6c;
  border-color: #003c6c;
  border-style: solid;
  border-width: 0 1px 1px 1px;
`

export const ActionButtons = styled.li`
  float: left
`

export const BttnApply = styled(ActionButtons)`
  float: right;
  & > button {
    background-color: #f6a104;
    border-color: #c17d00;
  }
`

export const BttnClose = styled(ActionButtons)`
  float: left;
`

export const StatusMessage = styled(ActionButtons)`
  float: left;
  color: #FFF;
  line-height: 32px;
  margin-left: 10px;
`

export const BttnSaveClose = styled(ActionButtons)`
  float: right;
  margin-right: 5px;
`

export const Button = styled.button`
  background-color: #0071cb;
  border-color: #0078d7;
  border-style: solid;
  -webkit-font-smoothing: antialiased;
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  display: inline-block;
  height: 32px;
  min-width: 80px;
  padding: 4px 20px 6px;
`