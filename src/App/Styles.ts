/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: any;
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    backgroundColor: '#131339',
    padding: theme.spacing(2),
  },
}));
