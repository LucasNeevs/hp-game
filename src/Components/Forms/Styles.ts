import { Theme, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

interface IStyles {
  main: any;
  radio: any;
  title: any;
  upTitle: any;
  control: any;
  btn: any;
  confirmBtn: any;
  resetBtn: any;
  grid: any;
  hatImg: any;
  containerHat: any;
}

export default makeStyles((theme: Theme): IStyles => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '20px 0px',
    color: '#fff',
  },
  radio: {
    '& .MuiRadio-root': {
      color: '#ff7826',
    },
    '& .MuiFormControlLabel-root': {
      cursor: 'default !important',
    },
    margin: '10px 0px',
    '& span': {
      fontFamily: 'SegoeUI, sans-serif',
    },
    '& .Mui-focused': {
      transition: 'none',
    },
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    fontFamily: 'SegoeUI, sans-serif',
    marginBottom: '10px',
  },
  upTitle: {
    color: 'red',
    fontSize: 50,
    fontFamily: 'SegoeUI, sans-serif',
    padding: 20,
  },
  control: {
    marginBottom: '15px',
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    padding: theme.spacing(2),
    '@media(max-width: 767px)': {
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
  },
  confirmBtn: {
    backgroundColor: '#ff7826',
    borderColor: '#ff7111',
    width: 200,
    height: 50,
    fontWeigth: 'bold',
  },
  resetBtn: {
    backgroundColor: '#c9c9c9',
    borderColor: '#a1a1a1',
    width: 200,
    height: 50,
    fontWeigth: 'bold',
  },
  grid: {
    padding: '0px 100px',
  },
  hatImg: {
    width: 100,
    height: 120,
  },
  containerHat: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-20px',
    padding: 30,
  },
}));
