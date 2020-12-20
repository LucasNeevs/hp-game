export interface IPrimativeQuestion {
  id: number,
  name: string,
  question: string,
  answerA: string,
  answerB: string,
  answerC: string,
  answerD: string,
}

export interface IQuestion {
  content: IPrimativeQuestion;
  value: unknown;
}
