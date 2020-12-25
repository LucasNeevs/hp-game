/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FormikProps, withFormik } from 'formik';
import {
  Grid, Button, FormControl, Typography,
} from '@material-ui/core';
import { dataPanel } from '../../Panel/IPanel';
import { IForm, initialValues } from '../../../Interfaces/IForm';
import { VerifyHat } from './Verify';
import useStyles from '../Styles';
import Question from './Question';
import QuestionsMedium from './Questions.data';
import HatIMG from '../../../Assets/pnghat.png';

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
              LEVEL: MEDIUM
            </Typography>
            <Grid md={12} xs={12} className={classes.containerHat}>
              <img
                alt="selector-hat"
                src={HatIMG}
                className={classes.hatImg}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <FormControl
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <Question
                  content={QuestionsMedium[0]}
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
                  content={QuestionsMedium[1]}
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
                  content={QuestionsMedium[2]}
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
                  content={QuestionsMedium[3]}
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
                  content={QuestionsMedium[4]}
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
                  content={QuestionsMedium[5]}
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
                  content={QuestionsMedium[6]}
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
                  content={QuestionsMedium[7]}
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
                  content={QuestionsMedium[8]}
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
                  content={QuestionsMedium[9]}
                  value={values.questionJ}
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12} className={classes.btn}>
              <Button
                type="submit"
                variant="contained"
                className={classes.confirmBtn}
                disabled={isSubmitting}
                fullWidth
              >
                Complete
              </Button>
              <Button
                variant="contained"
                color="default"
                className={classes.resetBtn}
                onClick={handleReset}
                fullWidth
              >
                Reset
              </Button>
            </Grid>
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
