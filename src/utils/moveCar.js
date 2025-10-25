import { Random } from '@woowacourse/mission-utils';

const moveCar = (cars) => {
  cars.forEach((car) => {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) car.move();
  });
};

export default moveCar;
