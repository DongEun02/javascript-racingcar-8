import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) this.position += 1;
  }
  getMovePosition() {
    return `${this.name} : ${'-'.repeat(this.position)}`;
  }
  getPosition() {
    return this.position;
  }
  getName() {
    return this.name;
  }
}

export default Car;
