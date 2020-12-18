import React from 'react';
import { Typography } from '@material-ui/core';
import { DataGame } from '../../Interfaces/IDataGame';
import * as S from './Styles';

import titleIMG from '../../Assets/hp-title.png';

export default (): React.ReactElement<HTMLElement> => {
  const { title, subtitle } = DataGame;

  return (
    <S.Container>
      <img src={titleIMG} alt="title" width="450px" />
      <S.Title
        variant="h6"
        align="center"
      >
        {subtitle}
      </S.Title>
    </S.Container>
  );
};
