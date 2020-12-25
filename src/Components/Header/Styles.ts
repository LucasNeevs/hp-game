import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import bg from '../../Assets/hog-bg.webp';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Title = styled(Typography)`
  font-family: Segoe UI;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
`;
