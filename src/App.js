import { Console } from '@woowacourse/mission-utils';
import input from './utils/input.js';
import createCar from './utils/createCar.js';
import moveCar from './utils/moveCar.js';
import moveResult from './utils/moveResult.js';
import printWinner from './utils/printWinner.js';

class App {
  async run() {
    const { carNames, count } = await input();

    const carNameArray = carNames.split(`,`).map((name) => name.trim());

    const cars = createCar(carNameArray);

    Console.print('\n실행 결과');

    for (let i = 0; i < Number(count); i++) {
      moveCar(cars);
      moveResult(cars);
      Console.print('');
    }

    printWinner(cars);
  }
}

export default App;
