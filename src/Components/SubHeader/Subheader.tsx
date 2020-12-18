import React, { ReactElement, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import {
  FormControl, Grid, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import Form1 from '../Form/Form';
import Form2 from '../Form2/Form';
import Form3 from '../Form3/Form';
import Form4 from '../Form4/Form';
import useStyles, * as S from './Styles';

export interface ILevel {
  id: number;
  value: string;
  name: string;
}

const optionsLevel: ILevel[] = [
  {
    id: 1,
    value: '/form1',
    name: 'Easy',
  },
  {
    id: 2,
    value: '/form2',
    name: 'Medium',
  },
  {
    id: 3,
    value: '/form3',
    name: 'Hard',
  },
  {
    id: 4,
    value: '/form4',
    name: 'UltraHard',
  },
];

export default (): ReactElement => {
  const [data, setData] = useState('');
  const classes = useStyles();

  const handleChange = (evt: React.ChangeEvent<any>): void => {
    setData(evt.target.value);
  };

  return (
    <>
      <Router>
        <S.Container>
          <InputLabel className={classes.label}>Select level</InputLabel>
          <Select
            id="level"
            name="level"
            label="Select level"
            title="Select a level to play"
            margin="dense"
            variant="outlined"
            value={data}
            onChange={handleChange}
            className={classes.select}
          >
            {
              optionsLevel.map((opt: ILevel): ReactElement<ILevel> => (
                <MenuItem key={opt.id} value={opt.id}>
                  <Link
                    to={`${opt.value}`}
                    className={classes.link}
                  >
                    {opt.name}
                  </Link>
                </MenuItem>
              ))
            }
          </Select>
          {/* <FormControl
            margin="dense"
            variant="outlined"
            className={classes.form}
            fullWidth
          >
            <InputLabel className={classes.label}>Select level</InputLabel>
            <Select
              id="level"
              name="level"
              label="Select level"
              title="Select a level to play"
              value={data}
              onChange={handleChange}
              className={classes.select}
            >
              {
                optionsLevel.map((opt: ILevel): ReactElement<ILevel> => (
                  <MenuItem key={opt.id} value={opt.id}>
                    <Link
                      to={`${opt.value}`}
                      className={classes.link}
                    >
                      {opt.name}
                    </Link>
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl> */}
        </S.Container>

        <Switch>
          <Route exact path="/form1">
            <Form1 />
          </Route>
          <Route path="/form2">
            <Form2 />
          </Route>
          <Route path="/form3">
            <Form3 />
          </Route>
          <Route path="/form4">
            <Form4 />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
