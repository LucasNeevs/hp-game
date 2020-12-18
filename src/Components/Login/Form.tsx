/* eslint-disable @typescript-eslint/no-explicit-any */
import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { FormikProps, withFormik } from 'formik';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import {
  Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button,
} from '@material-ui/core';
import { IGender, Genders } from '../../Interfaces/IGenders';
import useStyles from './Styles';
import Panel from '../Panel/Panel';
import { IForm, initialValues, dataLogs } from '../../Interfaces/ILogin';

const MyForm = (props: FormikProps<IForm>): React.ReactElement<HTMLElement> => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleReset,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = props;
  const classes = useStyles();

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.main}>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justify="center"
            >
              <Grid item md={6} xs={12}>
                <TextField
                  id="name"
                  name="name"
                  title="name"
                  label="name"
                  margin="dense"
                  variant="outlined"
                  value={values.name}
                  helperText={(touched.name && errors.name) && errors.name}
                  error={touched.name as any && errors.name as any}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  id="surrname"
                  name="surrname"
                  title="SurrName"
                  label="SurrName"
                  margin="dense"
                  variant="outlined"
                  value={values.surrname}
                  helperText={(touched.surrname && errors.surrname) && errors.surrname}
                  error={touched.surrname as any && errors.surrname as any}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl margin="dense" variant="outlined" fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {
                      Genders.map((g: IGender): React.ReactElement<HTMLElement> => (
                        <MenuItem key={g.id} value={g.id}>
                          {g.name}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <KeyboardDatePicker
                  id="age"
                  name="age"
                  label="Age"
                  format="MM/dd/yyyy"
                  margin="dense"
                  variant="dialog"
                  value={values.age}
                  onBlur={handleBlur}
                  onChange={(value: any): void => {
                    setFieldValue('age', value.toISOString());
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={6}>
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
              </Grid>
            </Grid>
          </form>
        </div>
      </MuiPickersUtilsProvider>

      <Panel />
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
    dataLogs.push({
      id: dataLogs.length + 1,
      name: values.name,
      surrname: values.surrname,
      gender: values.gender,
      age: values.age,
    });
    resetForm();
    setSubmitting(false);
  },
})(MyForm);
