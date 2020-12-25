/* eslint-disable no-alert */
import React, { ReactElement, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link, BrowserRouter,
} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Form1 from '../Forms/Form1/Form';
import Form2 from '../Forms/Form2/Form';
import Form3 from '../Forms/Form3/Form';
import Form4 from '../Forms/Form4/Form';
import optionsLevel from '../../Utils/Routes';
import { ILevel } from '../../Interfaces/IRouter';
import useStyles, * as S from './Styles';

export default (): ReactElement => {
  const [data, setData] = useState('');
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (evt: React.ChangeEvent<any>): void => {
    setData(evt.target.value);
  };

  return (
    <>
      <BrowserRouter>
        <S.Container>
          <Typography className={classes.label}>Select level</Typography>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}>
            {
              optionsLevel.map((opt: ILevel): ReactElement => (
                <Link
                  key={opt.id}
                  to={opt.value}
                  className={classes.link}
                  onClick={(): void => alert(opt.text)}
                >
                  {opt.name}
                </Link>
              ))
            }
          </div>
        </S.Container>
        <Switch>
          <Route exact path="/form1" component={Form1} />
          <Route exact path="/form2" component={Form2} />
          <Route exact path="/form3" component={Form3} />
          <Route exact path="/form4" component={Form4} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
