import { Theme, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

interface IStyles {
  main: any;
  radio: any;
  title: any;
  upTitle: any;
  control: any;
  btn: any;
  grid: any;
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
    padding: theme.spacing(2),
    '@media(max-width: 767px)': {
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
  },
  grid: {
    padding: '0px 100px',
  },
}));
