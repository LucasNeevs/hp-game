import { AppBar, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Nav = styled(AppBar)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 50px;
  padding: 0px 10px;
  background: linear-gradient(
    to right,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.6) 25%,
    rgba(0,0,0,0.3) 50%,
    transparent
  ) !important;
`;

export const Title = styled(Typography)`
  color: transparent;
  font-weight: 900;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(255,255,255,0.8);
`;
