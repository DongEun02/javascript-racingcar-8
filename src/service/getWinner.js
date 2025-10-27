const getWinner = (cars) => {
  const maxDistance = Math.max(...cars.map((car) => car.getPosition()));

  const winners = [];
  cars.forEach((car) => {
    if (car.getPosition() === maxDistance) winners.push(car.getName());
  });

  return winners;
};

export default getWinner;
