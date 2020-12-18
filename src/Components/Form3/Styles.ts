import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  main: any;
  radio: any;
  title: any;
  control: any;
  btn: any;
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
      fontFamily: 'Poppins',
    },
    '& .Mui-focused': {
      transition: 'none',
    },
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    fontFamily: 'Poppins',
    marginBottom: '10px',
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
}));
