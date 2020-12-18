import React from 'react';
import Appbar from '../Components/Appbar/Appbar';
import Header from '../Components/Header/Header';
import Subheader from '../Components/SubHeader/Subheader';
import Form from '../Components/Form/Form';
import useStyles from './Styles';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <>
      <Appbar />
      <Header />
      <Subheader />
      {/* <Form /> */}
    </>
  );
};
