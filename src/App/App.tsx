import React from 'react';
import Appbar from '../Components/Appbar/Appbar';
import Header from '../Components/Header/Header';
import LevelSelect from '../Components/LevelSelect/LevelSelect';

export default (): React.ReactElement<HTMLElement> => (
  <>
    <Appbar />
    <Header />
    <LevelSelect />
  </>
);
