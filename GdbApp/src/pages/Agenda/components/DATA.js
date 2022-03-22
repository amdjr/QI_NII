import * as React from 'react';
import 'react-native';

const DATA = [
  {
    title: 'Janeiro',
    data: ['Encerrado'],
  },
  {
    title: 'Fevereiro',
    data: ['Encerrado'],
  },
  {
    title: 'Março',
    data: [
      '19.03 Guaíba/RS',
      '20.03 Gravataí/RS',
      '26.03 Florianópolis/SC',
      '27.03 São Paulo/SP',
    ],
  },
  {
    title: 'Abril',
    data: [
      '01.04 São Paulo/SP',
      '02.04 São Caetano/SP',
      '15.04 Santa Rosa/RS',
      '16.04 Piratini/RS',
      '19.04 Gravataí/RS',
    ],
  },
  {
    title: 'Maio',
    data: [
      '06.05 Porto Alegre/RS',
      '10.05 Rio de Janeiro/RJ',
      '11.05 Búzios/RJ',
      '19.05 Gravataí/RS',
      '21.05 São Paulo/SP',
    ],
  },
  {
    title: 'Junho',
    data: ['02.06 Salvador/BA', '02.06 Ilhéus/BA', '10.06 São Paulo/SP'],
  },
  {
    title: 'Julho',
    data: [
      '12.07 Porto Alegre/RS',
      '12.07 Porto Alegre/RS',
      '30.07 São Paulo/SP',
    ],
  },
  {
    title: 'Agosto',
    data: ['01.08 São Paulo/SP', '20.08 Vacaria/RS', '23.08 Ribeirão Preto/SP'],
  },
  {
    title: 'Setembro',
    data: ['Sem datas confirmadas'],
  },
  {
    title: 'Outubro',
    data: ['Sem datas confirmadas'],
  },
  {
    title: 'Novembro',
    data: ['Sem datas confirmadas'],
  },
  {
    title: 'Dezembro',
    data: ['25.12 Campo Grande/MT', '31.12 São Luis do Maranhão'],
  },
];

export default DATA;
