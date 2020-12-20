/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FormikProps, withFormik } from 'formik';
import {
  Grid, InputLabel, Button, RadioGroup, Radio, FormLabel, FormControlLabel, FormControl, Typography,
} from '@material-ui/core';
import Panel from '../../Panel/Panel';
import { IGender, Genders } from '../../../Interfaces/IGenders';
import { dataPanel } from '../../Panel/IPanel';
import { IForm, initialValues } from '../../../Interfaces/IForm';
import { IQuestion, Questions } from '../../../Interfaces/IQuestion';
import { VerifyHat } from '../../../Utils/Verify';
import useStyles from '../Styles';
import Question from './Question';

const MyForm = (props: FormikProps<IForm>): React.ReactElement<HTMLElement> => {
  const classes = useStyles();
  const {
    values,
    handleChange,
    handleBlur,
    handleReset,
    handleSubmit,
    isSubmitting,
  } = props;

  const questionValues = ['A', 'B', 'C', 'D'];

  return (
    <>
      <div className={classes.main}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.grid}
          >
            <Typography
              variant="h1"
              component="p"
              align="center"
              className={classes.upTitle}
            >
              LEVEL: HARD
            </Typography>
            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[0]}
                  value={values.questionA}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[1]}
                  value={values.questionB}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[2]}
                  value={values.questionC}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[3]}
                  value={values.questionD}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[4]}
                  value={values.questionE}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[5]}
                  value={values.questionF}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[6]}
                  value={values.questionG}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[7]}
                  value={values.questionH}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[8]}
                  value={values.questionI}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={Questions[9]}
                  value={values.questionJ}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12} className={classes.btn}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                fullWidth
              >
                Complete
              </Button>
              <Button
                variant="contained"
                color="default"
                onClick={handleReset}
                fullWidth
              >
                Reset
              </Button>
            </Grid>

            {/* <Grid item md={6} xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                fullWidth
              >
                Click
              </Button>
            </Grid>
            <Grid item md={6} xs={6}>
              <Button
                variant="contained"
                color="default"
                onClick={handleReset}
                fullWidth
              >
                Reset
              </Button>
            </Grid> */}
          </Grid>
        </form>
      </div>
    </>
  );
};

export default withFormik({
  displayName: 'Form',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => (initialValues),
  handleSubmit: (values: IForm, { resetForm, setSubmitting }): void => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
    dataPanel.push({
      questionA: values.questionA,
      questionB: values.questionB,
      questionC: values.questionC,
      questionD: values.questionD,
      questionE: values.questionE,
      questionF: values.questionF,
      questionG: values.questionG,
      questionH: values.questionH,
      questionI: values.questionI,
      questionJ: values.questionJ,
    });
    VerifyHat(values);
    resetForm();
    setSubmitting(false);
  },
})(MyForm);
