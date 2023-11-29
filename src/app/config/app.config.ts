import { random } from 'lodash';
const colorsArr: any = [
  '#EF0014',
  '#FD9B19',
  '#F96808',
  '#F22779',
  '#25B70D',
  '#7D1F76',
  '#65CCF2',
  '#24244F',
  '#9DE227',
  '#65CCF2',
  '#0A504E',
  '#C7FC09',
  '#FC6A78',
  '#5973B8',
  '#615F66',
  '#0F5092',
  '#4D0F30',
  '#0B0B40',
  '#FD8FA8',
  '#134495',
  '#EB0058',
];

const randomColorDefault: any = (index: number = random(0, colorsArr.length)) =>
  colorsArr.concat(
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr,
    colorsArr
  )[index];

export { colorsArr, randomColorDefault };
