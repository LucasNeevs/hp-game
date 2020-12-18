/* eslint-disable no-alert */
import { IForm } from '../Interfaces/IForm';

export const VerifyAnswer = (values: IForm): void => {
  let value = 0;

  if (values.questionA === 'A') value += 10;
  if (values.questionB === 'A') value += 10;
  if (values.questionC === 'C') value += 10;
  if (values.questionD === 'A') value += 10;
  if (values.questionE === 'D') value += 10;
  if (values.questionF === 'C') value += 10;
  if (values.questionG === 'C') value += 10;
  if (values.questionH === 'C') value += 10;
  if (values.questionI === 'B') value += 10;
  if (values.questionJ === 'A') value += 10;

  switch (value) {
    case 10: {
      alert('Acertou 1');
      window.location.reload();
      break;
    }
    case 20: {
      alert('Acertou 2');
      window.location.reload();
      break;
    }
    case 30: {
      alert('Acertou 3');
      window.location.reload();
      break;
    }
    case 40: {
      alert('Acertou 4');
      window.location.reload();
      break;
    }
    case 50: {
      alert('Acertou 5');
      window.location.reload();
      break;
    }
    case 60: {
      alert('Acertou 6');
      window.location.reload();
      break;
    }
    case 70: {
      alert('Acertou 7');
      window.location.reload();
      break;
    }
    case 80: {
      alert('Acertou 8');
      window.location.reload();
      break;
    }
    case 90: {
      alert('Acertou 9');
      window.location.reload();
      break;
    }
    case 100: {
      alert('Acertou TUDO, parabéns!');
      window.location.reload();
      break;
    }
    default: {
      alert('Errrrrrrrrrou!');
      window.location.reload();
    }
  }
};

export const VerifyHat = (values: IForm): void => {
  let value = 0;

  if (values.questionA === 'A') value += 10;
  if (values.questionB === 'A') value += 10;
  if (values.questionC === 'C') value += 10;
  if (values.questionD === 'A') value += 10;
  if (values.questionE === 'D') value += 10;
  if (values.questionF === 'C') value += 10;
  if (values.questionG === 'C') value += 10;
  if (values.questionH === 'C') value += 10;
  if (values.questionI === 'B') value += 10;
  if (values.questionJ === 'A') value += 10;

  switch (value) {
    case 10: {
      alert('Lufa-Lufa');
      window.location.reload();
      break;
    }
    case 20: {
      alert('Lufa-Lufa');
      window.location.reload();
      break;
    }
    case 30: {
      alert('Corvinal');
      window.location.reload();
      break;
    }
    case 40: {
      alert('Corvinal');
      window.location.reload();
      break;
    }
    case 50: {
      alert('Corvinal');
      window.location.reload();
      break;
    }
    case 60: {
      alert('Sonserina');
      window.location.reload();
      break;
    }
    case 70: {
      alert('Sonserina');
      window.location.reload();
      break;
    }
    case 80100: {
      alert('Grifinória');
      window.location.reload();
      break;
    }
    case 90: {
      alert('Grifinória');
      window.location.reload();
      break;
    }
    case 100: {
      alert('Grifinória');
      window.location.reload();
      break;
    }
    default: {
      alert('Lufa-Lufa');
      window.location.reload();
    }
  }
};
