import { Console } from '@woowacourse/mission-utils';

const printRoundResult = (cars) => {
  cars.forEach((car) => {
    Console.print(car.getMovePosition());
  });
};

export default printRoundResult;
