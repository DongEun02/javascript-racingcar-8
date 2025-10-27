import { Console } from '@woowacourse/mission-utils';
import getWinner from '../service/getWinner.js';

const printWinner = (cars) => {
  const winners = getWinner(cars);
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
};

export default printWinner;
