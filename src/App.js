import input from './utils/input.js';
import createCar from './utils/createCar.js';

class App {
  async run() {
    const { carNames, count } = await input();

    const carNameArray = carNames.split(`,`).map((name) => name.trim());

    const cars = createCar(carNameArray);
  }
}

export default App;
