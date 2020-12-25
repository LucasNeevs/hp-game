import { ILevel } from '../Interfaces/IRouter';

const optionsLevel: ILevel[] = [
  {
    id: 1,
    value: '/form1',
    name: 'Easy',
    text: 'Hmmm, certo! Você escolheu o nível mais fácil. Vamos ver do que é capaz! 👶🍼',
  },
  {
    id: 2,
    value: '/form2',
    name: 'Medium',
    text: 'Nível médio? Tem certeza? Você não parece saber tanto assim...estou curioso para ver como vai se sair! 🎃😏',
  },
  {
    id: 3,
    value: '/form3',
    name: 'Hard',
    text: 'Certo. Você é uma pessoa muito confiante. Mais cuidado! Você pode acabar se queimando...boa sorte! 🔥😡🔥',
  },
  {
    id: 4,
    value: '/form4',
    name: 'UltraHard',
    text: 'O mais difícil. Com certeza você é um(a) auror(a) infiltrado(a). Mas acredite, não vou facilitar para você! 🌪⚡🧙‍♂🔥☄',
  },
];

export default optionsLevel;
