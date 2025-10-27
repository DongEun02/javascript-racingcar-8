import printRoundResult from '../view/printRoundResult.js';
import { Console } from '@woowacourse/mission-utils';

class RacingGame {
  constructor(cars, count) {
    this.cars = cars;
    this.count = count;
  }
  play() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.count; i++) {
      this.moveCars();
      printRoundResult(this.cars);
      Console.print('');
    }
  }
  moveCars() {
    this.cars.forEach((car) => car.move());
  }
}

export default RacingGame;
