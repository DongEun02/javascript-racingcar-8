import { Console } from '@woowacourse/mission-utils';

const moveResult = (cars) => {
  cars.forEach((car) => {
    Console.print(car.getMovePosition());
  });
};

export default moveResult;
