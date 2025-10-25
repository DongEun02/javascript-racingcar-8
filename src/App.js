import input from './utils/input.js';

class App {
  async run() {
    const { carNames, count } = await input();
  }
}

export default App;
