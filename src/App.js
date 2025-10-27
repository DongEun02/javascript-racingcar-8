import input from './view/input.js';
import parseCarNames from './utils/parseCarNames.js';
import createCar from './service/createCar.js';
import printWinner from './view/printWinner.js';
import validateInput from './utils/validateInput.js';
import RacingGame from './service/RacingGame.js';

class App {
  async run() {
    const { carNames, count } = await input();

    validateInput(carNames, Number(count));

    const carNameArray = parseCarNames(carNames);

    const cars = createCar(carNameArray);

    const game = new RacingGame(cars, Number(count));

    game.play();

    printWinner(cars);
  }
}

export default App;
