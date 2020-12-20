/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

interface IStyles {
  link: any;
  select: any;
  label: any;
  form: any;
}

export default makeStyles((): IStyles => ({
  link: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1.2rem',
    fontFamily: 'SegoeUI, sans-serif',
    lineHeight: '3rem',
    textDecoration: 'none !important',
    backgroundColor: '#000',
    width: 120,
    height: 50,
    textAlign: 'center',
    border: '2px solid #FFD500',
    borderRadius: '8%',
    fontWeight: 'bold',
    '&:hover': {
      fontWeight: 'bold',
    },
  },
  select: {
    border: '1px solid #000',
    backgroundColor: 'rgba(255,255,255,0.8)',
    width: '600px',
  },
  label: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFD900',
    fontSize: '1.5rem',
    fontFamily: 'SegoeUI, sans-serif',
    marginBottom: 20,
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background: linear-gradient(
    to right,
    rgba(138,43,226,0.1) 0%,
    rgba(138,43,226,0.3) 35%,
    rgba(138,43,226,0.5) 70%,
    rgba(138,43,226, 1)
  );
`;

export const Title = styled(Typography)`
  font-family: Segoe UI;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
`;
