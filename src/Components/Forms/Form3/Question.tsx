/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  InputLabel, RadioGroup, Radio, FormControlLabel,
} from '@material-ui/core';
import { IPrimativeQuestion, IQuestion } from '../../../Interfaces/IQuestion';
import useStyles from '../Styles';

export default (props: IQuestion): React.ReactElement<HTMLElement> => {
  const { content, value } = props;
  const classes = useStyles();

  return (
    <RadioGroup
      aria-label={content.name}
      name={content.name}
      value={value}
      className={classes.radio}
    >
      <span className={classes.title}>{content.question}</span>
      <FormControlLabel value="A" control={<Radio color="primary" />} label={content.answerA} />
      <FormControlLabel value="B" control={<Radio color="primary" />} label={content.answerB} />
      <FormControlLabel value="C" control={<Radio color="primary" />} label={content.answerC} />
      <FormControlLabel value="D" control={<Radio color="primary" />} label={content.answerD} />
    </RadioGroup>
  );
};
