export interface IForm {
  id: number;
  name: string;
  surrname: string;
  gender: string;
  age: string;
}

export const initialValues: IForm = {
  id: 0,
  name: '',
  surrname: '',
  gender: '',
  age: new Date().toISOString(),
};

export const dataLogs: IForm[] = [];
