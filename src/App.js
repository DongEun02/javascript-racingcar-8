import input from './utils/input.js';
import createCar from './utils/createCar.js';
import moveCar from './utils/moveCar.js';

class App {
  async run() {
    const { carNames, count } = await input();

    const carNameArray = carNames.split(`,`).map((name) => name.trim());

    const cars = createCar(carNameArray);

    for (let i = 0; i < Number(count); i++) moveCar(cars);
  }
}

export default App;
