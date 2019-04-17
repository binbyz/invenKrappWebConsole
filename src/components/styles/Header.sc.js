import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: relative;
  background: #003056;
  height: 50px;
  box-sizing: border-box;
  cursor: default;
`;

export const LogoBox = styled.div`
 float: left;
 width: 200px;
 height: 100%;
 text-align: center;
 background-color: #003C6C;
 color: #FFF;
 font-size: 150%;
 padding-top: 8px;
 box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 30px;
  vertical-align: -7px;
  margin-right: 10px;
`;

export const WebSocketStatusText = styled.span`
  display: inline-block;
  font-size: 120%;
  color: #FFF;
  margin-top: 12px;
  margin-left: 20px;
  text-indent: 30px;
  background: url(${props => props.icon}) no-repeat;
  background-size: 23px;
  backgkround-position: 0 0;
`;