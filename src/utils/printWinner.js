import { Console } from '@woowacourse/mission-utils';

const printWinner = (cars) => {
  const maxDistance = Math.max(...cars.map((car) => car.getPosition()));

  const winners = [];
  cars.forEach((car) => {
    if (car.getPosition() === maxDistance) winners.push(car.getName());
  });

  Console.print(`최종 우승자: ${winners.join(', ')}`);
};

export default printWinner;
