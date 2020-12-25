/* eslint-disable no-alert */
import { IForm } from '../../../Interfaces/IForm';

export const VerifyHat = (values: IForm): void => {
  let value = 0;

  if (values.questionA === 'A') value += 10;
  if (values.questionB === 'B') value += 10;
  if (values.questionC === 'C') value += 10;
  if (values.questionD === 'C') value += 10;
  if (values.questionE === 'A') value += 10;
  if (values.questionF === 'C') value += 10;
  if (values.questionG === 'C') value += 10;
  if (values.questionH === 'D') value += 10;
  if (values.questionI === 'A') value += 10;
  if (values.questionJ === 'D') value += 10;

  switch (value) {
    case 10: {
      alert('1/10 -> Lufa-Lufa');
      window.location.reload();
      break;
    }
    case 20: {
      alert('2/10 -> Lufa-Lufa');
      window.location.reload();
      break;
    }
    case 30: {
      alert('3/10 -> Lufa-Lufa');
      window.location.reload();
      break;
    }
    case 40: {
      alert('4/10-> Lufa-Lufa');
      window.location.reload();
      break;
    }
    case 50: {
      alert('5/10 -> Lufa-Lufa');
      window.location.reload();
      break;
    }
    case 60: {
      alert('6/10 -> Sonserina');
      window.location.reload();
      break;
    }
    case 70: {
      alert('7/10 -> Sonserina');
      window.location.reload();
      break;
    }
    case 80: {
      alert('8/10 -> Corvinal');
      window.location.reload();
      break;
    }
    case 90: {
      alert('9/10 -> Grifinória');
      window.location.reload();
      break;
    }
    case 100: {
      alert('10/10 -> Grifinória');
      window.location.reload();
      break;
    }
    default: {
      alert('Lufa-Lufa');
      window.location.reload();
    }
  }
};
