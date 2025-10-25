import Car from '../Car.js';

const createCar = (cars) => {
  return cars.map((car) => new Car(car));
};

export default createCar;
