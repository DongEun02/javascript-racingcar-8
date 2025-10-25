import input from './utils/input.js';

class App {
  async run() {
    const { carNames, count } = await input();

    const cars = carNames.split(`,`).map((name) => name.trim());
  }
}

export default App;
