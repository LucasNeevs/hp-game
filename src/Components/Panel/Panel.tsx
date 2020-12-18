import React, { useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody,
} from '@material-ui/core';
import Moment from 'moment';
import { IForm, dataLogs } from '../../Interfaces/ILogin';

export default (): React.ReactElement<HTMLElement> => {
  const [state] = useState(dataLogs);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surrname</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            state.map((s: IForm): React.ReactElement<HTMLElement> => (
              <TableRow>
                <TableCell>{s.id}</TableCell>
                <TableCell>{s.name}</TableCell>
                <TableCell>{s.surrname}</TableCell>
                <TableCell>{s.gender}</TableCell>
                <TableCell>{Moment(s.age).format('MM Do YYYY')}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </>
  );
};
