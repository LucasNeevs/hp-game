import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  main: any;
}

export default makeStyles((theme: Theme): IStyles => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
    width: '100%',
  },
}));
